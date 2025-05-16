import knex from "knex";
import db from "../db";
import { NewEmploye } from "../types/employes";
import { randomUUID } from "crypto";

// get all employes model
export const getallEmployesModel = async (): Promise<NewEmploye[]> => {
  return knexTableName().select("*").where({ estado: true });
};
// Get by id_employes model
export async function getEmployeByIdModel(
  id_employes: string
): Promise<NewEmploye | null> {
  const employe = await knexTableName().where({ id_employes }).first();
  return employe || null;
}
// Create employe
export const createEmployeModel = async (
  employe: NewEmploye
): Promise<NewEmploye> => {
  const [createdEmploye] = await knexTableName()
    .insert({ ...employe, id_employes: randomUUID() })
    .returning("*");
  return createdEmploye;
};
// Update employe
export async function updateEmployeModel(
  id_employes: string,
  name: string,
  puesto: string,
  email: string,
  telefono: string,
  estado: boolean
): Promise<NewEmploye | null> {
  const updated_at = new Date();
  const [updatedEmploye] = await knexTableName()
    .where({ id_employes })
    .update({
      name,
      puesto,
      email,
      telefono,
      estado,
      updated_at,
    })
    .returning("*");

  return updatedEmploye || null;
}
// Delete employe
export async function deleteEmployeModel(
  id_employes: string
): Promise<NewEmploye | null> {
  const updated_at = new Date();
  const [updatedEmploye] = await knexTableName()
    .where({ id_employes })
    .update({ estado: false, updated_at })
    .returning("*");
  return updatedEmploye || null;
}

const knexTableName = () => {
  return db("employes");
};
