import React from "react";
import Container from "../../common/Container";
import Image from "next/image";

const ChooseUs = () => {
  return (
    <div className="bg-[#FDFDFD] py-[90px] flex items-center justify-center relative">
      <Container>
        <div className="flex  gap-[180px]">
          <div>
            <div className="flex items-start gap-9 w-[568px] shadow-xl bg-white rounded-[12px] px-4 py-[20px] mb-8 transition-all duration-600">
              <Image
                src="/group.png"
                alt="logo"
                width={40}
                height={25}
                className="mt-1"
              />
              <p className="font-patrick-hand text-[18px]">
                We solve real-world problems <br /> through people and the web.
              </p>
            </div>
            <div className="flex items-start gap-9 px-4 rounded-[12px] mb-3 transition-all duration-600">
              <Image
                src="/group.png"
                alt="logo"
                width={40}
                height={25}
                className="mt-1"
              />
              <p className="font-patrick-hand text-[18px]">
                We make processes and technology <br /> work efficiently
                together.
              </p>
            </div>
            <div className="flex items-start gap-9 px-4 rounded-[12px] mb-3 transition-all duration-600">
              <Image
                src="/group.png"
                alt="logo"
                width={40}
                height={25}
                className="mt-1"
              />
              <p className="font-patrick-hand text-[18px]">
                We advance improve existing <br /> technology through research
                and <br /> development.
              </p>
            </div>
            <div className="flex items-start gap-9 px-4 rounded-[12px] mb-3 transition-all duration-600">
              <Image
                src="/group.png"
                alt="logo"
                width={40}
                height={25}
                className="mt-1"
              />
              <p className="font-patrick-hand text-[18px]">
                We develop long-lasting and <br /> scalable solutions,
                relationships <br /> partnerships.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-open-sans font-bold text-5xl">Why Choose Us</h2>

            <p className="w-[393px] font-patrick-hand text-[18px] leading-[30px] mb-10 mt-2">
              We are now a team of strategists, engineers, designers, and
              marketers who both use and develop technology for a variety of
              client needs.
            </p>
            <button className="bg-[#1bbf00] px-7 py-[14px] cursor-pointer rounded-full text-white font-open-sans font-semibold text-[18px]">
              Contact Us
            </button>
          </div>
        </div>
      </Container>
      <Image
        src="/element2.png"
        alt="logo"
        width={384}
        height={340}
        className="absolute top-0 left-0"
      />
    </div>
  );
};

export default ChooseUs;
