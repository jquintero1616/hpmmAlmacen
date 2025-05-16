
export interface Notification {
  id_noti: string;
  id_user: string;
  mensaje: string;
  tipo: "Pendiente" | "Enviado" | "Leido";
  estado: boolean;
  created_at?: Date;
  updated_at?: Date;
}
export interface NewNoti extends Omit<Notification, "id_noti"> {}