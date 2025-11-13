import React from "react";
import {TestimonialCases} from '../constants/'

import { TestimonialCard } from "./Cards";

export default function Testimonials() {
 

  const rows = [];
  for (let i = 0; i < TestimonialCases.length; i += 2) {
    rows.push(TestimonialCases.slice(i, i + 2));
  }
  return (
    <div
      id="testimonial"
      className="bg-black flex flex-col gap-16 pb-12 pt-16  "
    >
      <div className="flex justify-center items-center flex flex-col gap-4   px-4 md:px-[100px]  lg:px-[355px]">
        <h1 className="text-white font-bold text-[30px]">Testimonials</h1>
        <p
          className="text-[14px] font-md text-neutral-400  ibm-font leading-loose"
          style={{ wordSpacing: "5px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
 
      <div className=" text-neutral-600 flex gap-8">
        <div >
          {rows.map((pair, rowIndex) => (
            <div
              key={rowIndex}
              className=" flex flex-col gap-8 md:px-[130px] px-4  lg:flex-row  lg:px-[180px]   "
            >
              {pair.map((t, i) => (
                <div key={i}>
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
