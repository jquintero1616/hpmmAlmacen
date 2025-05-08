import React, { ChangeEvent } from 'react';

export interface InputProps {
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ name, type = 'text', value, onChange, placeholder = '', className = '' }) => (
  <div className="mb-4">
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${className}`}
    />
  </div>
);

export default Input;