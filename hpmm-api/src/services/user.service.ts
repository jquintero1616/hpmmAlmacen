import * as UserModel from "../models/user.model";
import { NewUser } from "../types/user";
import bcrypt from "bcryptjs";
import logger from "../utils/loggers";

export const getAllUserService = async (): Promise<NewUser[]> => {
  try {
    const users = await UserModel.getAllUsersModel();
    return users;
  } catch (error) {
    logger.error("Error fetching users", error);
    throw error;
  }
};

export const getUserByIdService = async (
  id: number
): Promise<NewUser | null> => {
  return UserModel.getUserByIdModel(id);
};

export const createUserService = async (data: NewUser) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const userWithHashedPassword = { ...data, password: hashedPassword };
  return UserModel.createUserModel(userWithHashedPassword);
};

export const updateUserService = async (
  id: number,
  username: string,
  email: string,
  password: string,
  estado: boolean
) => {
  const updatedUser = await UserModel.updateUserModel(
    id,
    username,
    email,
    password,
    estado
  );
  return updatedUser;
};

export function removeUserService(id: number) {
  return UserModel.deleteUserModel(id);
}

export async function comparePasswords(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword);
}
