export interface vendedor {
  id_vendedor: string;
  id_proveedor: string
  nombre_contacto: string;
  correo: string;
  estado: boolean;
  created_at?: Date;
  updated_at?: Date;
}
export interface NewVendedor extends Omit<vendedor, "id_vendedor"> {}