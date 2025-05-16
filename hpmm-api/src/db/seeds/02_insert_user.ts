import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // 1) Limpiar la tabla users
  await knex("users").del();

  // 2) Insertar usuarios cuyos id_user luego referenciará
  await knex("users").insert([
    {
      id_user: "33333333-3333-3333-3333-333333333333",
      username: "José Quintero",
      email: "jquintero@tuempresa.com",
      password: "12345678",
      id_rol: "22222222-2222-2222-2222-222222222222",
      estado: true,
    },
    {
      id_user: "44444444-4444-4444-4444-444444444444",
      username: "María López",
      email: "mlopez@tuempresa.com",
      password: "12345678",
      id_rol: "22222222-2222-2222-2222-222222222222",
      estado: true,
    },
    {
      id_user: "55555555-5555-5555-5555-555555555555",
      username: "Carlos Sánchez",
      email: "csanchez@tuempresa.com",
      password: "12345678",
      id_rol: "22222222-2222-2222-2222-222222222222",
      estado: true,
    },
    {
      id_user: "66666666-6666-6666-6666-666666666666",
      username: "Ana Martínez",
      email: "amartinez@tuempresa.com",
      password: "12345678",
      id_rol: "22222222-2222-2222-2222-222222222222",
      estado: true,
    },
    {
      id_user: "77777777-7777-7777-7777-777777777777",
      username: "Luis Gómez",
      email: "lgomez@tuempresa.com",
      password: "12345678",
      id_rol: "22222222-2222-2222-2222-222222222222",
      estado: true,
    },
  ]);
}
