export interface Direction {
  id_direction: number;
    name: string;
    estado: boolean;

}
export interface NewDirection extends Omit<Direction, "id_direction"> {}

