import { User } from "./user.interface";

export interface AuthContextType {
    token: string | null;
    authenticate: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

export interface UserContextType {
    user : User [];
    fetchUserById: (id: number) => Promise<User | undefined>;
    fetchUsers: () => Promise<User[] | null>;
    createUser: (
        id: number,
        user: User
    ) => Promise<User>;
    updateUser: (id: number, user: User) => Promise<void>;
    deleteUser: (id: number) => Promise<void>;
}

export interface ProviderProps {
    children: ReactNode;
  }