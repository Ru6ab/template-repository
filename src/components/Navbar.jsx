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
          <div className="flex items-center justify-between px-6 h-[70px] ibm-font">
            <a href="#hero">
              <h1>Home</h1>
            </a>

            {/* Desktop menu */}
            <div className="hidden md:flex flex-1 justify-evenly items-center lg:text-[13px] ibm-font">
              <a href="#caseStudy">Case Studies</a>
              <a href="#testimonial">Testimonials</a>
              <a href="#recentWork">Recent Work</a>
              <a href="#form">Get In Touch</a>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/rubab-mahmood-b3a230300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-neutral-400 "
                >
                  <FaLinkedinIn className="h-[17px] w-[18px]" />
                </a>

                <a
                  href="https://www.behance.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Behance"
                  className="text-neutral-400 "
                >
                  <FaBehance className="h-[17px] w-[18px]" />
                </a>

                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-neutral-400 "
                >
                  <FaTwitter className="h-[17px] w-[18px]" />
                </a>
              </div>
            </div>

            {/* Hamburger / close button */}
            <div className="md:hidden">
              {menuOpen ? (
                <FaTimes
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-neutral-400 text-xl cursor-pointer"
                />
              ) : (
                <GiHamburgerMenu
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-neutral-400 text-2xl cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`absolute  bg-neutral-800 rounded-bl-xl right-0 top-[70px] w-[120px] flex flex-col items-center gap-3 pb-4 transition-all duration-300 md:hidden ${
              menuOpen
                ? "opacity-100 pointer-events-auto z-50"
                : "opacity-0 pointer-events-none z-0"
            }`}
          >
            <a href="#caseStudy" >Case Studies</a>
            <a href="#testimonial">Testimonials</a>
            <a href="#recentWork">Recent Work</a>
            <a href="#form">Get In Touch</a>

            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/rubab-mahmood-b3a230300/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-400 "
              >
                <FaLinkedinIn className="h-[17px] w-[18px]" />
              </a>

              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="text-neutral-400  "
              >
                <FaBehance className="h-[17px] w-[18px]" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-neutral-400 "
              >
                <FaTwitter className="h-[17px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
