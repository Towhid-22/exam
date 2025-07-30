import React from "react";
import Container from "../../common/Container";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover py-60">
      <Container>
        <h1 className="text-[84px] mx-auto w-[962px] text-center font-open-sans font-bold text-[#FAFAFE]">
          You're Unique. You r Website Should be too
        </h1>
        <p className="font-patrick-hand mx-auto text-3xl w-[715px] font-normal text-center text-[#FAFAFE]">
          A beautiful website passionately crafted for your small business. Our
          Digital Agency development has changed the way brands and businesses
          use technology for growing business.
        </p>
        <div className="flex justify-center mt-10">
          <Link href="#">
            <button className="hover:bg-[#1bbf00] border-2 border-[#1bbf00] px-7 py-[14px] cursor-pointer rounded-full text-white font-open-sans font-semibold text-[18px] mr-7">
              Get Free Quoto
            </button>
          </Link>

          <Link href="#">
            <button className="hover:bg-[#1bbf00] border-2 border-[#1bbf00] px-7 py-[14px] cursor-pointer rounded-full text-white font-open-sans font-semibold text-[18px]">
              Learn More
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
