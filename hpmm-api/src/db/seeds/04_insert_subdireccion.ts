import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Borra subdireccion y cualquier FK que la apunte (no tocará direction)
  await knex("subdireccion").del();
  await knex("subdireccion").insert([
    {
      id_subdireccion: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      id_direction:    "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      nombre:            "Gestión de Información",
      estado:          true,
    },
    {
      id_subdireccion: "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
      id_direction:    "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
      nombre:            "Asistencial",
      estado:          true,
    },
    {
      id_subdireccion: "cccccccc-cccc-cccc-cccc-cccccccccccc",
      id_direction:    "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
      nombre:            "Investigación",
      estado:          true,
    },
  ]);
}
