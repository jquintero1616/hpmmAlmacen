import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface AuthResponse {
  token: string;
  userId: string;
  username: string;
  id_role: string;
}

export interface JwtPayloadWithUserId extends JwtPayload {
  id_user: string;
  username: string;
}

export interface CustomRequest extends Request {
  user?: {
    id_user: string;
    username: string;
  };
}

declare global {
  namespace Express {
    interface Request {
      user?: { id_user: string; username: string };
    }
  }
}
