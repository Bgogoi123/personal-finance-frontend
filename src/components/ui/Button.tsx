import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

type Variant = "filled" | "outlined" | "plain";

interface ButtonProps {
  children: ReactNode;
  classname?: string;
  variant?: Variant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "reset" | "submit";
}

const Button = ({
  children,
  classname,
  onClick,
  variant = "filled",
  type,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        "rounded-sm shadow-xs duration-300 px-4 py-1 cursor-pointer scale-100 active:scale-95",
        classname,
        variant === "filled"
          ? "bg-primary-100 hover:bg-primary-200 text-foreground-light"
          : variant === "outlined"
          ? "rounded-sm outline-0 border border-primary-100 hover:bg-primary-200 focus:border-primary"
          : "rounded-sm outline-0 hover:bg-primary-50"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
