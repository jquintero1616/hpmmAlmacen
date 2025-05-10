import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("role").del();
  await knex("role").insert([
    { id_rol: "11111111-1111-1111-1111-111111111111", name: "Admin", descripcion: "Administrador del sistema", estado: true },
    { id_rol: "22222222-2222-2222-2222-222222222222", name: "User",  descripcion: "Usuario estándar",       estado: true },
  ]);
}