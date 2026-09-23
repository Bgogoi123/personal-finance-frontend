"use client";

import Link from "next/link";
import Image from "next/image";
import Heading from "./Heading";
import LogoSrc from "../assets/logo/FCLogo.svg";

const Header = () => {
  return (
    <header className="bg-background-white p-4 text-foreground sticky top-0 flex flex-row items-center">
      <Link href="/">
        <Image src={LogoSrc} alt="FinCogent Logo" width={50} />
      </Link>

      <div className="ml-auto flex flex-row gap-4 items-center text-foreground-primary ">
        <Link href="/login" className="hover:text-foreground-primary-dark">
          Login
        </Link>
        <Link href="/signup" className="hover:text-foreground-primary-dark">
          SignUp
        </Link>
        <Link
          href="/transactions"
          className="hover:text-foreground-primary-dark"
        >
          Transactions
        </Link>
        <Link href="/assistance" className="hover:text-foreground-primary-dark">
          AI Assistant
        </Link>
      </div>
    </header>
  );
};

export default Header;
