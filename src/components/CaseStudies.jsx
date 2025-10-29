import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
export const  CaseStudies=()=> {
  return (
    <div id='caseStudy' className="flex flex-col bg-white pt-20 pb-20">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="font-bold text-black text-[30px]">Case Studies</h1>
        <p
          className="text-neutral-400 max-w-[582px] tracking-widest px-6 "
          style={{ wordSpacing: "5px" }}
        >
          Solving user & business problems since last 15+ years. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex flex-col gap-24  pt-16  px-4   lg:px-[180px]">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center   gap-8    ">
          <div className=" ">
            <span className=" text-[#FFA217] px-[6px] py-[3px] text-[12px] font-bold rounded-full bg-[#FFF6E9] tracking-widest">
              Edtech
            </span>
            <h1 className="font-bold text-black text-[26px] my-4">
              Work name here
            </h1>
            <p
              className="max-w-[415px] text-neutral-400 tracking-widest text-[14px] mt-2"
              style={{ wordSpacing: "5px" }}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className="bg-[#FFA217] text-[16px] text-white  py-2 px-10 rounded-[4px] mt-6 font-semibold">
              View case study
            </button>
          </div>
          <img src={image2} className="rounded-[6px] w-[445px] h-[300px]" />
        </div>


        <div className="flex  flex-col lg:flex-row justify-center items-center gap-8  ">
        
          <img src={image1} className="rounded-[6px] h-[300px] w-[445px]" />
          <div className="  ">
            <span className=" text-[#000AFF] px-[6px] py-[3px] text-[12px] font-bold rounded-full bg-[#D0E6FF] tracking-widest">
              FinTech
            </span>
            <h1 className="font-bold text-black text-[26px] my-4">
              Work name here
            </h1>
            <p
              className="max-w-[415px] text-neutral-400 tracking-widest text-[14px] mt-2  "
              style={{ wordSpacing: "5px" }}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor
              sit amet, consectetur adipiscing elit
            </p>
            <button className="bg-[#000AFF] text-[16px] text-white  py-2 px-10 rounded-[4px] mt-6 font-semibold">
              View case study
            </button>
          </div>
          
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 ">
          <div className="">
            <span className=" text-[#2AB090] px-[6px] py-[3px] text-[12px] font-bold rounded-full bg-[#E0FFF8] tracking-widest">
              Pharma
            </span>
            <h1 className="font-bold text-black text-[26px] my-4">
              Work name here
            </h1>
            <p
              className="max-w-[415px] text-neutral-400 tracking-widest text-[14px] mt-2"
              style={{ wordSpacing: "5px" }}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor
              sit amet, consectetur adipiscing elit
            </p>
            <button className="bg-[#2AB090] text-[16px] text-white  py-2 px-10 rounded-[4px] mt-6 font-semibold">
              View case study
            </button>
          </div>
          <img src={image3} className="rounded-[6px] h-[300px] w-[445px]" />
        </div>

      </div>
    </div>
  );
}
