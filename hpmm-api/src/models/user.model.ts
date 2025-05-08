import knex from "knex";
import db from "../db";
import { NewUser } from "../types/user";
import { randomUUID } from "crypto";

export const getAllUsersModel = async (): Promise<NewUser[] | []> => {
  return knexTableName().select("*").where({ estado: true });
};

// User Id model
export async function getUserByIdModel(
  id_user: number
): Promise<NewUser | null> {
  const user = await knexTableName().where({ id_user }).first();
  return user || null;
}

// create User
export const createUserModel = async (user: NewUser): Promise<NewUser> => {
  const [createdUser] = await knexTableName()
    .insert({...user, id_user: randomUUID()})
    .returning("*");
  return createdUser;
};

// Update User
export async function updateUserModel(
  id_user: number,
  username: string,
  email: string,
  password: string,
  estado: boolean
): Promise<NewUser | null> {
  const updated_at = new Date();
  const [UpdatedUser] = await knexTableName()
    .where({ id_user })
    .update({
      username,
      email,
      password,
      estado,
      updated_at,
    })
    .returning("*");

  return UpdatedUser || null;
}

// delete User

export async function deleteUserModel(
  id_user: number
): Promise<NewUser | null> {
  const updated_at = new Date();
  const [updatedUser] = await knexTableName()
    .where({ id_user })
    .update({ estado: false, updated_at })
    .returning("*");
  return updatedUser || null;
}

const knexTableName = () => {
  return db("users");
};
