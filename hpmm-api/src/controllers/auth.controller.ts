// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import { authenticateUser } from "../services/auth.service";
import { asyncWrapper } from "../utils/errorHandler";

// Nota: ahora no retornamos el res.json(), solo lo invocamos y salimos.
export const login = asyncWrapper(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ msg: "Correo y contraseña requeridos" });
      return;
    }

    const auth = await authenticateUser(email, password);
    if (!auth) {
      res.status(401).json({ msg: "Credenciales inválidas" });
      return;
    }

    res.json({
      msg: "Inicio de sesión exitoso",
      token: auth.token,
      userId: auth.userId,
      username: auth.username,
      id_rol: auth.id_role,
    });
    // no return aquí
  }
);

export const checkSession = asyncWrapper(
  async (req: Request, res: Response) => {
    // Si llegamos aquí, el token ya fue validado por el middleware
    res.json({
      authenticated: true,
      userId: req.user?.id_user,
      username: req.user?.username,
      msg: "Sesión válida",
    });
    // tampoco retornamos nada
  }
);

export const logout = asyncWrapper(
  async (req: Request, res: Response) => {
    res.json({ msg: "Sesión cerrada" });
    // tampoco retornamos nada
  }
);