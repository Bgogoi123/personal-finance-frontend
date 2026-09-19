"use client";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  return (
    <div>
      <h3>Page Not Found!</h3>
      <p>The page you're looking for doesn't exist - {pathname}</p>
    </div>
  );
};

export default NotFound;
