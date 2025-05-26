// src/services/kardex.service.ts
import * as KardexModel from "../models/kardex.model";
import { NewKardex } from "../types/kardex";
import { KardexFilter, KardexDetail } from "../models/kardex.model";
import logger from "../utils/loggers";

// ————————————————————————————————————————————————————————————————————————
// 1) Tus servicios CRUD existentes (sin cambios)
// ————————————————————————————————————————————————————————————————————————

export const getAllKardexService = async (): Promise<NewKardex[]> => {
  try {
    return await KardexModel.getallKardexModel();
  } catch (error) {
    logger.error("Error fetching kardex", error);
    throw error;
  }
};

export const getKardexByIdService = async (id: string): Promise<NewKardex | null> => {
  try {
    return await KardexModel.getKardexByIdModel(id);
  } catch (error) {
    logger.error("Error fetching kardex by id", error);
    throw error;
  }
};

export const createKardexService = async (data: NewKardex): Promise<NewKardex> => {
  try {
    return await KardexModel.createKardexModel(data);
  } catch (error) {
    logger.error("Error creating kardex", error);
    throw error;
  }
};

export const updateKardexService = async (
  id: string,
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
): Promise<NewKardex | null> => {
  try {
    return await KardexModel.updateKardexModel(
      id,
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
      estado
    );
  } catch (error) {
    logger.error("Error updating kardex", error);
    throw error;
  }
};

export const deleteKardexService = async (
  id_kardex: string
): Promise<NewKardex | null> => {
  try {
    const existing = await KardexModel.getKardexByIdModel(id_kardex);
    if (!existing) return null;
    return await KardexModel.deleteKardexModel(id_kardex);
  } catch (error) {
    logger.error("Error deleting (deactivating) kardex", error);
    throw error;
  }
};

// ————————————————————————————————————————————————————————————————————————
// 2) Nuevo servicio: detalles con filtros y paginación
// ————————————————————————————————————————————————————————————————————————

/**
 * Obtiene el detalle de Kardex, filtrado por estado y paginado.
 * @param filter.limit      Número máximo de registros a traer.
 * @param filter.offset     Desplazamiento (offset) a aplicar.
 * @param filter.statuses   Lista de estados: ["Aprobado","Rechazado","En espera"].
 */

export const getKardexDetailsService = async (
  filter: KardexFilter
): Promise<KardexDetail[]> => {
  try {
    return await KardexModel.getKardexDetailsModel(filter);
  } catch (error) {
    logger.error("Error fetching filtered kardex details", error);
    throw error;
  }
};
