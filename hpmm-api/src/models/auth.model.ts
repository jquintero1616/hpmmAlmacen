// src/models/auth.model.ts
import db from '../db';

export const getUserByEmail = async (email: string) => {
  // .first() te devuelve sólo un objeto o `undefined`
  return await db('users')
    .select('*')
    .where({ email })
    .first();
};
