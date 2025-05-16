import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("units").del();
  await knex("units").insert([
    { 
      id_units: "dddddddd-dddd-dddd-dddd-dddddddddddd", 
      id_subdireccion: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa", 
      name: "Contabilidad", 
      estado: true 
    },
    { 
      id_units: "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee", 
      id_subdireccion: "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb", 
      name: "Tesorería",    
      estado: true 
    },
    { 
      id_units: "ffffffff-ffff-ffff-ffff-ffffffffffff", 
      id_subdireccion: "cccccccc-cccc-cccc-cccc-cccccccccccc", 
      name: "Ventas",    
      estado: true 
    }
  ]);
}