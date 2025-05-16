import knex from "knex";
import db from "../db";
import { NewDirection } from "../types/direction";
import { randomUUID } from "crypto";


export const getAllDirectionsModel = async (): Promise<NewDirection[]> => {
    return knexTableName().select("*").where({ estado: true });
    }


export async function getDirectionByIdModel(id_direction: number): Promise<NewDirection | null> {
    const direction = await knexTableName().where({ id_direction }).first();
    return direction || null;
    }   


export const createDirectionModel = async (direction: NewDirection): Promise<NewDirection> => {
    const [createdDirection] = await knexTableName()
        .insert({ ...direction, id_direction: randomUUID() })
        .returning("*");
    return createdDirection;
    }   

export async function updateDirectionModel(
    id_direction: number,
    name: string,
    estado: boolean
): Promise<NewDirection | null> {
    const updated_at = new Date();
    const [updatedDirection] = await knexTableName()
        .where({ id_direction })
        .update({
            name,
            estado,
            updated_at,
        })
        .returning("*");

    return updatedDirection || null;
}   

export async function deleteDirectionModel(id_direction: number): Promise<NewDirection | null> {
    const updated_at = new Date();
    const [updatedDirection] = await knexTableName()
        .where({ id_direction })
        .update({ estado: false, updated_at })
        .returning("*");
    return updatedDirection || null;
}

const knexTableName = () => {
    return db("directions");
}