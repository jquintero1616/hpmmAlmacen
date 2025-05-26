import knex from "knex";
import db from "../db";
import { NewVendedor } from "../types/vendedor";
import { randomUUID } from "crypto";


export const getAllVendedorModel  = async (): Promise<NewVendedor[]> => {
    return await knexTableName().select("*").where({ estado: true });
}

export async function getVendedorByIdModel(
    id_vendedor: string
): Promise<NewVendedor | null> {
    const vendedor = await knexTableName().where({ id_vendedor }).first();
    return vendedor || null;
}

export const createVendedorModel = async (
    data: NewVendedor
     
): Promise<NewVendedor> => {
    const [createdVendedor] = await knexTableName().insert({ ...data, id_vendedor: randomUUID() }).returning("*");
    return createdVendedor; 
}

export async function updateVendedorModel(
    id_vendedor: string,
    id_proveedor: string,
    nombre_contacto: string, 
    correo:string,
    estado: boolean
): Promise<NewVendedor> {
    const [updatedVendedor] = await knexTableName()
      .where({ id_vendedor })
      .update({ id_proveedor, 
        nombre_contacto, 
        correo, 
        estado })
      .returning("*");
    return updatedVendedor;
  }

  export async function deleteVendedorModel(id_vendedor: string): Promise<NewVendedor | null> {
    const [deletedVendedor] = await knexTableName()
      .where({ id_vendedor })
      .del()
      .returning("*");
    return deletedVendedor || null;
  }

const knexTableName = () => {
  return db("vendedor");
};
