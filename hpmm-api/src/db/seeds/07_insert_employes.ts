import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // 1) Limpiar la tabla
  await knex("employes").del();

  // 2) Insertar empleados de ejemplo
  await knex("employes").insert([
    {
      id_employes: "11111111-aaaa-bbbb-cccc-111111111111",
      id_user: "33333333-3333-3333-3333-333333333333", // existe en users
      id_units: "dddddddd-dddd-dddd-dddd-dddddddddddd", // del seed de units
      id_subdireccion: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa", // del seed de subdireccion
      id_direction: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", // del seed de direction
      name: "José Quintero",
      email: "jquintero@tuempresa.com",
      telefono: "+50412345678",
      puesto: "Contador",
      estado: true,
    },
    {
      id_employes: "22222222-bbbb-cccc-dddd-222222222222",
      id_user: "66666666-6666-6666-6666-666666666666",
      id_units: "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      id_subdireccion: "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
      id_direction: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
      name: "María López",
      email: "mlopez@tuempresa.com",
      telefono: "+50487654321",
      puesto: "Analista Financiero",
      estado: true,
    },
    {
      id_employes: "33333333-cccc-dddd-eeee-333333333333",
      id_user: "77777777-7777-7777-7777-777777777777",
      id_units: "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      id_subdireccion: "cccccccc-cccc-cccc-cccc-cccccccccccc",
      id_direction: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
      name: "Carlos Pérez",
      email: "cperez@tuempresa.com",
      telefono: "+50423456789",
      puesto: "Coordinador de Ventas",
      estado: true,
    },
  ]);
}
