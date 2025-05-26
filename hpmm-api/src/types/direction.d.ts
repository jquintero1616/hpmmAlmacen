export interface Direction {
  id_direction: string;
  nombre: string;
  estado: boolean;
  create_at: Date;
  update_at: Date;
}
export interface NewDirection extends Omit<Direction, "id_direction"> {}

