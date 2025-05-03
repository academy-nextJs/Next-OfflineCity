import { ReactNode } from "react";
import MyNavbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <MyNavbar />
      {children}
      <Footer />
    </>
  );
}
