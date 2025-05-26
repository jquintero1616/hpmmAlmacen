import knex from "knex";
import db from "../db";
import { NewSubcategory } from "../types/subcategory";
import { randomUUID } from "crypto";

export const getAllSubcategoryModel = async (): Promise<NewSubcategory[]> => {
  return knexTableName().select("*").where({ estado: true });
};

export async function getSubcategoryByIdModel(
  id_subcategory: string
): Promise<NewSubcategory | null> {
  const subcategory = await knexTableName().where({ id_subcategory }).first();
  return subcategory || null;
}

export const createSubCategoryModel = async (
  subcategory: NewSubcategory
): Promise<NewSubcategory> => {
  const [newSubcategory] = await knexTableName()
    .insert({ ...subcategory, id_subcategory: randomUUID() })
    .returning("*");
  return newSubcategory;
};

export async function updateSubcategoryModel(
  id_subcategory: string,
  nombre: string,
  
): Promise<NewSubcategory | null> {
  const updated_at = new Date();
  const [updatedSubcategory] = await knexTableName()
    .where({ id_subcategory })
    .update({
      nombre,
     
      updated_at,
    })
    .returning("*");
  return updatedSubcategory || null;
}

export async function deleteSubcategoryModel(
  id_subcategory: string
): Promise<NewSubcategory | null> {
  const updated_at = new Date();
  const [updatedSubcategory] = await knexTableName()
    .where({ id_subcategory })
    .update({ estado: false, updated_at })
    .returning("*");
  return updatedSubcategory || null;
}

const knexTableName = () => {
  return db("subcategory");
};
