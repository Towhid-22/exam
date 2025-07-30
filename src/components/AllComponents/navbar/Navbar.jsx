import React from "react";
import Container from "../../common/Container";
import Image from "next/image";

const Navbar = () => {
  const nav_items = ["Home", "About", "Service", "Portfolio", "Price", "Blog"];
  return (
    <div className="bg-[#160C6D]/70 w-full  z-10 fixed">
      <Container>
        <div className="flex items-center justify-between py-[18px]">
          <Image src="/innovate.png" alt="logo" width={100} height={100} />
          <ul className="flex gap-10">
            {nav_items.map((item, index) => (
              
            <li className="font-open-sans font-semibold text-[18px] cursor-pointer text-white hover:text-[#1bbf00]">
              {item}
            </li>
            ))}
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
