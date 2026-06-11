import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <h1 className="text-3xl font-bold mb-4">
      {children}
    </h1>
  );
}