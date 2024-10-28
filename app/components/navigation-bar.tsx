"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="flex justify-between items-center backdrop-blur-[7.5px] bg-black border-b mx-auto sticky top-0 z-50 w-full">
        {/* Mobile Logo on the Left */}
        <div className="lg:hidden flex items-center ml-3">
          <ScrollLink to="home" smooth={true} offset={-50}>
            <div className="flex overflow-hidden gap-2.5 justify-center items-center">
              <img
                loading="lazy"
                src="/zoyalogo.png"
                className="object-contain h-12"
                alt="Logo"
              />
            </div>
          </ScrollLink>
        </div>

        {/* Desktop Menu with Centered Links */}
        <div className="hidden lg:flex justify-between items-center w-full">
          {/* Left Logo */}
          <ScrollLink to="home" spy={false} offset={-50}>
            <div className="flex overflow-hidden gap-2 cursor-pointer justify-center items-center">
              <img
                loading="lazy"
                src="/zoyalogo.png"
                className="object-contain h-20"
                alt="Left Logo"
              />
            </div>
          </ScrollLink>

          {/* Navigation Links */}
          <div className="flex gap-5 items-center text-lg tracking-tight text-white">
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              hashSpy={true}
              activeClass="active"
            >
              <div className="cursor-pointer px-4 py-2 rounded-[60px] hover:bg-[#F4BE00] active:bg-[#D01760]">
                Services
              </div>
            </ScrollLink>
            <ScrollLink
              to="work"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              hashSpy={true}
              activeClass="active"
            >
              <div className="cursor-pointer px-4 py-2 rounded-[60px] hover:bg-[#F4BE00] active:bg-[#D01760]">
                Work Experience
              </div>
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              hashSpy={true}
              activeClass="active"
            >
              <div className="cursor-pointer px-4 py-2 rounded-[60px] hover:bg-[#F4BE00] active:bg-[#D01760]">
                Testimonials
              </div>
            </ScrollLink>
            <ScrollLink
              to="hire"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              hashSpy={true}
              activeClass="active"
            >
              <div className="cursor-pointer px-4 py-2 rounded-[60px] hover:bg-[#F4BE00] active:bg-[#D01760]">
                Why Hire Me
              </div>
            </ScrollLink>
          </div>

      {/* Right Logo */}
      <div
  className="flex overflow-hidden bg-[#D01760] gap-2 cursor-pointer justify-center items-center py-6 lg:pr-8 lg:pl-8"
  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=zoyakou2@gmail.com')}
>
  <img
    loading="lazy"
    src="/email-button.png"
    className="object-contain h-12"
    alt="Right Logo"
  />
  <div className="text-xl text-white font-righteous">Get in Touch</div>
</div>


        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleSidebar} className="p-4">
            <img src="/main-menu.png" alt="Hamburger Menu" className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        >
          <div
            className="fixed right-0 top-0 h-full bg-neutral-900 text-white w-64 p-8 z-50"
            onClick={(e) => e.stopPropagation()} // Prevent closing sidebar when clicking inside it
          >
            <button onClick={closeSidebar} className="text-2xl font-bold mb-8">
              ✕
            </button>
            <ul className="space-y-6">
              <li>
                <ScrollLink
                  className="p-2"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={closeSidebar}
                  activeClass="active"
                  hashSpy={true}
                >
                  Services
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  className="p-2"
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={closeSidebar}
                  activeClass="active"
                  hashSpy={true}
                >
                  Work Experience
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  className="p-2"
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={closeSidebar}
                  activeClass="active"
                  hashSpy={true}
                >
                  Testimonials
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  className="p-2"
                  to="hire"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={closeSidebar}
                  activeClass="active"
                  hashSpy={true}
                >
                  Why Hire Me
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
