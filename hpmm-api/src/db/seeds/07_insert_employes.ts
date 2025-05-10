
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("employes").del();
  await knex("employes").insert([
    {
      id_user:       "33333333-3333-3333-3333-333333333333",
      id_units:      "dddddddd-dddd-dddd-dddd-dddddddddddd",
      id_subdireccion:"aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      id_direction:  "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      name:          "José Quintero",
      correo:        "jquintero@tuempresa.com",
      telefono:      "+50412345678",
      puesto:        "Contador",
      estado:        true
    },
  ]);
}
