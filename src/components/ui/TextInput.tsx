"use client";

import {
  ChangeEventHandler,
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";
import EyeIcon from "../../assets/icons/eye.svg";
import EyeOffIcon from "@/assets/icons/eye-off.svg";
import Button from "./Button";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type TextInputVariant = "filled" | "outlined" | "standard";

interface TextInputProps {
  defaultValue?: string | number | readonly string[];
  debounceValue?: number;
  id?: string;
  label: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  type?: HTMLInputTypeAttribute;
  value?: string | number | readonly string[];
  variant?: TextInputVariant;
}

const TextInput = ({
  label,
  debounceValue,
  defaultValue,
  endIcon,
  id,
  name,
  onChange,
  startIcon,
  type,
  value,
  variant = "outlined",
}: TextInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const placeholder = label.trim().toLowerCase().replaceAll(" ", "_");
    id = !id ? `${placeholder}_id` : id;
    name = !name ? `${placeholder}_name` : name;
  }, []);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="text-gray-500">
        {label}
      </label>

      {type === "password" ? (
        <div
          className={twMerge(
            "rounded-sm outline-0 pr-2  flex items-center justify-between gap-2 ",
            variant === "filled"
              ? "bg-primary-50 hover:bg-primary focus:bg-primary has-[input:focus]:bg-primary-100 has-[button:focus]:bg-primary-100"
              : variant === "outlined"
              ? "border border-primary-50 hover:border-primary focus:border-primary has-[input:focus]:border-primary-100 has-[button:focus]:border-primary-100"
              : "rounded-none border-b border-b-primary-50 hover:border-b-primary focus:border-b-primary has-[input:focus]:border-b-primary-100 has-[button:focus]:border-b-primary-100"
          )}
        >
          <input
            type={isVisible ? "text" : "password"}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            className="outline-0 w-7/6 p-1"
          />

          <Button
            classname="p-1 shadow-none"
            onClick={() => setIsVisible((prev) => !prev)}
            variant="plain"
          >
            <Image alt="Eye icon" src={isVisible ? EyeOffIcon : EyeIcon} />
          </Button>
        </div>
      ) : (
        <input
          type={type ?? "text"}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={twMerge(
            "rounded-sm outline-0 p-1",
            variant === "filled"
              ? "bg-primary-50 hover:bg-primary focus:bg-primary"
              : variant === "outlined"
              ? "border border-primary-50 hover:border-primary focus:border-primary"
              : "rounded-none border-b border-b-primary-50 hover:border-b-primary focus:border-b-primary"
          )}
        />
      )}
    </div>
  );
};

export default TextInput;
