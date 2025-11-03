import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { WorkCases } from "../constants";

import { RecentWorkCard } from "./Cards";
export default function RecentWork() {
 
  return (
    <div
      id="recentWork"
      className="bg-white pt-20 pb-16  md:px-[90px] lg:px-[180px] px-6"
    >
      <div className="flex flex-col gap-1 items-center justify-center pb-16">
        <h1 className="font-bold text-black text-[30px] raleway-font">Recent Work</h1>
        <p
          className="text-neutral-400 max-w-[530px] ibm-font text-center px-2 text-[14px] leading-relaxed "
          style={{ wordSpacing: "5px" }}
        >
          Solving user & business problems since last 15+ years. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        className="max-w-[1000px]"
      >
        <div className="px-[180px]">
          {WorkCases.map((c, i) => {
            return (
              <SwiperSlide>
                <div className="flex flex-row justify-center items-center   w-full   ">
                  <RecentWorkCard key={i} {...c} />
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
}
