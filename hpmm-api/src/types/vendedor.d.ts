export interface Vendedor {
  id_vendedor: string;
  nombre: string;
  correo: string;
  telefono: string;
  estado: boolean;
  created_at?: Date;
  updated_at?: Date;
}
export interface NewVendedor extends Omit<Vendedor, "id_vendedor"> {}