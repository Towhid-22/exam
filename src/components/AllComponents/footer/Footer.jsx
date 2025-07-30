import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const feature = ["Home", "About", "Benefit", "Pricing", "Blog"];
  const products = ["Task Management", "Company growth", "Time tracking"];
  const support = ["Customer service", "Accessibility", "Contact us"];
  return (
    <div className="bg-[#48409C] text-white pt-[140px] pb-15">
      <Container>
        <div className="flex gap-[100px]">
          <div>
            <Image src="/innovate.png" alt="logo" width={135} height={73} />
            <p className="font-nunito leading-[180%] text-[18px] w-[450px] mt-11">
              Install any demo or template with a single click. You can mix and
              match all the demos & templates. Every demo can be turned into one
              or multi-page.
            </p>
          </div>
          <ul>
            <h3 className="font-open-sans font-semibold text-[24px] leading-[140%] mb-12">
              Features
            </h3>
            {feature.map((item, index) => (
              <li className="font-nunito text-xl leading-[120%] mb-7 text-[#fefefe] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <ul>
            <h3 className="font-open-sans font-semibold text-[24px] leading-[140%] mb-12">
              Features
            </h3>
            {products.map((item, index) => (
              <li className="font-nunito text-xl leading-[120%] mb-7 text-[#fefefe] cursor-pointer capitalize">
                {item}
              </li>
            ))}
          </ul>
          <ul>
            <h3 className="font-open-sans font-semibold text-[24px] leading-[140%] mb-12">
              Features
            </h3>
            {support.map((item, index) => (
              <li className="font-nunito text-xl leading-[120%] mb-7 text-[#fefefe] cursor-pointer capitalize">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-nunito text-[18px] text-[#fefefe] leading-[180%] capitalize flex justify-between">
          <p>@20201 Innovate. All rights reserved.</p>
          <div className="flex gap-15">
            <p>Privacy policy</p>
            <p>Terms & condition</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
