import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
export default function Navbar2() {
  return (
     <div className="flex justify-center ">
    <div className='w-[1110px] bg-neutral-800 h-[70px] rounded-b-xl pl-[85px] pr-[85px] flex justify-between pt-[24px] text-neutral-400'>
      <a href='#hero'> <h1>Home</h1></a>
   <a href='#caseStudy'> <h1 >Case Studies</h1></a>
   <a href='#testimonial'> <h1>Testimonials</h1></a>
   <a href='#recentWork'>  <h1>Recent Work</h1></a>
   <a href='#form'>  <h1>Get In Touch</h1></a>
    <div className='flex justify-between gap-4 top-[28px]'>
        <FaLinkedinIn className='h-[17px] w-[18px] text-neutral-400' />
        <FaBehance className='h-[17px] w-[18px] text-neutral-400' />
        <FaTwitter className='h-[17px] w-[18px] text-neutral-400' />

    </div>
    </div>
    </div>
  )
}
