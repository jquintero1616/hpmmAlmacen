import { Knex } from "knex";
import dotenv from 'dotenv';
import path from 'path';

// Asegúrate de apuntar correctamente al archivo .env
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: process.env.PSQL_DB_HOST,
      user: process.env.PSQL_DB_USER,
      password: process.env.PSQL_DB_PASSWORD,
      database: process.env.PSQL_DB_DATABASE,
      port: process.env.PSQL_DB_PORT
        ? parseInt(process.env.PSQL_DB_PORT, 10)
        : 5432,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
};

export default config;

