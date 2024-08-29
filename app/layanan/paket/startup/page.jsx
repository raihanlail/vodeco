import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";
import HeroStartup from "./hero";
import Form from "./form";

const Page = () => {
  return (
    <div>
      <div className="bg-cover bg-hero min-h-3.5">
        <Navbar />
        <HeroStartup />
      </div>
      <Form/>

      <Footer />
    </div>
  );
};

export default Page;
