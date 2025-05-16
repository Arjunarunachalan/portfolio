'use client'; 
import Image from "next/image";
import profile from "../public/assets/images/profile.png";
import Waves from '../app/components/Waves';
import InfiniteScroll from "./components/Infinite_Scroll";
import Nextjs from "../public/assets/icons/nextjs"
import React from "../public/assets/icons/react"
import Tailwind from "../public/assets/icons/tailwind";
import Node from "../public/assets/icons/node";
import Express from "../public/assets/icons/express";
import Mongodb from "../public/assets/icons/mongodb";
import Javascript from "../public/assets/icons/javascript";
import next from "next";
import Navbar from "./components/Navbar";
import linkedin from "../public/assets/icons/linkedin.svg"
import github from "../public/assets/icons/git.svg"
import instagram from "../public/assets/icons/Instagram.svg"
import mail from "../public/assets/icons/mail.svg"
import Footer from "./components/Footer";
import { useRef, useState } from "react";
import Crosshair from "./components/Crosshair";
import { toast } from 'react-toastify';

export default function Home() {
  const containerRef = useRef(null);
  const [copyToggle,setCopyToggle] = useState(false)
  const items = [
    {
      content: <div className="flex flex-col justify-center items-center md:w-[60%] w-full">
        <h1 className="text-[25px] md:text-[50px] text-white text-start w-full font-semibold">Deal<span className="text-yellow_gradient">N</span>Buy</h1>
        <p className="text-[18px] text-gray-400 w-full text-start pb-3">Ecommerce</p>
        <p className="text-white_grad w-full texx-[12px]">Deal n Buy is an online shopping platform that offers a wide variety of products across multiple categories, including electronics,
          home appliances, fashion, and more. The website aims to provide customers with high-quality products at competitive prices, ensuring a seamless shopping experience through user-friendly navigation, secure payment options, and reliable delivery services. Whether you're looking for the latest gadgets or trendy apparel, Deal n Buy is your one-stop destination for all your shopping needs.</p>
        <p className="text-gray-500 w-full text-start py-3 "> React, Scss, Node Js , Mongo DB, SocketIO</p>
        <a href="https://dealnbuy.in/" target="_blank" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
      </div>
    },

    {
      content: <div className="flex flex-col  justify-center items-center md:w-[50%] w-full">
        <h1 className="text-[30px] md:text-[60px] text-white text-start w-full font-semibold">Capital<span className="text-yellow_gradient">Forex</span></h1>
        <p className="text-[18px] text-gray-400 w-full text-start pb-3">Student Management</p>
        <p className="text-white_grad w-full">Capital Forex is a trusted platform specializing in forex trading education and services. The website provides comprehensive training programs, market insights, and resources to help individuals and businesses succeed in the dynamic forex market. With expert guidance and a focus on empowering traders, Capital Forex is dedicated to fostering financial growth and confidence through strategic trading approaches and cutting-edge tools. Whether you're a beginner or an experienced trader, Capital Forex is your partner in mastering the world of forex.</p>
        <p className="text-gray-500 w-full text-start py-3 "> NextJS ,Tailwind Css ,GSAP,Mongo DB ,Node Js </p>
        <a href="https://www.capitalforex.in/" target="_blank" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
      </div>
    },

    {
      content: <div className="flex flex-col  justify-center items-center md:w-[50%] w-full">
        <h1 className="text-[30px] md:text-[60px] text-white text-start w-full font-semibold">Club<span className="text-yellow_gradient">Orly</span>Rungis</h1>
        <p className="text-[18px] text-gray-400 w-full text-start pb-3">Management</p>
        <p className="text-white_grad w-full">The Club Orly Rungis website is a membership-based organization or community,focused on fostering connections and providing services or benefits to its members. COR cater to individuals or businesses associated with the Orly and Rungis regions in France, potentially serving as a networking hub, a business directory, or a resource platform.</p>
        <p className="text-gray-500 w-full text-start py-3 "> NextJS ,Tailwind Css,Framer Motion,Mongo DB ,Node Js </p>
        <a href="https://cluborlyrungis.com/" target="_blank" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
      </div>
    },
  ];

 const copyEmailToClipboard = (email) => {
  navigator.clipboard.writeText(email)
    .then(() => {
      setCopyToggle(true)
      setTimeout(()=>{
        setCopyToggle(false)
      },5000)
    })
    .catch((err) => {
      console.error('Failed to copy email: ', err);
      setCopyToggle(false)
    });
};

 
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-background  md:py-[30px] ">
        {/* hero */}
        <section className="w-full md:h-[100vh] h-[80vh] flex flex-col md:flex-row items-center md:pt-8 md:px-[100px] relative">
          {/* Left Section */}
          <div className="md:w-[50%] w-full flex flex-col justify-center items-center md:order-1 order-2 md:mb-0 mb-10 md:static absolute top-[280px] z-20 py-[0px] md:py-0">

            <div className="w-full px-5 py-1 md:py-0 md:bg-transparent md:rounded-none ">
              <h1 className="text-[28px] md:text-[48px] text-white_grad font-semibold text-center md:text-left z-20">
                Hi, I'm <span className="text-yellow_gradient">Arjun</span>
              </h1>
              <h1 className="font-extrabold text-[3rem] md:text-[9rem] text-white w-full leading-none text-center md:text-left">
                Frontend Developer
              </h1>
              <button className="mt-5 font-bold rounded-lg shadow-lg bg-yellow_gradient text-black px-[50px] md:px-[80px] md:py-3 py-2 flex md:hidden justify-center items-center mx-auto">
                Resume
              </button>
              {/* About Section */}
              <div className="md:w-[400px] pt-[25px] md:px-0">
                <p className="text-[16px] md:text-[18px] text-white_grad text-center md:text-left">
                  Crafting innovative solutions that simplify and elevate the user experience
                </p>
                {/* Social Icons */}
                <div className="flex justify-center md:justify-start gap-4 items-center mt-4">
                  <Image src={linkedin} alt="linkedin" width={35} height={35} className="w-[30px] h-[30px]" />
                  <Image src={github} alt="github" width={35} height={35} className="w-[30px] h-[30px]" />
                  <Image src={instagram} alt="instagram" width={35} height={35} className="w-[30px] h-[30px]" />
                  <Image src={mail} alt="mail" width={35} height={35} className="w-[30px] h-[30px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Divider (Visible only on mobile) */}
          <div className="md:hidden w-full h-[60px] bg-gradient-to-b from-black/100 to-transparent"></div>

          {/* Right Section */}
          <div className="md:w-[50%]  w-full flex justify-center md:justify-end items-end overflow-hidden md:order-2 order-1 relative">
            <div className="w-[300px] md:w-full max-w-[900px] overflow-hidden flex justify-center md:justify-end items-end">
              <Image
                src={profile}
                alt="Profile picture of Arjun"
                layout="responsive"
                width={600}
                height={600}
                className="object-cover md:object-bottom md:object-right w-full h-auto md:h-full z-10"
                priority
              />
            </div>
          </div>
        </section>


        {/* techstack */}
        <section
          style={{
            paddingLeft: 0,
            paddingRight: 0,
          }}
          className="w-full px-0 bg-bg_light flex flex-col  gap-4 justify-center items-center h-[500px] md:h-[300px] shadow-xl relative">
          <h1 className="w-full text-[22px] text-white_grad  md:px-[100px] px-3 md:absolute md:top-[40px]">My <span className="text-yellow_gradient ">Tech </span>stack</h1>
          {/* <h1 className="text-start w-full md:px-[100px]  md:items-start md:text-[35px] text-[30px] font-bold text-white_grad md:py-0 py-4">My <span className="text-yellow_gradient">Tech</span>stack </h1> */}
          <div className="flex md:gap-[30px] gap-[25px] flex-wrap justify-center items-center">
            <div className="text-white_grad bg-gray-800 rounded-lg px-4 py-2 shadow-md hover:bg-gray-700 transition duration-300">
              <Nextjs />
            </div>
            <div className="text-white_grad bg-gray-800 rounded-lg px-4 py-2 shadow-md hover:bg-gray-700 transition duration-300">
              <React />
            </div>
            <div className="text-white_grad bg-gray-800 rounded-lg px-4 py-2 shadow-md hover:bg-gray-700 transition duration-300">
              <Tailwind />
            </div>
            <div className="text-white_grad bg-gray-800 rounded-lg px-4 py-2 shadow-md hover:bg-gray-700 transition duration-300">
              <Javascript />
            </div>
            <div className="text-white_grad bg-gray-800 rounded-lg px-4 py-2 shadow-md hover:bg-gray-700 transition duration-300">
              <Node />
            </div>
            <div className="text-white_grad bg-gray-800 rounded-lg px-4 py-2 shadow-md hover:bg-gray-700 transition duration-300">
              <Express />
            </div>
            <div className="text-white_grad bg-gray-800 rounded-lg px-4 py-2 shadow-md hover:bg-gray-700 transition duration-300">
              <Mongodb />
            </div>
          </div>
        </section>
        {/* experience */}

        <section className="w-full flex flex-col pt-3 md:px-[100px] px-[15px] md:py-[40px] py-[20px] relative overflow-hidden">

          <h1 className="text-[22px] text-white_grad  md:px-0 px-3">Work <span className="text-yellow_gradient ">Experience </span></h1>
          <h1 className="w-full md:w-[860px] md:text-[60px] text-[23px] font-bold text-white_grad py-4 md:px-0 px-3">Companies <span className="text-yellow_gradient">I</span> have<span className="text-yellow_gradient md:px-5 px-2">worked</span>  for <span className="text-yellow_gradient">in</span> the <span className="text-yellow_gradient">past</span>.</h1>
          <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-[30px] md:gap-0">
            <div className="flex flex-col gap-4 text-[#8491a0] w-[300px] md:w-[400px]">
              <h1 className="font-semibold text-[100px] md:text-[120]">01</h1>
              <h3 className="text-start text-white_grad md:text-[35px] text-[25px] font-semibold "><span className="text-[#3cc74e]">Intutive Software Corp</span>, Frontend Developer</h3>
              <h5 className="text-start text-white_grad">I currently work as a Frontend Developer, focusing on building interactive and user-friendly interfaces.</h5>
            </div>
            <div className="flex flex-col gap-4 text-[#8491a0] w-[300px] md:w-[400px]">
              <h1 className="font-semibold text-[100px] md:text-[120]">02</h1>
              <h3 className="text-start text-white_grad md:text-[35px] text-[25px]  font-semibold"><span className="text-[#609bff]">Vass Systems LLP</span>, Frontend Developer Intern</h3>
              <h5 className="text-start text-white_grad">I previously worked as a Frontend Intern, where I contributed to developing responsive UI components and improving user experience..</h5>
            </div>
            <div className="flex flex-col gap-4 text-[#8491a0] w-[300px] md:w-[400px]">
              <h1 className="font-semibold text-[100px] md:text-[120]">03</h1>
              <h3 className="text-start text-white_grad md:text-[40px] text-[25px]   font-semibold"><span className="text-[#e95d90]">Softroniics</span>, FullStack Developer Trainee</h3>
              <h5 className="text-start text-white_grad z-50">I completed training as a Full Stack Trainee, gaining hands-on experience in both frontend and backend development.</h5>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col pt-3 md:px-[100px] px-[15px] md:py-[40px] py-[20px]" id="portfolio">
          <h1 className="text-[22px] text-yellow_gradient font-semibold py-[30px] px-[15px]">Portfolio</h1>
          <h1 className="w-full md:w-[860px] md:text-[60px] text-[35px] font-bold text-white_grad py-4 md:px-0 px-[15px]">Results <span className="text-yellow_gradient">That</span>  Matter</h1>
          <div className="w-full flex flex-col md:flex-row md:justify-between justify-start md:items-center items-start gap-2">
            <p className="text-[18px] font-semibold text-white_grad md:w-[60%] w-full px-[15px] md:px-0">Here’s a glimpse of the work I’ve done for clients and projects that I’m proud of. Each piece tells a story of creativity, strategy, and execution coming together to achieve success.</p>
            <a href="https://github.com/Arjunarunachalan" target="_blank">
            <button className="bg-yellow_gradient flex text-black p-3 font-semibold rounded-md shadow-lg md:mx-0 mx-[15px] my-3 md:px-[15px] px-[30px]">More On Github</button>
            </a>
          </div>

          {/* projects */}
          <div className="w-full md:hidden flex flex-col pt-[20px] md:py-[40px] py-[20px] ">
            <div className=" flex md:flex-row flex-col md:justify-between justify-center px-[15px] md:px-[30px] py-[30px]">
              <div className="flex flex-col  justify-center items-center md:w-[50%] w-full">
                <h1 className="text-[30px] md:text-[60px] text-white text-start w-full font-semibold">Deal<span className="text-yellow_gradient">N</span>Buy</h1>
                <p className="text-[18px] text-gray-400 w-full text-start pb-3">Ecommerce</p>
                <p className="text-white_grad w-full">Deal n Buy is an online shopping platform that offers a wide variety of products across multiple categories, including electronics,
                  home appliances, fashion, and more. The website aims to provide customers with high-quality products at competitive prices, ensuring a seamless shopping experience through user-friendly navigation, secure payment options, and reliable delivery services. Whether you're looking for the latest gadgets or trendy apparel, Deal n Buy is your one-stop destination for all your shopping needs.</p>
                <p className="text-gray-500 w-full text-start py-3 "> React, Scss, Node Js , Mongo DB, SocketIO</p>
              </div>
              <div className="w-[50%] h-auto flex md:justify-center items-center">
                <a href="https://dealnbuy.in/" target="_blank" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
              </div>
            </div>
            <div className=" flex md:flex-row flex-col md:justify-between justify-center px-[15px] md:px-[30px] md:py-[20px]">
              <div className="flex flex-col  justify-center items-center md:w-[50%] w-full">
                <h1 className="text-[30px] md:text-[60px] text-white text-start w-full font-semibold">Capital<span className="text-yellow_gradient">Forex</span></h1>
                <p className="text-[18px] text-gray-400 w-full text-start pb-3">Student Management</p>
                <p className="text-white_grad w-full">Capital Forex is a trusted platform specializing in forex trading education and services. The website provides comprehensive training programs, market insights, and resources to help individuals and businesses succeed in the dynamic forex market. With expert guidance and a focus on empowering traders, Capital Forex is dedicated to fostering financial growth and confidence through strategic trading approaches and cutting-edge tools. Whether you're a beginner or an experienced trader, Capital Forex is your partner in mastering the world of forex.</p>
                <p className="text-gray-500 w-full text-start py-3 "> NextJS ,Tailwind Css ,GSAP,Mongo DB ,Node Js </p>
              </div>
              <div className="w-[50%] h-auto flex md:justify-center items-center">
                <a href="https://www.capitalforex.in/" target="_blank" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
              </div>
            </div>
            <div className=" flex md:flex-row flex-col md:justify-between justify-center px-[15px] md:px-[30px] md:py-[20px]">
              <div className="flex flex-col  justify-center items-center md:w-[50%] w-full">
                <h1 className="text-[30px] md:text-[60px] text-white text-start w-full font-semibold">Club<span className="text-yellow_gradient">Orly</span>Rungis</h1>
                <p className="text-[18px] text-gray-400 w-full text-start pb-3">Management</p>
                <p className="text-white_grad w-full">The Club Orly Rungis website is a membership-based organization or community,focused on fostering connections and providing services or benefits to its members. COR cater to individuals or businesses associated with the Orly and Rungis regions in France, potentially serving as a networking hub, a business directory, or a resource platform.</p>
                <p className="text-gray-500 w-full text-start py-3 "> NextJS ,Tailwind Css,Framer Motion,Mongo DB ,Node Js </p>
              </div>
              <div className="w-[50%] h-auto flex md:justify-center items-center">
                <a href="https://cluborlyrungis.com/" target="_blank" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
              </div>
            </div>
          </div>

        </section>
        <section>
          <div style={{ positon: 'relative' }} className="hidden md:block">
            <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection='left'
              autoplay={true}
              autoplaySpeed={0.2}
              autoplayDirection="down"
              pauseOnHover={true}
            />
          </div>
        </section>

        <section
      ref={containerRef}
      className="w-full md:h-[400px] h-[550px] shadow-md md:px-[100px] px-[15px] py-[50px] relative"
    >
      {/* Crosshair Overlay */}
      <Crosshair containerRef={containerRef} color="white" />

      <div className="w-full h-full bg-bg_light rounded-xl flex flex-col pt-3 p-[30px] justify-center gap-4 relative">
        <h1 className="text-white md:text-[70px] text-[30px] font-extrabold tracking-tighter">
          Take the Next Step
        </h1>
        <h1 className="text-white_grad md:text-[22px] text-[18px] font-semibold tracking-wide md:w-[60%] w-full">
          Let’s connect and discuss how we can work together to achieve your
          goals. Your next big step starts here.
        </h1>

        {/* Buttons with Hover Effect */}
        <div className="flex flex-row gap-5">
     <a href="mailto:arjunarunachalan@gmail.com" target="_blank" rel="noopener noreferrer">
          <button className="bg-yellow_gradient flex justify-center items-center text-black font-bold rounded-md shadow-lg my-3 md:px-[15px] px-[4px] md:text-[20px] md:py-2 text-[10px] hover:scale-105 transition-transform">
            Shoot Me an Email
          </button>
          </a>
          <a href="tel:7025484102">
          <button className="bg-black flex justify-center items-center text-white p-3 font-semibold rounded-md shadow-lg my-3 md:px-[15px] px-[4px] md:text-[20px] md:py-2 text-[10px] hover:scale-105 transition-transform">
            Dial Me!
          </button>
          </a>
        </div>

        {/* Contact Info Box */}
        <div
          className="md:w-[250px] w-[220px] bg-yellow_gradient text-black md:rounded-b-3xl rounded-b-xl
                   absolute md:right-7 right-3 md:py-[20px] py-[10px] top-1 flex justify-center items-center"
        >
          <div className="flex gap-2 justify-center items-center" onClick={()=>{copyEmailToClipboard(' arjunarunachalan@gmail.com')}}>
            <p className="md:text-[12px] text-[10px]">
              arjunarunachalan@gmail.com
            </p>
            <button className="bg-black text-white rounded-md py-1 px-2 text-[10px]">
             {copyToggle ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
      </div>
      <div id="getintouch">
      <Footer />
      </div>
    </div>

  );
}
