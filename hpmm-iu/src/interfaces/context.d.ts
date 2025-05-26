import { users } from "./user.interface";
import { pacts } from "./pacts.interface";



export interface AuthContextType {
    token: string | null;
    authenticate: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}
// USER CONTEXT TYPE USUARIOS
export interface UserContextType {
  users: User[];

  GetUsersContext: () => Promise<User[] | null>;
  GetUserByIdContext: (id_user: string) => Promise<User | undefined>;
  PostCreateUserContext: (user: NewUser) => Promise<User>;
  PutUpdateUserContext: (id_user: string, user: User) => Promise<void>;
  DeleteUserContext: (id_user: string) => Promise<void>;
}

// USER CONTEXT TYPE PACTOS
export interface PactContextType {
  pacts: pacts[];
  GetPactsContext: () => Promise<pacts[] | null>;
  GetPactByIdContext: (id_pacts: string) => Promise<pacts | undefined>;
  PostCreatePactContext: (pact: pacts) => Promise<pacts>;
  PutUpdatePactContext: (id_pacts: string, pact: pacts) => Promise<void>;
  DeletePactContext: (id_pacts: string) => Promise<void>;
}



export interface ProviderProps {
  children: React.ReactNode;
}