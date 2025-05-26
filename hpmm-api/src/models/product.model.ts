import knex from "knex";
import db from "../db";
import { NewProduct } from "../types/product";
import { randomUUID } from "crypto";

//get all product
export const getAllProductModel = async (): Promise<NewProduct[]> => {
    const products = await knexTableName().select("*").where({ estado: true });
    return products;
}

export async function getProductByIdModel(
    id_product: string):
   Promise<NewProduct | null> {
  const product = await knexTableName().where({ id_product }).first();
  return product || null;
}


export const createProductModel = async (
  product: NewProduct
): Promise<NewProduct> => {
  const [createdProduct] = await knexTableName()
    .insert({ ...product, id_product: randomUUID() })
    .returning("*");
  return createdProduct;
};

export async function updateProductModel (
    id_product: string,
    id_subcategory : string,
    nombre: string,
    descripcion: string,
    stock_actual: number,
    stock_maximo: number,
    fecha_vencimiento: Date,
    numero_lote: string
    
): Promise<NewProduct | null> {
    const updated_at = new Date();
    const [updatedProduct] = await knexTableName()
    .where({ id_product })
    .update({
        nombre,
        id_subcategory,
        descripcion,
        stock_actual,
        stock_maximo,
        fecha_vencimiento,
        numero_lote,
        
        updated_at,
    })
    .returning("*");
    return updatedProduct || null;
}      

export async function deletePrudctModel(
    id_product: string)
    : Promise<NewProduct | null> {
    const updated_at = new Date();
    const [updatedProduct] = await knexTableName()
    .where({ id_product })
    .update({ estado: false, updated_at })
    .returning("*");
    return updatedProduct || null;
}



const knexTableName = () => {
  return db("product");
};
