import React from "react";
import Container from "../../common/Container";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-[#160C6D]/70 w-full  z-10 fixed">
      <Container>
        <div className="flex items-center justify-between py-[18px]">
          <Image src="/innovate.png" alt="logo" width={100} height={100} />
          <ul className="flex gap-10">
            <li className="font-open-sans font-semibold text-[18px] cursor-pointer text-white hover:text-[#1bbf00]">
              Home
            </li>
            <li className="font-open-sans font-semibold text-[18px] cursor-pointer text-white hover:text-[#1bbf00]">
              About
            </li>
            <li className="font-open-sans font-semibold text-[18px] cursor-pointer text-white hover:text-[#1bbf00]">
              Service
            </li>
            <li className="font-open-sans font-semibold text-[18px] cursor-pointer text-white hover:text-[#1bbf00]">
              Portfolio
            </li>
            <li className="font-open-sans font-semibold text-[18px] cursor-pointer text-white hover:text-[#1bbf00]">
              Price
            </li>
            <li className="font-open-sans font-semibold text-[18px] cursor-pointer text-white hover:text-[#1bbf00]">
              Blog
            </li>
          </ul>
          <button className="bg-[#1bbf00] px-7 py-[14px] cursor-pointer rounded-full text-white font-open-sans font-semibold text-[18px]">
            Contact Us
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
