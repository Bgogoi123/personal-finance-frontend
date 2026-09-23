import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PFID | Personal Finance Intelligence Dashboard",
    template: "%s | PFID",
  },
  description:
    "A Personal Finance Management Application that helps users track income and expenses while encouraging financial discipline  through a minimal, intuitive interface. It includes an AI-powered transaction assistant that lets users add expenses through natural language, asking follow-up questions if any details are missing before creating the record.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-background-grey text-foreground">
        <Header />
        <div className="p-4 flex flex-col gap-0.5 h-225">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
