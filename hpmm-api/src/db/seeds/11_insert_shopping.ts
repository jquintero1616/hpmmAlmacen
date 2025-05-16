import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // 1) Limpiamos la tabla
  await knex("shopping").del();

  // 2) Insertamos filas usando los id_requisi exactos de arriba
  await knex("shopping").insert([
    {
      id_shopping: "11111111-1111-1111-1111-111111111133",
      id_scompra: "11111111-1111-1111-1111-111111111111",
      //id_vendedor: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      fecha_compra: "2025-05-10",
      total: 1000.50
    },
    {
      id_shopping: "11111111-1111-1111-1111-111111111144",
      id_scompra: "22222222-2222-2222-2222-222222222222",
      //id_vendedor: "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
      fecha_compra: "2025-05-10",
      total: 1000.50
    },
    {
      id_shopping: "11111111-1111-1111-1111-111111111155",
      id_scompra: "33333333-3333-3333-3333-333333333333",
      //id_vendedor: "cccccccc-cccc-cccc-cccc-cccccccccccc",
      fecha_compra: "2025-05-10",
      total: 1000.50,
    }
  ]);
}
