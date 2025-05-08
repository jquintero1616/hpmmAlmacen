// src/interfaces/input.ts

export interface InputProps {
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: string;
  name: string;

  /** Añadimos estos para poder usar placeholder y clases extras */
  placeholder?: string;
  className?: string;
}
