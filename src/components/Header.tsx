"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import LogoSrc from "../assets/logo/FCLogo.svg";
import { twMerge } from "tailwind-merge";

const NAV_OPTIONS: { href: string; name: string }[] = [
  { href: "/login", name: "Login" },
  { href: "/signup", name: "SignUp" },
  { href: "/transactions", name: "Transactions" },
  { href: "/assistance", name: "AI Assistant" },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

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
        {NAV_OPTIONS.map((option, i) => (
          <Link
            key={i}
            href={option.href}
            className={twMerge(
              "hover:text-primary-dark",
              pathname === option.href
                ? "text-primary-300 border-b border-b-primary-300"
                : "text-primary-100"
            )}
          >
            {option.name}
          </Link>
        ))}

        <button
          className="cursor-pointer min-w-17.5 hover:text-primary-dark"
          onClick={() => handeChangeTheme()}
        >
          {theme === "light" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
