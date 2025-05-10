export interface Pact {
  id_pacts: number;
  name: string;
  tipo: "Diario" | "Quincenal" | "Mensual" | "Trimestral";
  estado: boolean;
}

export interface NewPact extends Omit<Pact, "id_pacts"> {}