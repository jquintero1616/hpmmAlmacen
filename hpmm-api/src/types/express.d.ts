import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

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
