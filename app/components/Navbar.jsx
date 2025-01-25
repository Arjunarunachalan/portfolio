"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo_arju from "../../public/assets/icons/logoarju.png";
import menu from "../../public/assets/icons/menu.svg";
import close from "../../public/assets/icons/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const openModal = () => {
    setToggle(true);
    console.log("Menu opened:", true);
    alert("Menu opened!");
  };

  const closeModal = () => {
    setToggle(false);
    console.log("Menu closed:", false);
  };

  return (
    <>
      <div className="hidden md:flex bg-background w-full h-[90px] justify-between sticky top-0 px-[100px]">
        <div className="w-[60px] py-[25px] h-[100px] items-center justify-center">
          <Image
            src={logo_arju}
            alt="logo"
            width={100}
            height={100}
            className="h-[50px] items-center"
          />
        </div>
        <div className="w-[40%] flex justify-between items-center text-white_grad font-semibold">
          <div >Home</div>
          <div>About</div>
          <div>Services</div>
          <div>Contact</div>
        </div>
      </div>

      <div className="max-w-[100vw] flex md:hidden z-50">
        <div className="absolute top-3 right-3">
          {toggle ? (
            <div role="button" tabIndex={0}>
              <Image
                src={close}
                alt="menu icon"
                width={100}
                height={100}
                className="w-[40px] h-[40px] cursor-pointer"
                onClick={closeModal} 
              />
            </div>
          ) : (
            <div  role="button" tabIndex={0}>
              <Image
                src={menu}
                alt="menu icon"
                width={100}
                height={100}
                className="w-[40px] h-[40px] cursor-pointer"
                onClick={openModal}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
