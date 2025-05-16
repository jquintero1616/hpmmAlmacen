import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // 1) Limpiar la tabla
  await knex("direction").del();

  // 2) Insertar direcciones con los IDs que luego referenciará employes
  await knex("direction").insert([
    {
      id_direction: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      name:         "Dirección Administrativa",
      estado:       true,
    },
    {
      id_direction: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
      name:         "Dirección Financiera",
      estado:       true,
    },
    {
      id_direction: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
      name:         "Dirección de Operaciones",
      estado:       true,
    },
  ]);
}
