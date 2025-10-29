

import React from "react";
import HeroImg from "../assets/HeroImg.png";

export default function MainSection() {
  return (
    <div
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6  lg:px-[180px] mt-20 md:mt-[95px] gap-8"
    >
      {/* Left: Text */}
      <div className="w-full md:w-[538px] h-auto flex flex-col gap-6 text-center md:text-left">
        <h1 className="font-bold text-white text-3xl text-[25px] md:text-[30px] lg:text-[44px]">
          Your Name Here
        </h1>
        <p className="text-[12px] md:text-[13px] lg:text-[14px] font-medium text-neutral-400 max-w-full md:max-w-[460px] tracking-widest leading-loose mx-auto md:mx-0">
          Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-lime-700  w-full md:w-[307px] h-[63px] py-[21px] rounded
          [box-shadow:0_2px_8px_#65A30D20,2px_0_8px_#65A30D20,0_-2px_8px_#65A30D20,-2px_0_8px_#65A30D20]
          mx-auto md:mx-0 transition hover:bg-lime-600"
        >
          <h1 className="text-white font-bold tracking-wider">Let's get started</h1>
        </button>
      </div>

      {/* Right: Image */}
      <div className=" flex justify-center md:justify-end px-12">
        <img
          src={HeroImg}
          className="w-[250px] sm:w-[300px] md:w-[350px] h-auto object-cover"
        />
      </div>
    </div>
  );
}
