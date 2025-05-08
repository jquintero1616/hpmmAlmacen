import React from 'react';
import LoginCard from '../organisms/LoginCard';

export interface LoginTemplateProps {
  email: string;
  password: string;
  error?: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LoginTemplate: React.FC<LoginTemplateProps> = props => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
    <LoginCard {...props} />
  </div>
);

export default LoginTemplate;