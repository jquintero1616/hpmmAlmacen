export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  estado: boolean;
}

export interface NewUser extends Omit<User, "id"> {}