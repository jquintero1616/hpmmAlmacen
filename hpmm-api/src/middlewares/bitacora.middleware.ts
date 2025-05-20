// src/middlewares/bitacora.middleware.ts
import { Request, Response, NextFunction } from "express";
import * as BitacoraService from "../services/bitacora.service";
import db from "../db";

/** Opciones de configuración por tabla */
export interface BitacoraOptions {
  tabla: string;             // nombre de la tabla en BD
  idColumn: string;          // columna PK en BD
  idParam?: string;          // parámetro de ruta (por defecto "id")
  modulo?: string;           // nombre lógico del módulo
  fields?: string[];         // lista de campos a guardar
}

export const bitacoraInterceptor = ({
  tabla,
  idColumn,
  idParam = "id",
  modulo = tabla,
  fields,
}: BitacoraOptions) => {
  // helper para quedarnos solo con las keys deseadas
  const pick = (obj: any, keys: string[]) =>
    keys.reduce((acc, k) => {
      if (obj[k] !== undefined) acc[k] = obj[k];
      return acc;
    }, {} as Record<string, any>);

  return async (req: Request, res: Response, next: NextFunction) => {
    // solo intercepta POST, PUT y DELETE
    if (!["POST", "PUT", "DELETE"].includes(req.method)) {
      return next();
    }

    const fecha_evento = new Date();
    const id_usuario = typeof req.user === "object" ? req.user.userId : null;
    const nombre_usuario =
      typeof req.user === "object" ? req.user.username : null;
    const accion =
      req.method === "POST"
        ? "CREATE"
        : req.method === "PUT"
        ? "UPDATE"
        : "DELETE";

    // 1) extraemos el ID del registro (POST puede venir en res.locals.newId)
    const registro_id = String(
      req.params[idParam] ||
      req.body[idColumn] ||
      (res.locals.newId ?? "")
    );

    // 2) capturamos valores anteriores si es PUT o DELETE (estado lógico)
    let valores_anterior: string | null = null;
    if ((req.method === "PUT" || req.method === "DELETE") && registro_id) {
      const before = await db(tabla).where(idColumn, registro_id).first();
      if (before) {
        valores_anterior = JSON.stringify(
          fields ? pick(before, fields) : before
        );
      }
    }

    // 3) al terminar la respuesta…
    res.once("finish", async () => {
      // sólo guardamos si la respuesta fue exitosa (2xx)
      if (res.statusCode < 200 || res.statusCode >= 300) return;

      // 4) capturamos valores nuevos para POST, PUT y DELETE lógicos
      let valores_nuevos: string | null = null;
      if (registro_id) {
        const after = await db(tabla).where(idColumn, registro_id).first();
        if (after) {
          const keys = fields ?? Object.keys(req.body);
          valores_nuevos = JSON.stringify(pick(after, keys));
        }
      }

      // 5) guardamos en la tabla bitacora
      try {
        await BitacoraService.saveBitacora({
          id_usuario,
          nombre_usuario,
          accion,
          tabla_afectada: tabla,
          registro_id,
          valores_anterior,
          valores_nuevos,
          fecha_evento,
          ip_origin: req.ip,
          descripcion_evento: `${accion} en ${tabla}`,
          modulo_afecto: modulo,
        });
      } catch (err) {
        console.error("Error guardando bitácora:", err);
      }
    });

    next();
  };
};
