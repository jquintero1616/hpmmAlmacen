// src/models/kardex.model.ts
import db from "../db";
import { NewKardex } from "../types/kardex";
import { randomUUID } from "crypto";

// ————————————————————————————————————————————————————————————————————————
// 1) Tipos para filtros y resultado con joins
// ————————————————————————————————————————————————————————————————————————

export interface KardexFilter {
  limit?: number;
  offset?: number;
  statuses?: ("Aprobado" | "Rechazado" | "Pendiente")[];
}

export interface KardexDetail {
  id_kardex: string;
  name: string;               // nombre del empleado
  fecha_movimiento: Date;
  tipo_movimiento: "Entrada" | "Salida";
  tipo_solicitud: "Requisicion" | "Pacto";
  numero_factura: string;
  cantidad: number;
  precio_unitario: number;
  nombre: string;             // nombre del producto
  descripcion: string;
  stock_actual: number;
  stock_maximo: number;
  fecha_vencimiento: Date;
  numero_lote: string;
  tipo: "Aprobado" | "Rechazado" | "Pendiente";
}

// ————————————————————————————————————————————————————————————————————————
// 2) Consulta base (sin filtros/paginación)
// ————————————————————————————————————————————————————————————————————————

const baseKardexQuery = () =>
  db("Kardex as k")
    .select(
      "k.id_kardex",
      "e.name",
      "k.fecha_movimiento",
      "k.tipo_movimiento",
      "k.tipo_solicitud",
      "k.numero_factura",
      "k.cantidad",
      "k.precio_unitario",
      "p.nombre",
      "p.descripcion",
      "p.stock_actual",
      "p.stock_maximo",
      "p.fecha_vencimiento",
      "p.numero_lote",
      "k.tipo"
    )
    .join("shopping as s",            "s.id_shopping",      "k.id_shopping")
    .join("solicitud_compras as sc",  "sc.id_scompra",      "s.id_scompra")
    .join("requisitions as r",        "r.id_requisi",       "sc.id_requisi")
    .join("employes as e",             "e.id_employes",      "r.id_employes")
    .join("product as p",             "p.id_product",       "k.id_product");

// ————————————————————————————————————————————————————————————————————————
// 3) Función filtrada/paginada
// ————————————————————————————————————————————————————————————————————————

export const getKardexDetailsModel = async (
  opts: KardexFilter = {}
): Promise<KardexDetail[]> => {
  const { limit, offset, statuses } = opts;
  const q = baseKardexQuery();

  if (statuses && statuses.length > 0) {
    q.whereIn("k.tipo", statuses);
  }
  if (limit !== undefined) {
    q.limit(limit);
  }
  if (offset !== undefined) {
    q.offset(offset);
  }

  return q;
};

// ————————————————————————————————————————————————————————————————————————
// 4) Tus funciones CRUD originales (sin cambios)
// ————————————————————————————————————————————————————————————————————————

export const getallKardexModel = async (): Promise<NewKardex[]> => {
  return knexTableName().select("*");
};

export async function getKardexByIdModel(
  id_kardex: string
): Promise<NewKardex | null> {
  const kardex = await knexTableName().where({ id_kardex }).first();
  return kardex || null;
}

export const createKardexModel = async (
  kardex: NewKardex
): Promise<NewKardex> => {
  const [createdKardex] = await knexTableName()
    .insert({ ...kardex, id_kardex: randomUUID() })
    .returning("*");
  return createdKardex;
};

export async function updateKardexModel(
  id_kardex: string,
  id_producto: string,
  id_shopping: string,
  anio_creacion: string,
  tipo_movimiento: "Entrada" | "Salida",
  fecha_movimiento: Date,
  numero_factura: string,
  cantidad: number,
  precio_unitario: number,
  tipo_solicitud: "Requisicion" | "Pacto",
  requisicion_numero: string,
  tipo: "Aprobado" | "Rechazado" | "Pendiente",
  observacion: string,
  estado: boolean
): Promise<NewKardex | null> {
  const updated_at = new Date();
  const [updatedKardex] = await knexTableName()
    .where({ id_kardex })
    .update({
      id_producto,
      id_shopping,
      anio_creacion,
      tipo_movimiento,
      fecha_movimiento,
      numero_factura,
      cantidad,
      precio_unitario,
      tipo_solicitud,
      requisicion_numero,
      tipo,
      observacion,
      estado,
      updated_at,
    })
    .returning("*");
  return updatedKardex || null;
}

export async function deleteKardexModel(
  id_kardex: string
): Promise<NewKardex | null> {
  const updated_at = new Date();
  const [updatedKardex] = await knexTableName()
    .where({ id_kardex })
    .update({ estado: false, updated_at })
    .returning("*");
  return updatedKardex || null;
}

const knexTableName = () => db("Kardex");
