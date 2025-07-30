import Banner from "@/components/AllComponents/banner/Banner";
import ChooseUs from "@/components/AllComponents/choose/ChooseUs";
import Navbar from "@/components/AllComponents/navbar/Navbar";
import Success from "@/components/AllComponents/success/Success";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <Success />
      <ChooseUs />
    </div>
  );
};

export default page;
