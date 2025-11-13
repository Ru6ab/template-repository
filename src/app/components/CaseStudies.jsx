import React from "react";
import { CaseCard } from "./Cards";
import {CASES} from "../constants"
export default function CaseStudies() {
  
  return (
    <div id="caseStudy" className="flex flex-col bg-white py-20 ">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="font-bold text-black text-[37px] raleway-font">Case Studies</h1>
        <p
          className="text-neutral-400 max-w-[570px]  text-[14px] leading-relaxed  px-6 ibm-font "
          style={{ wordSpacing: "5px" }}
        >
          Solving user & business problems since last 15+ years. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex flex-col gap-24  pt-12  px-4   lg:px-[180px]">
        {CASES.map((c, i) => (
          <CaseCard key={i} {...c} />
        ))}
      </div>
    </div>
  );
}
