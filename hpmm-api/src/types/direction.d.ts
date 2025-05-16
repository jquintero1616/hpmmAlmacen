export interface Direction {
  id_direction: number;
  name: string;
  estado: boolean;
  create_at: Date;
  update_at: Date;
}
export interface NewDirection extends Omit<Direction, "id_direction"> {}

