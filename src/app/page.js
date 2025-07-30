import Banner from "@/components/AllComponents/banner/Banner";
import ChooseUs from "@/components/AllComponents/choose/ChooseUs";
import Service from "@/components/AllComponents/service/Service";
import Success from "@/components/AllComponents/success/Success";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <Banner />
      <Success />
      <ChooseUs />
      <Service />
    </div>
  );
};

export default page;
