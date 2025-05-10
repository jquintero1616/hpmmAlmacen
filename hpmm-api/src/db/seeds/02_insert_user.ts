import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("users").del();
  await knex("users").insert([
    { id_user: "33333333-3333-3333-3333-333333333333", name: "José Quintero", correo: "jquintero@tuempresa.com", telefono: "+50412345678", id_rol: "22222222-2222-2222-2222-222222222222", estado: true },
  ]);
}

