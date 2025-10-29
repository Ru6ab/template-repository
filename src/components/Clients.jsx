import React from "react";
import { FaStripe } from "react-icons/fa";
import { GrDropbox } from "react-icons/gr";
import { SiPaychex } from "react-icons/si";
import { TbBrandElastic } from "react-icons/tb";
import { SiClickup } from "react-icons/si";
export default function Clients() {
  return (
    <div className="flex flex-col gap-12   md:px-[180px] mt-12 pb-16">
   <div>
     <div className="mb-8 text-center lg:text-left">
        <h1 className="text-neutral-200 text-[16px] font-md">Worked with</h1>
      </div>

       {/* <div className="flex flex-row  justify-between gap-8 md:w-[920px] "> */}
    <div className="flex flex-col flex-wrap  items-center  lg:flex-row lg:flex-nowrap justify-between gap-8  "> 
   

     
      <div className="flex flex-row gap-[1px] text-neutral-600 font-bold border-neutral-800 rounded-[4px] border-[1px] h-[60px] w-[160px] flex items-center justify-center">
        <SiClickup fontSize={20} />
        <h1 className="text-neutral-600 font-bold text-[18px]">ClickUp</h1>
      </div>
      <div className="flex flex-row gap-[1px] text-neutral-600  border-neutral-800 rounded-[4px] border-[1px] h-[60px] w-[160px] flex items-center justify-center">
        <TbBrandElastic  fontSize={23} />
        <h1 className="font-bold text-[20px] font-bold">elastic</h1>
      </div>
      <div className="  border-neutral-800 rounded-[4px] border-[1px] h-[60px] w-[160px] flex items-center justify-center ">
        <SiPaychex className="text-neutral-600 font-bold text-[80px]" />
      </div>
      <div className="flex flex-row gap-[1px] text-neutral-600 font-bold border-neutral-800 rounded-[4px] border-[1px] h-[60px] w-[160px] flex items-center justify-center">
        <GrDropbox className="" fontSize={20} />
        <h1 className=" text-[21px]">Dropbox</h1>
      </div>
      <div className=" text-neutral-600 font-bold border-neutral-800 rounded-[4px] border-[1px] h-[60px] w-[160px] flex items-center justify-center">
        <FaStripe className="text-neutral-600 font-bold text-[60px]"/>
      </div>
    </div>
  


   </div>
    </div>
  

  );
}
