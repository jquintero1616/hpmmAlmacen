import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";


declare global {
  namespace Express {
    interface Request {
      /** Lo que inyecta tu auth middleware */
      user?: JwtPayload & { id_user: string; username: string };
    }
  }
}
export interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

export type JwtPayloadWithUserId = {
  userId: string;
};

export interface AuthResponse {
  token: string;
  userId: string;
}
