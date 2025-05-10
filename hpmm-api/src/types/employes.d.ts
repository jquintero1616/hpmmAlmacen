export interface Employe {
  id_employes: number;
  name: string;
  puesto: string;
  correo: string;
  telefono: varchar;
  estado: boolean;
}

export interface NewEmploye extends Omit<Employe, "id_employes"> {}
