"use client";

import { twMerge } from "tailwind-merge";
import { Variant } from "./types";
import { ChangeEventHandler, useEffect } from "react";

interface SelectInputProps {
  className?: string;
  id?: string;
  isRequired?: boolean;
  name?: string;
  noOptionText?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement, HTMLSelectElement>;
  options?: { id: string | number; title: string }[];
  label: string;
  variant?: Variant;
}

const SelectInput = ({
  label,
  className,
  id,
  isRequired,
  name,
  noOptionText,
  onChange,
  options,
  variant = "outlined",
}: SelectInputProps) => {
  useEffect(() => {
    const placeholder = label.trim().toLowerCase().replaceAll(" ", "_");
    id = !id ? `${placeholder}_id` : id;
    name = !name ? `${placeholder}_name` : name;
  }, []);

  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <label htmlFor={id} className="text-gray-500">
        {label}
      </label>

      <select
        required={isRequired}
        onChange={(e) => onChange?.(e)}
        className={twMerge(
          "rounded-sm outline-0 p-1.5 flex items-center justify-between gap-2 ",
          variant === "filled"
            ? "bg-primary-50 hover:bg-primary focus:bg-primary has-[input:focus]:bg-primary-100 has-[button:focus]:bg-primary-100"
            : variant === "outlined"
            ? "border border-primary-50 hover:border-primary focus:border-primary has-[input:focus]:border-primary-100 has-[button:focus]:border-primary-100"
            : "rounded-none border-b border-b-primary-50 hover:border-b-primary focus:border-b-primary has-[input:focus]:border-b-primary-100 has-[button:focus]:border-b-primary-100"
        )}
      >
        {options && Array.isArray(options) && options.length > 0 ? (
          options.map((optn) => (
            <option key={optn.id} value={optn.id} className="bg-primary-50">
              {optn.title}
            </option>
          ))
        ) : (
          <option disabled>{noOptionText ?? "No Options Found."}</option>
        )}
      </select>
    </div>
  );
};

export default SelectInput;
