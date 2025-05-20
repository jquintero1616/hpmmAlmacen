export interface kardex {
  id_kardex: string;
  id_producto: string;
  id_shopping: string;
  anio_creacion: string;
  tipo_movimiento: "Entrada" | "Salida";
  fecha_movimiento: Date;
  numero_factura: string;
  cantidad: number;
  precio_unitario: number;
  tipo_solicitud: "Requisicion" | "Pacto";
  requisicion_numero: string;
  estado: "Aprobado" | "Rechazado" | "En espera";
  observacion: string;
  create_at: Date;
  update_at: Date;
}

export interface NewKardex extends Omit<kardex, "id_kardex"> {}