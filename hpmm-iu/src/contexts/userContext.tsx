import React, { createContext, useState, useEffect } from "react";

import {
    GetUsersService,
    GetUserByIdService,
    PostCreateUserService,
    PutUpdateUser,
    DeleteUserService,
} from "../services/userService";

import { UserContextType, ProviderProps } from "../interfaces/context";
import { userInfertace} from "../interfaces/user.interface";
import { useAuth } from "../hooks/useAuth";



export const UserContext = createContext<UserContextType>({
    users: [],
    GetUsersContext : async () => [],
    GetUserByIdContext : async () => undefined,
    PostCreateUserContext : async () => {},
    PutUpdateUserContext : async () => {},
    DeleteUserContext : async () => {},
});

export const UserProvider: React.FC<ProviderProps> = ({ children }) => {
    const [users, SetUser] = useState<userInfertace[]>([]);
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            GetUsersService()
            .then((data) => {
               if (data !== null) {
                SetUser(data);
               }else{
                console.error("Error al recuperar los usuarios");
               }
            })
            .catch((error) => {
                console.error("Error al recuperar los usuarios", error);
            });
        }
    }, [isAuthenticated]);


const GetUserByIdContext = async (id_user: string ): Promise<userInfertace | undefined> => {
    try {
        const users = await GetUserByIdService(id_user);
        return users;
    } catch (error) {
        console.error("Error al recuperar el usuario", error);
        return undefined;
    }
};


const GetUsersContext = async (): Promise<userInfertace[] | null> => {
    try {
        const users = await GetUsersService();
        return users;
    } catch (error) {
        console.error("Error al recuperar los usuarios", error);
        return null;
    }
};


const PostCreateUserContext = async (user: userInfertace): Promise<void> => {
  try {
    // Ahora pasamos al servicio exactamente lo que espera:
    const created: userInfertace = await PostCreateUserService(user);

    // Y actualizamos el estado con el usuario que devuelve el backend
    SetUser(prev => [ created, ...prev ]);
  } catch (error) {
    console.error("Error al crear el usuario", error);
  }
};


const PutUpdateUserContext = async  (id_user: string, user: userInfertace): Promise<void> => {
    try {
        await PutUpdateUser(id_user, user);
        SetUser((prev) =>
            prev.map((u) => (u.id_user === id_user ? { ...u, ...user } : u))
        );
    } catch (error) {
        console.error("Error al actualizar el usuario", error);
        throw error; // Re-lanzamos el error para que pueda ser manejado por el componente que llama a esta función

    }
};



const DeleteUserContext = async (id_user: string): Promise<void> => {
    try {
        await DeleteUserService(id_user);
        SetUser(prev => prev.filter(u => u.id_user !== id_user));
    } catch (error) {
        console.error("Error al eliminar el usuario", error);
    }
};



return (
    <UserContext.Provider
        value={{
            users,
            GetUserByIdContext,
            GetUsersContext,
            PostCreateUserContext,
            PutUpdateUserContext,
            DeleteUserContext,
        }}
    >
        {children}
    </UserContext.Provider>     
);

};
