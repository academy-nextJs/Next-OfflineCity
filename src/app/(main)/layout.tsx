import { ReactNode } from "react";
import MyNavbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import 'leaflet/dist/leaflet.css'

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="lg:pb-11">
      <MyNavbar />
      {children}
      <Footer />
    </div>
  );
}
