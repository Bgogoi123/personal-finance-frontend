import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions",
};

interface IProps {
  searchParams: Promise<{ title?: string }>;
}

const Transactions = async ({ searchParams }: IProps) => {
  const { title } = await searchParams;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });

  return <div>Transactions {title}</div>;
};

export default Transactions;
