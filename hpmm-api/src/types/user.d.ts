export interface User {
  id_user: number;
  username: string;
  email: string;
  password: string;
  estado: boolean;
}

export interface NewUser extends Omit<User, "id_user"> {}
