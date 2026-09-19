"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-background-light p-4 text-foreground sticky top-0">
      <h1>
        <Link href="/">Personal Finance Intelligence Dashboard</Link>
      </h1>
    </header>
  );
};

export default Header;
