import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("roles").del();

  // Inserts seed entries
  await knex("roles").insert([
    {  
      id_rol: 'fe26a6db-6b5d-40b0-aca7-7bf2baf8418f',
      name: 'Administrador', 
      descripcion: 'Administrador del sistema',
      estado: true,
    },
    {  
      id_rol: 'fe26a6db-6b5d-40b0-aca7-7bf2baf8417f',
      name: 'JefaAlmacen', 
      descripcion: 'Jefa de Almacen',
      estado: true,
     },

    { 
      id_rol: 'fe26a6db-6b5d-40b0-aca7-7bf2baf8416f',
      name: 'Trabajador', 
      descripcion: 'Trabajador de almacen',
      estado: true,
    },
  ]);
}
