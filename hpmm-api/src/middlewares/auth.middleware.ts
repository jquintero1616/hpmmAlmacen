// src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction, RequestHandler } from "express";
import { verifyToken } from "../utils/jwt.utils";
import { CustomRequest, JwtPayloadWithUserId } from "../types/Auth";

export const authenticateJWT: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  // 1) Si no hay cabecera o formato inválido
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Token no proporcionado o formato inválido" });
    return;  // aquí salimos sin devolver Response
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token) as JwtPayloadWithUserId;
    // inyectamos user en la request
    (req as CustomRequest).user = {
      id_user: decoded.id_user,
      username: decoded.username || "",
    };
    next();  // seguimos al siguiente handler
  } catch (err) {
    res.status(403).json({ message: "Token inválido o expirado" });
    return;
  }
};
