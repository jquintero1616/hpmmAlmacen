import { userInfertace} from '../interfaces/user.interface';
import axiosPrivateInstance from '../helpers/axiosPrivateInstance';

const API_BASE_URL = 'http://localhost:3000/api' ;

export const GetUsersService = async (): Promise<userInfertace[] | null> => {
  try {

    const response = await axiosPrivateInstance.get(`${API_BASE_URL}/users`);
    return response.data.users;
  } catch (error) {
    console.error("Error al recuperar los usuarios", error);
    throw error;
  }
  
};


// Fetch all users with axiosPrivateInstance
export const GetUserByIdService = async (id_user: string): Promise<userInfertace | undefined> => {
  try {
    const response = await axiosPrivateInstance.get<userInfertace>(`${API_BASE_URL}/users/${id_user}`);

    return response.data;
  } catch (error) {
    console.error("Error al recuperar el usuario", error);
    throw error;
  }
};

//create user with axiosPrivateInstance
// ...existing code...
export const PostCreateUserService = async (user: userInfertace): Promise<userInfertace> => {
  try {
    const response = await axiosPrivateInstance.post(`${API_BASE_URL}/users`, {
      username: user.username,
      email: user.email,
      password: user.password,
      id_rol: user.id_rol,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.user; // Ajusta según la respuesta real del backend
  } catch (error) {
    console.error("Error al crear el usuario", error);
    throw error;
  }
}
// ...existing code...
  

// update user with axiosPrivateInstance
export const PutUpdateUser = async ( id_user: string, user: userInfertace): Promise<void> => {
  try {
    await axiosPrivateInstance.put(`${API_BASE_URL}/users/${id_user}`, {
     user,  
    });
  } catch (error) {
    console.error(`Error al actualizar el usuario con id ${id_user}`, error);
    throw error;
  }
}


//delete user with axiosPrivateInstance   
export const DeleteUserService = async (id_user: string): Promise<void> => {
  try {
    await axiosPrivateInstance.delete(`${API_BASE_URL}/users/${id_user}`);
  } catch (error) {
    console.error(`Error al eliminar el usuario con id ${id_user}`, error);
    throw error;
  }
}
