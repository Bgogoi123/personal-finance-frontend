import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface CustomLinkProps {
  label: string;
  className?: string;
  href?: string;
}

const CustomLink = ({ className, label, href = "" }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "rounded-sm px-1 text-primary-100 hover:text-primary-dark decoration-0 outline-0 focus:text-primary-dark focus:bg-primary-50",
        className
      )}
    >
      {label}
    </Link>
  );
};

export default CustomLink;
