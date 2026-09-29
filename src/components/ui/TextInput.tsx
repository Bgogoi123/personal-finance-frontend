"use client";

import { DetailedHTMLProps, InputHTMLAttributes, useEffect } from "react";

type TextInputProps = {
  label: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextInput = ({ label, id, name, onChange, type }: TextInputProps) => {
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
      <input
        type={type ?? "text"}
        name={name}
        id={id}
        onChange={onChange}
        className="rounded-sm outline-0 border border-primary-50 hover:border-primary focus:border-primary p-1"
      />
    </div>
  );
};

export default TextInput;
