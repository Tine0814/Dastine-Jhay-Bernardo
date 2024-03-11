import { ReactNode } from "react";
import NavComponent from "../NavComponent";
import FooterComponent from "../FooterComponent";

type NavFooterProps = {
  children: ReactNode;
};

export default function NavFooterLayout({ children }: NavFooterProps) {
  return (
    <>
      <NavComponent />
      {children}
      <FooterComponent />
    </>
  );
}
