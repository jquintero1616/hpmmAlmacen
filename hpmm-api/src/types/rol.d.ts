export interface Roles {
  id_rol: string;
  name: string;
  descripcion: string;
  estado: boolean;
  create_at?: Date;
  update_at?: Date;
}
  export interface NewRol extends Omit<Roles, "id_rol"> {}