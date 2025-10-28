// import React from 'react'
// import mask2 from '../assets2/mask2.png'
// import mask1 from '../assets2/mask1.png'
// export default function RecentWork() {
//   return (
//     <div className='bg-white pt-20 pb-16 px-[180px]'>
//           <div className="flex flex-col gap-3 items-center justify-center pb-16">
//         <h1 className="font-bold text-black text-[30px]">Case Studies</h1>
//         <p
//           className="text-neutral-400 max-w-[582px] tracking-widest "
//           style={{ wordSpacing: "5px" }}
//         >
//           Solving user & business problems since last 15+ years. Lorem ipsum
//           dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//           incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>

//       <div className='flex flex-row justify-center items-center gap-6'>
//         <div className='flex flex-col'>
//             <img src={mask2}/>
//               <h1 className="font-bold text-black text-[24px] my-4">
//               Work name here
//             </h1>
//             <p
//               className="max-w-[x] text-neutral-400 tracking-widest text-[14px] mt-2"
//               style={{ wordSpacing: "5px" }}
//             >
//               {" "}
//              Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
//             </p>
//            <span><button className="bg-lime-700 text-[16px] text-white  py-2 px-[15px] rounded-[4px] mt-6 font-semibold tracking-wider">
//             Know more
//             </button></span> 
//             </div>

//              <div className='flex flex-col'>
//             <img src={mask1}/>
//               <h1 className="font-bold text-black text-[24px] my-4">
//               Work name here
//             </h1>
//             <p
//               className="max-w-[x] text-neutral-400 tracking-widest text-[14px] mt-2"
//               style={{ wordSpacing: "5px" }}
//             >
//               {" "}
//              Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
//             </p>
//            <span><button className="bg-lime-700 text-[16px] text-white  py-2 px-[15px] rounded-[4px] mt-6 font-semibold tracking-wider">
//             Know more
//             </button></span> 
//             </div>





            
//       </div>
//     </div>
//   )
// }


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import mask2 from "../assets2/mask2.png";
import mask1 from "../assets2/mask1.png";

export default function RecentWork() {
  return (
    <div id='recentWork' className="bg-white pt-20 pb-16 px-[180px]">
      {/* Header section */}
      <div className="flex flex-col gap-3 items-center justify-center pb-16">
        <h1 className="font-bold text-black text-[30px]">Recent Work</h1>
        <p
          className="text-neutral-400 max-w-[582px] tracking-widest text-center"
          style={{ wordSpacing: "5px" }}
        >
          Solving user & business problems since last 15+ years. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Swiper Carousel */}
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
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col">
            <img src={mask2} alt="work" />
            <h1 className="font-bold text-black text-[24px] my-4">
              Work name here
            </h1>
            <p
              className="text-neutral-400 tracking-widest text-[14px] mt-2"
              style={{ wordSpacing: "5px" }}
            >
              Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut
              labore et dolore magna.
            </p>
           <span> <button className="bg-lime-700 text-[16px] text-white py-2 px-[15px] rounded-[4px] mt-6 font-semibold tracking-wider">
              Know more
            </button></span>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col">
            <img src={mask1} alt="work" />
            <h1 className="font-bold text-black text-[24px] my-4">
              Work name here
            </h1>
            <p
              className="text-neutral-400 tracking-widest text-[14px] mt-2"
              style={{ wordSpacing: "5px" }}
            >
              Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut
              labore et dolore magna.
            </p>
           <span> <button className="bg-lime-700 text-[16px] text-white py-2 px-[15px] rounded-[4px] mt-6 font-semibold tracking-wider">
              Know more
            </button></span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
