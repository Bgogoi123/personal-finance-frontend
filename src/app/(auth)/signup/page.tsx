"use client";

import Form from "next/form";
import Link from "next/link";
import TextInput from "@/components/ui/TextInput";
import { signUpAction } from "@/app/form-actions";
import Button from "@/components/ui/Button";
import CustomLink from "@/components/ui/CustomLink";
import SelectInput from "@/components/ui/SelectInput";

const SignUp = () => {
  return (
    <Form
      action={signUpAction}
      className="rounded-md shadow-md w-full p-10 flex flex-col gap-4 bg-background-white"
    >
      <div className="grid grid-cols-2 gap-5">
        <TextInput isRequired label="Name" name="name" id="name" />

        <TextInput
          isRequired
          label="Phone Number"
          name="phone"
          id="phone"
          type="number"
        />

        <TextInput
          isRequired
          label="Email ID"
          name="email"
          id="email"
          type="email"
        />

        <TextInput isRequired label="Username" name="username" id="username" />

        <TextInput
          isRequired
          label="Password"
          name="password"
          id="password"
          type="password"
        />

        <TextInput
          isRequired
          label="Confirm Password"
          name="confirmpassword"
          id="confirmpassword"
          type="password"
        />

        <SelectInput
          isRequired
          label="Select Your Role"
          className="self-start"
          noOptionText="No Roles Found."
          options={[
            { id: "1", title: "Student" },
            { id: "2", title: "Professor" },
            { id: "3", title: "Data Analyst" },
          ]}
        />
      </div>

      <div className="w-full pt-4 flex flex-col gap-4">
        <Button>Sign Up</Button>

        <div className="flex gap-2 w-full justify-center">
          <label className="text-gray-400">Already a Member?</label>{" "}
          <CustomLink
            href="/login"
            label="Log in here."
            className="rounded-sm px-1 text-primary-100 hover:text-primary-dark decoration-0 outline-0 focus:text-primary-dark focus:bg-primary-50"
          />
        </div>
      </div>
    </Form>
  );
};

export default SignUp;
