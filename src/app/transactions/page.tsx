import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions",
};

interface IProps {
  searchParams: Promise<{ title?: string }>;
}

const Transactions = async ({ searchParams }: IProps) => {
  const { title } = await searchParams;

  return <div>Transactions {title}</div>;
};

export default Transactions;
