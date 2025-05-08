import { Request, Response } from "express";
import * as UserService from "../services/user.service";
import { asyncWrapper } from "../utils/errorHandler";
import { NewUser } from "../types/user";

// Listar todos los usuarios
export const fetchAllUsersController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const users = await UserService.getAllUserService();
    res.status(200).json({
      msg: "Users fetched successfully",
      totalUsers: users.length,
      users,
    });
  }
);

// Obtener un usuario por ID
export const fetchUserByIdController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id, 10);
    const user = await UserService.getUserByIdService(id);

    if (!user) {
      res.status(404).json({ msg: "User not found" });
      return;
    }

    res.status(200).json({ msg: `User found with id ${id}`, user });
  }
);

// Registrar un nuevo usuario
export const registerUserController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const userData: NewUser = req.body;
    const newUser = await UserService.createUserService(userData);
    res.status(201).json(newUser);
  }
);

// Editar un usuario existente
export const editUserController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id, 10);
    const { username, email, password, estado } = req.body;
    const updatedUser = await UserService.updateUserService(
      id,
      username,
      email,
      password,
      estado
    );

    if (!updatedUser) {
      res.status(404).json({ msg: "User not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  }
);

// Eliminar un usuario
export const removeUserController = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id, 10);
    const user = await UserService.removeUserService(id);

    if (!user) {
      res.status(404).json({ msg: "Usuario no funciono" });
      return;
    }

    res.status(200).json({
      message: "Usuario eliminado correctamente",
      user,
    });
  }
);
