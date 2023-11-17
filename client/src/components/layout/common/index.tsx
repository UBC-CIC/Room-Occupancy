import React from "react";
import { Navbar } from "../../common/navbar";

type Props = {
  children: React.ReactNode;
};

export const CommonLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
