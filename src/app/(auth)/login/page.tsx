import Image from "next/image";
import FinCogentLogoSrc from "../../../assets/logo/FinCogent.svg";

const Login = () => {
  const loginAction = async (e: FormData) => {
    "use server";
    console.log(
      `login action :: identifier : ${e.get("identifier")}, password: ${e.get(
        "password"
      )}`
    );
  };

  return (
    // <div className="flex flex-col gap-20 pt-20 self-center h-full">
    //   <Image src={FinCogentLogoSrc} alt="Fin Cogent Logo" />

    <form
      action={loginAction}
      className="rounded-md p-10 flex flex-col gap-4 items-center self-center bg-background-white"
    >
      <div className="flex flex-col gap-1">
        <label>Username / Email</label>
        <input
          type="text"
          name="identifier"
          id="identifier"
          className="rounded-md p-1 bg-background-grey"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="rounded-md p-1 bg-background-grey"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-primary px-4 py-1 cursor-pointer text-foreground-light"
      >
        Login
      </button>
    </form>
    // </div>
  );
};

export default Login;
