import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // 1) Limpiamos la tabla
  await knex("units_x_pacts").del();

  // 2) Insertamos filas usando los id_requisi exactos de arriba
  await knex("units_x_pacts").insert([
    {
      id_units: "dddddddd-dddd-dddd-dddd-dddddddddddd",
      id_pacts: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
     
    },
     {
      id_units: "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      id_pacts: "6d5c4b3a-2f1e-0d9c-8b7a-6f5e4d3c2b1a",
     
    },
      {
      id_units: "ffffffff-ffff-ffff-ffff-ffffffffffff",
      id_pacts: "12345678-9abc-def0-1234-56789abcdef0",
     
    },
  ]);
}
