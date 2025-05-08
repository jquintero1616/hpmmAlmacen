import type { Knex } from 'knex';
import bcrypt from 'bcryptjs';

export async function seed(knex: Knex): Promise<void> {

  const hashedAdminPassword = await bcrypt.hash('admin123', 10);
  const hashedUserPassword = await bcrypt.hash('user123', 10);
  await knex('users').del();
  await knex('users').insert([
    {
      username: 'admin',
      email: 'admin@example.com',
      password: hashedAdminPassword,
      estado: true,
    },
    {
      username: 'user1',
      email: 'user1@example.com',
      password: hashedUserPassword,
      estado: true,
    },
  ]);
}

