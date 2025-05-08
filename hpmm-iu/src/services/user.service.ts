import { User, NewUser } from '../interfaces/user.interface';
import axiosPrivateInstance from '../helpers/axiosPrivateInstance';

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

interface ApiResponse<T> {
  msg: string;
  payload: T;
}

export const fetchUsers = async (): Promise<User[] | null> => {
  try {

    const response = await axiosPrivateInstance.get(`${baseUrl}/users`);
    return response.data.users;
  } catch (error) {
    console.error("Error al recuperar los usuarios", error);
    throw error;
  }
  
};

// Fetch all users with axiosPrivateInstance
export const fetchUserById = async (
  id: number

): Promise<User | undefined> => {
  try {
    const response = await axiosPrivateInstance.get<ApiResponse<User>>(
      `${baseUrl}/users/${id}`
    );
    return response.data.payload;
  } catch (error) {
    console.error('Error al recuperar el usuario por ID', error);
    throw error;
  }
};
//create user with axiosPrivateInstance
export const createUser = async (user: NewUser): Promise<User> => {
  try {
    const response = await axiosPrivateInstance.post<ApiResponse<User>>(
      `${baseUrl}/users`,
      {
        username: user.username,
        email:    user.email,
        password: user.password,
    
      }
    );
    return response.data.payload;
  } catch (error) {
    console.error('Error al crear el usuario', error);
    throw error;
  }
};

// update user with axiosPrivateInstance
export const updateUser = async (
  id: number,
  user : User
): Promise<void> => {
  try {
    await axiosPrivateInstance.put(`${baseUrl}/users/${id}}`, {
      user,

    });
  } catch (error) {
    console.error(`Error al actualizar el usuario con ID ${id}`, error);
    throw error;
  }
};

//delete user with axiosPrivateInstance   
export const deleteUserId = async (id: number): Promise<void> => {
  try {
    await axiosPrivateInstance.delete<User>(`${baseUrl}/users/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el usuario con ID ${id}`, error);
    throw error;
  }
};