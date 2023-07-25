"use client";

import React from "react";
import type { IconType } from "react-icons";

interface Props {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;

  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FunctionComponent<Props> = ({ label, onClick, disabled, icon: Icon, outline, small }) => {
  return (
    <button
      className={`relative rounded-lg w-full
      disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 transition 
        ${outline ? "bg-white" : "bg-rose-500"}
        ${outline ? "border-black" : "border-rose-500"}
        ${outline ? "text-black" : "text-white"}

        ${small ? "py-1" : "py-2"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "font-normal" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
  `}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon className="absolute left-4 top-3" size={24} />}
      {label}
    </button>
  );
};

export default Button;
