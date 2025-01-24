"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import logo_arju from "../../public/assets/icons/logoarju.png";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
       <div className='bg-background w-full h-[90px] flex justify-between sticky top-0 px-[100px]'>
        <div className='w-[60px] py-[25px] h-[100px] items-center justify-center'>
            <Image src={logo_arju} alt='logo' width={100} height={100}  className='h-[50px] items-center'/>
        </div>
        <div className='w-[40%] flex justify-between items-center text-white_grad font-semibold'>
            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
        </div>
       </div>
    )
}

export default Navbar
