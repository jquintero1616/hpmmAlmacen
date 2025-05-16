import knex from "knex";
import db from "../db";
import { NewUnitPact } from "../types/units_x_pacts";
import { randomUUID } from "crypto";

export const getallUnitsPactsModel = async (): Promise<NewUnitPact[]> => {
  return knexTableName().select("*");
};

export async function getUnitPactByIdModel(
  id_units_x_pacts: string
): Promise<NewUnitPact | null> {
  const UnitPact = await knexTableName().where({ id_units_x_pacts }).first();
  return UnitPact || null;
}

export const createUnitPactModel = async (
  data: NewUnitPact
): Promise<NewUnitPact> => {
  const [newUnitPact] = await knexTableName()
    .insert({ ...data, id_units_x_pacts: randomUUID() })
    .returning("*");
  return newUnitPact;
};

export async function updateUnitPactModel(
  id_units_x_pacts: string,
  data: NewUnitPact
): Promise<NewUnitPact | null> {
  const updated_at = new Date();
  const [updatedUnitPact] = await knexTableName()
    .where({ id_units_x_pacts })
    .update({
      data,
      updated_at,
    })
    .returning("*");
  return updatedUnitPact || null;
}

const knexTableName = () => {
  return db("units_x_pacts");
};
