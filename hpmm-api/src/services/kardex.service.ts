import * as EmployeModel from "../models/kardex.model";
import { NewKardex } from "../types/kardex";
import logger from "../utils/loggers";

export const getAllKardexService = async (): Promise<NewKardex[]> => {
    try {
        const kardex = await EmployeModel.getallKardexModel();
        return kardex;
    } catch (error) {
        logger.error("Error fetching kardex", error);
        throw error;
    }
};

export const getKardexByIdService = async (id: string): Promise<NewKardex | null> => {
  try {
    const kardex = await EmployeModel.getKardexByIdModel(id);
    return kardex;
  } catch (error) {
    logger.error("Error fetching kardex", error);
    throw error;
  }
};

export const createKardexService = async (data: NewKardex) => {
  try {
    return await EmployeModel.createKardexModel(data);
  } catch (error) {
    logger.error("Error creating kardex", error);
    throw error;
  }
};

export const updateKardexService = async (
    id:string,
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
    estado: "Aprobado" | "Rechazado" | "En espera",
    observacion: string,
   
) => {
    const updateKardexService = await EmployeModel.updateKardexModel (
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
        estado,
        observacion
    );
    return updateKardexService;
};

export async function deleteKardexService(
    id_kardex: string): Promise<NewKardex | null> {
        const existing = await EmployeModel.getKardexByIdModel(id_kardex);
        if (!existing) return null;
    
        const deactivatedKardex = await EmployeModel.deleteKardexModel(id_kardex);
        return deactivatedKardex;
    }