export interface Roles {
    id_rol: number;
    name: string;
    descripcion: string;
    estado: boolean;
  }
  export interface NewRol extends Omit<Roles, "id_rol"> {}