import { loginAction } from "@/app/form-actions";
import TextInput from "@/components/ui/TextInput";
import Form from "next/form";
import Link from "next/link";

const Login = () => {
  return (
    <Form
      action={loginAction}
      className="rounded-md shadow-md w-full p-10 flex flex-col gap-6 bg-background-white"
    >
      <TextInput
        label="Username or Email or Phone Number"
        name="identifier"
        id="identifier"
      />

      <TextInput
        label="Password"
        name="password"
        id="password"
        type="password"
      />

      <button
        type="submit"
        className="rounded-sm bg-primary px-4 py-1 cursor-pointer text-foreground-light"
      >
        Login
      </button>

      <div className="flex gap-2 w-full pt-10 justify-center">
        <label className="text-gray-400">Not a Member?</label>{" "}
        <Link
          href="/signup"
          className="text-primary-100 hover:text-primary-dark"
        >
          Sign Up
        </Link>
      </div>
    </Form>
  );
};

export default Login;
