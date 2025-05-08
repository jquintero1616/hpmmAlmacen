// src/services/auth.service.ts
import { getUserByEmail } from '../models/auth.model';
import { AuthResponse } from '../types/express';
import { generateToken } from '../utils/jwt.utils';
import bcrypt from 'bcryptjs';

export const authenticateUser = async (
  email: string,
  password: string
): Promise<AuthResponse | null> => {
  // 1) Trae el usuario directamente por email
  const user = await getUserByEmail(email);

  // 2) Si no existe o la contraseña no empata, retorna null
  if (!user) return null;
  const passwordMatches = await bcrypt.compare(password, user.password);
  if (!passwordMatches) return null;

  // 3) Éxito: genera token
  return {
    token: generateToken(user.id),
    userId: user.id,
  };
};
