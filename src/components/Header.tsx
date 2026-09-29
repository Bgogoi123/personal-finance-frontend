"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import LogoSrc from "../assets/logo/FCLogo.svg";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  function handeChangeTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="shadow-xs bg-background-white p-4 sticky top-0 flex flex-row items-center">
      <Link href="/">
        <Image src={LogoSrc} alt="FinCogent Logo" width={50} />
      </Link>

      <div className="ml-auto flex flex-row gap-4 items-center text-primary">
        <Link href="/login" className="hover:text-primary-dark">
          Login
        </Link>
        <Link href="/signup" className="hover:text-primary-dark">
          SignUp
        </Link>
        <Link href="/transactions" className="hover:text-primary-dark">
          Transactions
        </Link>
        <Link href="/assistance" className="hover:text-primary-dark">
          AI Assistant
        </Link>

        <button
          className="cursor-pointer min-w-17.5 hover:text-primary-dark"
          onClick={() => handeChangeTheme()}
        >
          {theme === "light" ? "☀️ Light" : "🌙 Dark"}
          {/* <Image src={LogoSrc} alt="Theme Switch Icon" width={40} /> */}
        </button>
      </div>
    </header>
  );
};

export default Header;
