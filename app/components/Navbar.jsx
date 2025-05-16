"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo_arju from "../../public/assets/icons/logoarju.png";
import menu from "../../public/assets/icons/menu.svg";
import close from "../../public/assets/icons/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(()=>{
    if(toggle){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }

    return()=>{
      document.body.style.overflow = 'auto';
    }
  },[toggle])

  // utils/downloadResume.js (optional file to keep logic separate)
 const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Arjun.pdf'; // The file must be in the "public" folder
  link.setAttribute('download', 'Arjun.pdf'); // Set download attribute
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleResume = () => {
  setToggle(false);
  downloadResume();
  
};

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex bg-background w-full h-[70px] justify-between sticky top-0 items-center z-10 px-[100px]">
        {/* Logo */}
        <div className="w-[60px] h-[60px] flex items-center justify-center">
          <Image
            src={logo_arju}
            alt="logo"
            width={100}
            height={100}
            className="h-[50px] object-contain"
          />
        </div>

        {/* Nav Links */}
        <div className="w-[50%] flex justify-between items-center text-white text-lg font-semibold">
          <a href="#">
          <div className="cursor-pointer hover:text-yellow_gradient transition-colors" >Home</div>
          </a>
          <a href="#portfolio">
          <div className="cursor-pointer hover:text-yellow_gradient transition-colors">Portfolio</div>
          </a>
          <div className="font-normal h-full p-0 m-0">|</div>
          <a href="#getintouch">
          <div className="cursor-pointer hover:text-yellow_gradient transition-colors">Get In Touch</div>
          </a>
          <div className="cursor-pointer hover:text-yellow_gradient transition-colors border-2 border-yellow_gradient p-1 rounded-lg px-2" onClick={downloadResume}>Download Resume</div>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden absolute top-4 right-3 z-50">
        <div
          className="cursor-pointer p-2 rounded shadow"
          onClick={() => setToggle(!toggle)}
        >
          <Image
            src={toggle ? close : menu}
            width={40}
            height={40}
            alt="menu"
            className="w-[40px] h-[40px] cursor-pointer"
          />
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: toggle ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="md:hidden fixed top-0 right-0 h-full w-[100%] bg-background text-white shadow-lg flex flex-col items-center justify-center space-y-6 z-40"
      >
       <div className="w-full h-full flex justify-center items-center flex-col gap-4"> 
  <a href="#" onClick={() => setToggle(false)} className="cursor-pointer hover:text-yellow_gradient transition-colors">
    Home
  </a>
  <a href="#portfolio" onClick={() => setToggle(false)} className="cursor-pointer hover:text-yellow_gradient transition-colors">
    Portfolio
  </a>
  <a href="#getintouch" onClick={() => setToggle(false)} className="cursor-pointer hover:text-yellow_gradient transition-colors">
    Get In Touch
  </a>
  <div onClick={() => handleResume()} className="cursor-pointer hover:text-yellow_gradient transition-colors border-2 border-yellow_gradient px-6 rounded-md">
    Resume
  </div>
</div>

      </motion.div>
    </>
  );
};

export default Navbar;
