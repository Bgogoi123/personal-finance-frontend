"use client";

import { loginAction } from "@/app/form-actions";
import Button from "@/components/ui/Button";
import CustomLink from "@/components/ui/CustomLink";
import TextInput from "@/components/ui/TextInput";
import Form from "next/form";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState<{
    identifier: string;
    password: string;
  }>({ identifier: "", password: "" });

  return (
    <Form
      action={loginAction}
      className="rounded-md shadow-md w-full p-10 flex flex-col gap-6 bg-background-white"
    >
      <TextInput
        isRequired
        label="Username or Email or Phone Number"
        name="identifier"
        id="identifier"
        value={data.identifier}
        onChange={(e) => {
          setData((prev) => ({ ...prev, identifier: e.target.value }));
        }}
      />

      <TextInput
        isRequired
        label="Password"
        name="password"
        id="password"
        type="password"
        value={data.password}
        onChange={(e) => {
          setData((prev) => ({ ...prev, password: e.target.value }));
        }}
      />

      <Button type="submit">Login</Button>

      <div className="flex gap-2 w-full pt-10 justify-center">
        <label className="text-gray-400">Not a Member?</label>{" "}
        <CustomLink
          href="/signup"
          className="text-primary-100 hover:text-primary-dark"
          label="Sign Up."
        />
      </div>
    </Form>
  );
};

export default Login;
