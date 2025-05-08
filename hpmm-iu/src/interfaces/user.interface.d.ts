export interface User {
    id?: number;
    username: string;
    email: string;
    estado: boolean;
  }
  
  export interface NewUser {
    username: string;
    email: string;
    password: string;
  }