import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isPrimary?: boolean;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string; // Agrega esta línea
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isPrimary = false,
  size = "small",
  style,
  disabled = false,
  type = "button",
  className = "", // Agrega esta línea
}) => {
  const baseColor = isPrimary ? "bg-red-500" : "bg-gray-300";
  const hoverColor = isPrimary ? "hover:bg-red-700" : "hover:bg-gray-700";
  const padding = {
    small: "py-1 px-2",
    medium: "py-2 px-4",
    large: "py-3 px-6",
  }[size];

  const fontSize = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  }[size];

  return (
    <button
      type={type}
      className={`${baseColor} ${hoverColor} text-white font-bold rounded focus:outline-none focus:shadow-outline ${padding} ${fontSize} ${className}`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;