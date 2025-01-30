"use client"
import React from 'react'
import Waves from '../components/Waves';
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: "400",
});

const Footer = () => {
    return (
        <div className='w-full h-[200px] md:h-[250px] drop-shadow-sm bg-bg_light flex md:justify-between justify-center items-center relative overflow-hidden'>

            {/* Left Section */}
            <div className='text-white_grad md:px-[100px] px-[30px] md:w-[50%] w-full h-full flex md:items-start items-center justify-center flex-col relative'>
            {/* <h1 className='text-3xl'>𝓐<span className={`${greatVibes.className} text-3xl`}>rjun </span>A<span className={`${greatVibes.className} text-3xl`}>runachalan</span></h1> */}

                <h1 className='text-white_grad text-[15px] w-full md:text-start text-center pb-2'>
                    Give me a shoutout on my <span className='text-yellow_gradient font-semibold md:text-[25px] text-[20px]'>socials</span>
                </h1>
                <div className=' flex gap-4 font-normal md:text-[14px] text-[12px] md:pt-[20px] z-50 '>
                    <a href="" className='hover:text-yellow_gradient'>/ linkedin</a>
                    <a href="" className='hover:text-yellow_gradient'>/ Instagram</a>
                    <a href="" className='hover:text-yellow_gradient'>/ Github</a>
                </div>
                <div className="absolute right-0 inset-0 w-full h-full bg-transparent z-0 ms-[120px] hidden md:flex"
                    style={{
                        clipPath: 'ellipse(25% 47% at 50% 105%)' // Creates an ameba-like effect
                    }}>
                    <Waves
                        lineColor="#fff"
                        backgroundColor="bg_light"
                        waveSpeedX={0.02}
                        waveSpeedY={0.01}
                        waveAmpX={40}
                        waveAmpY={20}
                        friction={0.9}
                        tension={0.01}
                        maxCursorMove={120}
                        xGap={16}
                        yGap={30}
                    />
                </div>
            </div>

            {/* Right Section (Wave) */}
            <div className='relative w-[50%] h-full overflow-hidden hidden md:flex'>
                <div className="absolute inset-0 w-full h-full bg-transparent"
                    style={{
                        clipPath: 'ellipse(30% 67% at 50% -10%)' // Creates an ameba-like effect
                    }}>
                    <Waves
                        lineColor="#fff"
                        backgroundColor="bg_light"
                        waveSpeedX={0.02}
                        waveSpeedY={0.01}
                        waveAmpX={40}
                        waveAmpY={20}
                        friction={0.9}
                        tension={0.01}
                        maxCursorMove={120}
                        xGap={16}
                        yGap={30}
                    />
                </div>
            </div>

        </div>
    )
}

export default Footer;
