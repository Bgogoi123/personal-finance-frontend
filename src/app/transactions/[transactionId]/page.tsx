import { Metadata } from "next";

interface IProps {
  params: Promise<{ transactionId: string }>;
}

export const generateMetadata = async ({
  params,
}: IProps): Promise<Metadata> => {
  const {} = await params;

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Electricity Bill");
    }, 2000);
  });

  return { title: `${title} Transaction` };
};

const TransactionDetails = async ({ params }: IProps) => {
  const transactionId = (await params).transactionId;

  // if (transactionId === "111")
  //   throw new Error("Error Loading Transaction Detail");

  return <div>Transaction Details of transaction with ID {transactionId}</div>;
};

export default TransactionDetails;
