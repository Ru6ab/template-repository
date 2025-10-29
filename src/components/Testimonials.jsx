import React from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function Testimonials() {
  return (
    <div id='testimonial' className="bg-black flex flex-col gap-16 pt-24 pb-20">
      <div className="flex justify-center items-center flex flex-col gap-4   px-4 md:px-[100px]  lg:px-[355px]">
        <h1 className="text-white font-bold text-[30px]">Testimonials</h1>
        <p
          className="text-[14px] font-md text-neutral-400 word-spacing-[8px] tracking-widest leading-loose"
          style={{ wordSpacing: "5px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-16 px-4 md:px-[90px] lg:px-[180px]">
        <div className="flex flex-col gap-8 md:flex-row md:gap-6 ">
          <div className="relative flex flex-col gap-4 h-[230px] md:h-[250px] lg:h-[220px] w-[445px] bg-transparent rounded-tl-[10px] rounded-bl-[10px] ">
            {/* Solid left border (rounded corners visible) */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-600 rounded-tl-[10px] rounded-bl-[10px]"></div>

            {/* Top border fading to right */}
            <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-neutral-600 to-transparent"></div>
            <BiSolidQuoteLeft
              className="text-white absolute -top-2 left-4 z-10 "
              fontSize={22}
            />

            {/* Bottom border fading to right */}
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-neutral-600 to-transparent"></div>

            <p
              className=" max-w-[400px] md:max-w-[460px] text-neutral-400 px-8 pt-10 mb-3"
              style={{ wordSpacing: "5px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-row items-center gap-3 px-8 mb-8 ">
              <img src={client1} alt="client"  />
              <span className="text-white font-semibold text-[15px]">
                Client Name
              </span>
            </div>
          </div>

          <div className="relative flex flex-col gap-4 h-[230px] md:h-[250px] lg:h-[220px] w-[445px] bg-transparent rounded-tl-[10px] rounded-bl-[10px] ">
            {/* Solid left border (rounded corners visible) */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-600 rounded-tl-[10px] rounded-bl-[10px]"></div>

            {/* Top border fading to right */}
            <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-neutral-600 to-transparent"></div>
            <BiSolidQuoteLeft
              className="text-white absolute -top-2 left-4 z-10 "
              fontSize={22}
            />

            {/* Bottom border fading to right */}
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-neutral-600 to-transparent"></div>

            <p
              className=" max-w-[400px] md:max-w-[460px] text-neutral-400 px-8 pt-10 mb-3"
              style={{ wordSpacing: "5px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-row items-center gap-3 px-8 mb-8 ">
              <img src={client2} alt="client" />
              <span className="text-white font-semibold text-[15px]">
                Client Name
              </span>
            </div>
          </div>
        
        </div>

         <div className="flex flex-col gap-8 md:flex-row  md:gap-6 ">
          <div className="relative flex flex-col gap-4 h-[230px] md:h-[250px] lg:h-[220px] w-[445px] bg-transparent rounded-tl-[10px] rounded-bl-[10px] ">
            {/* Solid left border (rounded corners visible) */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-600 rounded-tl-[10px] rounded-bl-[10px]"></div>

            {/* Top border fading to right */}
            <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-neutral-600 to-transparent"></div>
            <BiSolidQuoteLeft
              className="text-white absolute -top-2 left-4 z-10 "
              fontSize={22}
            />

            {/* Bottom border fading to right */}
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-neutral-600 to-transparent"></div>

            <p
              className=" max-w-[400px] md:max-w-[460px] text-neutral-400 px-8 pt-10 mb-3"
              style={{ wordSpacing: "5px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-row items-center gap-3 px-8 mb-8 ">
              <img src={client3} alt="client" />
              <span className="text-white font-semibold text-[15px]">
                Client Name
              </span>
            </div>
          </div>

          <div className="relative flex flex-col gap-4 h-[230px] md:h-[250px] lg:h-[220px] w-[445px] bg-transparent rounded-tl-[10px] rounded-bl-[10px] ">
            {/* Solid left border (rounded corners visible) */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-600 rounded-tl-[10px] rounded-bl-[10px]"></div>

            {/* Top border fading to right */}
            <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-neutral-600 to-transparent"></div>
            <BiSolidQuoteLeft
              className="text-white absolute -top-2 left-4 z-10 "
              fontSize={22}
            />

            {/* Bottom border fading to right */}
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-neutral-600 to-transparent"></div>

            <p
              className=" max-w-[400px] md:max-w-[460px] text-neutral-400 px-8 pt-10 mb-3"
              style={{ wordSpacing: "5px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-row items-center gap-3 px-8 mb-8 ">
              <img src={client4} alt="client" />
              <span className="text-white font-semibold text-[15px]">
                Client Name
              </span>
            </div>
          </div>
        
        </div>

        
      </div>
    </div>
  );
}
