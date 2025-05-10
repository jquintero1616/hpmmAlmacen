export interface Units {
    id_units: number;
    name: string;
    estado: boolean;
   
}

export interface NewUnit extends Omit<Units, "id_units"> {}