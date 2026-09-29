"use client";

import Form from "next/form";
import Link from "next/link";
import TextInput from "@/components/ui/TextInput";
import { signUpAction } from "@/app/form-actions";

const SignUp = () => {
  return (
    <Form
      action={signUpAction}
      className="rounded-md shadow-md w-full p-10 flex flex-col gap-4 bg-background-white"
    >
      <div className="flex gap-10 items-center">
        <TextInput label="Name" name="name" id="name" />
        <TextInput label="Phone Number" name="phone" id="phone" type="number" />
      </div>

      <div className="flex gap-10 items-center">
        <TextInput label="Email ID" name="email" id="email" type="email" />
        <TextInput label="Username" name="username" id="username" />
      </div>

      <div className="flex gap-10 items-center">
        <TextInput
          label="Password"
          name="password"
          id="password"
          type="password"
        />
        <TextInput
          label="Confirm Password"
          name="confirmpassword"
          id="confirmpassword"
          type="password"
        />
      </div>

      <div className="w-full pt-4 flex flex-col gap-4">
        <button
          type="submit"
          className="rounded-sm w-full bg-primary px-4 py-1 cursor-pointer text-foreground-light"
        >
          Sign Up
        </button>

        <div className="flex gap-2 w-full justify-center">
          <label className="text-gray-400">Already a Member?</label>{" "}
          <Link
            href="/login"
            className="text-primary-100 hover:text-primary-dark"
          >
            Log in here
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default SignUp;
