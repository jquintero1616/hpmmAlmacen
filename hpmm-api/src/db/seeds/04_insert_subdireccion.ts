import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("subdireccion").del();
  await knex("subdireccion").insert([
    { id_subdireccion: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa", id_direction: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", name: "Gestión de Información", estado: true },
    { id_subdireccion: "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb", id_direction: "6d5c4b3a-2f1e-0d9c-8b7a-6f5e4d3c2b1a", name: "Asistencial",           estado: true },
    { id_subdireccion: "cccccccc-cccc-cccc-cccc-cccccccccccc", id_direction: "abcdef12-3456-7890-abcd-ef1234567890", name: "Investigación",    estado: true },
  ]);
}