import React from "react";
import Container from "../../common/Container";
import Image from "next/image";

const Success = () => {
  return (
    <div className="py-[280px] bg-[#F9F9FB] relative">
      <Container>
        <div className="flex gap-8 justify-center">
          <div className="flex flex-col items-center">
            <h3 className="font-extrabold font-open-sans text-[64px] leading-[68px] mb-6 text-[#1bbf00]">
              53k
            </h3>
            <h4 className="font-open-sans font-bold text-[36px] text-[#141135] leading-10">
              Happy client
            </h4>
          </div>
          <div className="w-1 h-[132px] bg-[#4f585f]/20"></div>
          <div className="flex flex-col items-center ">
            <h3 className="font-extrabold font-open-sans text-[64px] leading-[68px] mb-6 text-[#1bbf00]">
              10k
            </h3>
            <h4 className="font-open-sans font-bold text-[36px] text-[#141135] leading-10">
              Projects Done
            </h4>
          </div>
          <div className="w-1 h-[132px] bg-[#4f585f]/20"></div>
          <div className="flex flex-col items-center">
            <h3 className="font-extrabold font-open-sans text-[64px] leading-[68px] mb-6 text-[#1bbf00]">
              120
            </h3>
            <h4 className="font-open-sans font-bold text-[36px] text-[#141135] leading-10">
              Gets Award
            </h4>
          </div>
          <div className="w-1 h-[132px] bg-[#4f585f]/20"></div>
          <div className="flex flex-col items-center ">
            <h3 className="font-extrabold font-open-sans text-[64px] leading-[68px] mb-6 text-[#1bbf00]">
              16
            </h3>
            <h4 className="font-open-sans font-bold text-[36px] text-[#141135] leading-10">
              Operated Years
            </h4>
          </div>
        </div>
      </Container>

      <Image
        src="/element.png"
        alt="logo"
        width={300}
        height={200}
        className="absolute top-0 right-0"
      />
    </div>
  );
};

export default Success;
