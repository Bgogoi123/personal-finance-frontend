import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "AI Assistanct",
    template: "%s | AI Assitanct | PFID",
  },
};

const AssistanceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <span className="text-caption-1">Assistance Layout</span>
    </div>
  );
};

export default AssistanceLayout;
