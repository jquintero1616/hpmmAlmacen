import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", table => {
    table.uuid("id_user").primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string("name").notNullable();
    table.string("correo").notNullable().unique();
    table.string("telefono").nullable();
    table.uuid("id_rol").notNullable();
    table.boolean("estado").notNullable().defaultTo(true);
    table.timestamps(true, true);
    table.foreign("id_rol").references("id_rol").inTable("role").onDelete("RESTRICT");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
}