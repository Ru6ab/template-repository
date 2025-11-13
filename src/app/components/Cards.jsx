import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Image from "next/image";
export const CaseCard = ({
  title,
  hText,
  pText,
  reverse,
  buttonText,
  bttnBgColor,
  imgSrc,
  bgTitleColor,
  titleTextColor,
  reverseOnLg,
}) => {
  return (
    <div
      className={`flex flex-col  ${
        reverse ? "flex-col-reverse lg:flex-row" : "lg:flex-row"
      } lg:flex-row justify-center items-center gap-8
    ${reverseOnLg ? "flex-col lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div>
        <span
          className={` ${titleTextColor} px-[6px] py-[3px] text-[11px] font-semibold rounded-full ${bgTitleColor} ibm-font tracking-widest`}
        >
          {title}
        </span>
        <h1 className="font-bold text-black text-[26px]  raleway-font my-4">{hText}</h1>
        <p
          className="max-w-[415px] text-neutral-400  text-[14px] mt-2 ibm-font"
          style={{ wordSpacing: "5px" }}
        >
          {pText}
        </p>
        <button
          className={`${bttnBgColor} text-[14px] text-white  py-2 px-10 rounded-[4px] mt-6 tracking-wider font-semibold`}
        >
          {buttonText}
        </button>
      </div>
      <Image
        src={imgSrc}
        loading="lazy"
        className="rounded-[6px] w-[445px] h-[300px]"
      />
    </div>
  );
};

export const RecentWorkCard = ({ hText, pText, buttonText, imgSrc }) => {
  return (
    <div className="flex flex-col">
      <Image
        src={imgSrc}
        alt="work"
        loading="lazy"
        className="h-[300px] w-[445px]"
      />
      <h1 className="font-bold raleway-font text-black text-[24px] my-4 ">{hText}</h1>
      <p
        className="text-neutral-400 ibm-font text-[14px] mt-2 ibm-font"
        style={{ wordSpacing: "5px" }}
      >
        {pText}
      </p>
      <span>
        {" "}
        <button className="bg-lime-700 text-[14px] ibm-font text-white py-2 px-[15px] rounded-[4px] mt-6 font-md tracking-wider">
          {buttonText}
        </button>
      </span>
    </div>
  );
};

export const TestimonialCard = ({ pText, imgSrc, name }) => {
  return (
    <div className="relative flex flex-col gap-4 h-[230px] md:h-[240px] mb-8 lg:h-[220px] w-[445px] bg-transparent rounded-tl-[10px] rounded-bl-[10px]">
      {/* left border line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-600 rounded-tl-[10px] rounded-bl-[10px]" />

      {/* top line gradient */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-neutral-600 to-transparent" />

      <BiSolidQuoteLeft
        className="text-white absolute -top-2 left-4 z-10"
        fontSize={22}
      />

      {/* bottom line gradient */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-neutral-600 to-transparent" />

      <p
        className="max-w-[400px] md:max-w-[500px] text-neutral-400 ibm-font text-[13px] px-8 pt-10 mb-3"
        style={{ wordSpacing: "5px" }}
      >
        {pText}
      </p>

      <div className="flex flex-row items-center gap-3 px-8 mb-8">
        <Image src={imgSrc} alt={name} className="h-[50px] w-[50px] rounded-full" />
        <span className="text-white font-semibold raleway-font lg:text-[18px] ">{name}</span>
      </div>
    </div>
  );
};
