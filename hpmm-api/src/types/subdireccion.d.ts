export interface Subdireccion {
  id_subdireccion: number;  
    nombre: string;
    estado: boolean;
   
}
export interface NewSubdireccion extends Omit<Subdireccion, "id_subdireccion"> {}