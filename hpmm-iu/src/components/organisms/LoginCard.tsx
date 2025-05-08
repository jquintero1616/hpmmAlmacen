import React from 'react';
import Logo from '../atoms/Logo';
import LoginForm, { LoginFormProps } from '../molecules/LoginForm';

const LoginCard: React.FC<LoginFormProps> = props => (
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <div className="flex justify-center mb-6">
      <Logo className="h-12 w-auto" />
    </div>
    <LoginForm {...props} />
  </div>
);

export default LoginCard;