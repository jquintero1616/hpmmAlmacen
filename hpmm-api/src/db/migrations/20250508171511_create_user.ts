import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  return knex.schema.createTable("users", (table) => {
    // Primary Key & Foreign Key
    table.uuid("id_user").primary().defaultTo(knex.raw("uuid_generate_v4()")); // PK

    // Table fields
    table.string("username", 100).notNullable().unique();
    table.string("email", 255).notNullable().unique();
    table.string("password", 255).notNullable();
    table.boolean("estado").notNullable().defaultTo(true);
    table.timestamps(true, true);

    // Relationships
    // FK
    table.uuid("id_rol").references("id_rol").inTable("roles");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
}
