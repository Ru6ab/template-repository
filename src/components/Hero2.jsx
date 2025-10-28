import React from "react";
import HeroImg from "../assets2/HeroImg.png";
export default function Hero2() {
  return (
    <div id='hero' className="flex justify-between items-center px-[180px] mt-[95px] ">
      <div className="w-[538px] h-[247px] gap-20 ">
        <h1 className="font-bold text-white text-[44px] ">Your Name Here</h1>
        <p className="my-4 text-[14px] font-md text-neutral-400 max-w-[460px]  word-spacing-[8px] tracking-widest leading-loose">
         Intro text: Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. 
        </p>
        <button className="bg-lime-700 w-[307px] h-[63px] py-[21px]  rounded  [box-shadow:0_2px_8px_#65A30D20,2px_0_8px_#65A30D20,0_-2px_8px_#65A30D20,-2px_0_8px_#65A30D20]  ">
          <h1 className="text-white font-bold tracking-wider">Let's get started </h1>
        </button>
      </div>
      <div>
        <img src={HeroImg} className="h-[350px] w-[350px]  " />
      </div>
    </div>
  );
}
