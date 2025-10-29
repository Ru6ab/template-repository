// import React from 'react'
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaBehance } from "react-icons/fa";
// export default function Navbar() {
//   return (
//     <div className='scroll-smooth'>
//      <div className="flex justify-center  ">
//     <div className='w-[1110px] bg-neutral-800 h-[70px] rounded-b-xl pl-[85px] pr-[85px] flex justify-between pt-[24px] text-neutral-400'>
//       <a href='#hero'> <h1>Home</h1></a>
//    <a href='#caseStudy'> <h1 >Case Studies</h1></a>
//    <a href='#testimonial'> <h1>Testimonials</h1></a>
//    <a href='#recentWork'>  <h1>Recent Work</h1></a>
//    <a href='#form'>  <h1>Get In Touch</h1></a>
//     <div className='flex justify-between gap-4 top-[28px]'>
//         <FaLinkedinIn className='h-[17px] w-[18px] text-neutral-400' />
//         <FaBehance className='h-[17px] w-[18px] text-neutral-400' />
//         <FaTwitter className='h-[17px] w-[18px] text-neutral-400' />

//     </div>
//     </div>
//     </div>
//     </div>
//   )
// }


import React, { useState } from "react";
import { FaLinkedinIn, FaTwitter, FaBehance } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="scroll-smooth relative">
      <div className="flex justify-center">
        <div className="w-full md:w-[1110px] bg-neutral-800 rounded-bl-xl md:rounded-b-xl text-neutral-400">
          
      
          <div className="flex items-center justify-between px-6 h-[70px]">
            <a href="#hero">
              <h1 className="">Home</h1>
            </a>

           
            <div className="hidden md:flex flex-1 justify-evenly items-center">
              <a href="#caseStudy">Case Studies</a>
              <a href="#testimonial">Testimonials</a>
              <a href="#recentWork">Recent Work</a>
              <a href="#form">Get In Touch</a>
              <div className="flex gap-4">
                <FaLinkedinIn className="h-[17px] w-[18px]" />
                <FaBehance className="h-[17px] w-[18px]" />
                <FaTwitter className="h-[17px] w-[18px]" />
              </div>
            </div>

            
            <div className="md:hidden">
             

              {menuOpen?(
                < FaTimes onClick={()=>setMenuOpen(!menuOpen)} className="text-neutral-400 text-xl cursor-pointer"/>
              ):(
                <GiHamburgerMenu onClick={()=>setMenuOpen(!menuOpen)} className="text-neutral-400 text-2xl cursor-pointer"/>
              )}
            </div>
          </div>

          
          {menuOpen && (
            <div className="flex flex-col absolute bg-neutral-800 rounded-bl-xl right-0 top-[70px] w-[120px] items-center gap-3 pb-4 md:hidden ">
              <a href="#caseStudy">Case Studies</a>
              <a href="#testimonial">Testimonials</a>
              <a href="#recentWork">Recent Work</a>
              <a href="#form">Get In Touch</a>
              <div className="flex gap-4">
                <FaLinkedinIn className="h-[17px] w-[18px]" />
                <FaBehance className="h-[17px] w-[18px]" />
                <FaTwitter className="h-[17px] w-[18px]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
