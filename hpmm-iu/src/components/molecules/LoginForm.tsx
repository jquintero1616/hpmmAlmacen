import React, { FormEvent } from 'react';
import Input from '../atoms/input';
import Button from '../atoms/Button';
import ErrorMessage from './ErrorMessage';

export interface LoginFormProps {
  email: string;
  password: string;
  error?: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <Input
      name="email"
      type="email"
      value={email}
      onChange={onEmailChange}
      placeholder="tu@correo.com"
    />

    <Input
      name="password"
      type="password"
      value={password}
      onChange={onPasswordChange}
      placeholder="••••••••"
    />

    {error && <ErrorMessage message={error} />}

    <Button
      type="submit"
      className="w-full bg-blue-600 text-white hover:bg-blue-700"
    >
      Entrar
    </Button>
  </form>
);

export default LoginForm;