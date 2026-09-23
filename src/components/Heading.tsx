"use client";

import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";

interface IHeadingProps {
  children: ReactNode;
  className?: string;
  headingSize: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ children, className, headingSize }: IHeadingProps) => {
  const SIZE_CLASSES: Record<IHeadingProps["headingSize"], string> = {
    "1": "text-heading-1",
    "2": "text-heading-2",
    "3": "text-heading-3",
    "4": "text-heading-4",
    "5": "text-heading-5",
    "6": "text-heading-6",
  };

  const TAGS: Record<
    IHeadingProps["headingSize"],
    keyof JSX.IntrinsicElements
  > = {
    "1": "h1",
    "2": "h2",
    "3": "h3",
    "4": "h4",
    "5": "h5",
    "6": "h6",
  };

  const Tag = TAGS[headingSize];

  return (
    <Tag className={twMerge("font-bold", SIZE_CLASSES[headingSize], className)}>
      {children} - {headingSize}
    </Tag>
  );
};

export default Heading;
