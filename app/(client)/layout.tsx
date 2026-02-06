import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col container mx-auto px-4 md:px-0">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
