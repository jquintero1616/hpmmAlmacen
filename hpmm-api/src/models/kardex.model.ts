import knex from "knex";
import db from "../db";
import { NewKardex } from "../types/kardex";
import { randomUUID } from "crypto";

// get all kardex
export const getallKardexModel = async (): Promise<NewKardex[]> => {
    return knexTableName().select("*").where({ estado: true });
};

// get kardex by id
export async function getKardexByIdModel(
    id_kardex: string
): Promise<NewKardex | null> {
  const kardex = await knexTableName().where({ id_kardex }).first();
  return kardex || null;
}

// create kardex
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
    estado: "Aprobado" | "Rechazado" | "En espera",
    observacion: string 
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
            estado,
            observacion,
            updated_at,
        })
        .returning("*");
    return updatedKardex || null;
}

export async function deleteKardexModel(id_kardex: string): Promise<NewKardex | null> {
    const updated_at = new Date();
    const [updatedKardex] = await knexTableName()
        .where({ id_kardex })
        .update({ estado: false, updated_at })
        .returning("*");
    return updatedKardex || null;
}

const knexTableName = () => {
  return db("Kardex");
};
