import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET = process.env.JWT_SECRET!;
const EXPIRES_IN = "1h";

export function generateToken(payload: object): string {
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });
}

export function verifyToken(token: string): any {
  return jwt.verify(token, SECRET);
}

