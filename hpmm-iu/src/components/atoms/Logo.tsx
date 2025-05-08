import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;