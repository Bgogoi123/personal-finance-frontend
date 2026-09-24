import Image from "next/image";
import { ReactNode } from "react";
import logosrc from "../../assets/logo/FinCogent.svg";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-20 pt-20 self-center h-full">
      <Image src={logosrc} alt="Fin Cogent Logo" loading="eager" />
      {children}
    </div>
  );
};

export default AuthLayout;
