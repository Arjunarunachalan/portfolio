"use client"
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

export default function Home() {
  const items = [
    {
      content: <div className="flex flex-col  justify-center items-center md:w-[60%] w-full">
        <h1 className="text-[30px] md:text-[60px] text-white text-start w-full font-semibold">Deal<span className="text-yellow_gradient">N</span>Buy</h1>
        <p className="text-[18px] text-gray-400 w-full text-start pb-3">Ecommerce</p>
        <p className="text-white_grad w-full">Deal n Buy is an online shopping platform that offers a wide variety of products across multiple categories, including electronics,
          home appliances, fashion, and more. The website aims to provide customers with high-quality products at competitive prices, ensuring a seamless shopping experience through user-friendly navigation, secure payment options, and reliable delivery services. Whether you're looking for the latest gadgets or trendy apparel, Deal n Buy is your one-stop destination for all your shopping needs.</p>
        <p className="text-gray-500 w-full text-start py-3 "> React, Scss, Node Js , Mongo DB, SocketIO</p>
        <a href="" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
      </div>
    },

    {
      content: <div className="flex flex-col  justify-center items-center md:w-[50%] w-full">
        <h1 className="text-[30px] md:text-[60px] text-white text-start w-full font-semibold">Capital<span className="text-yellow_gradient">Forex</span></h1>
        <p className="text-[18px] text-gray-400 w-full text-start pb-3">Student Management</p>
        <p className="text-white_grad w-full">Capital Forex is a trusted platform specializing in forex trading education and services. The website provides comprehensive training programs, market insights, and resources to help individuals and businesses succeed in the dynamic forex market. With expert guidance and a focus on empowering traders, Capital Forex is dedicated to fostering financial growth and confidence through strategic trading approaches and cutting-edge tools. Whether you're a beginner or an experienced trader, Capital Forex is your partner in mastering the world of forex.</p>
        <p className="text-gray-500 w-full text-start py-3 "> NextJS ,Tailwind Css ,GSAP,Mongo DB ,Node Js </p>
        <a href="" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
      </div>
    },

    {
      content: <div className="flex flex-col  justify-center items-center md:w-[50%] w-full">
        <h1 className="text-[30px] md:text-[60px] text-white text-start w-full font-semibold">Club<span className="text-yellow_gradient">Orly</span>Rungis</h1>
        <p className="text-[18px] text-gray-400 w-full text-start pb-3">Management</p>
        <p className="text-white_grad w-full">The Club Orly Rungis website is a membership-based organization or community,focused on fostering connections and providing services or benefits to its members. COR cater to individuals or businesses associated with the Orly and Rungis regions in France, potentially serving as a networking hub, a business directory, or a resource platform.</p>
        <p className="text-gray-500 w-full text-start py-3 "> NextJS ,Tailwind Css,Framer Motion,Mongo DB ,Node Js </p>
        <a href="" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
      </div>
    },
  ];
  return (
    <div className="min-h-screen bg-background  md:py-[30px] py-[20px]">
      <Navbar />
      {/* hero */}
      <section className=" w-full md:h-[100vh] flex md:flex-row flex-col pt-3 md:px-[100px] px-[15px] relative">
        {/* Left Section */}
        <div className="md:w-[50%] md:h-full h-[260px] w-full flex flex-col justify-center items-center md:order-1 order-2 mb-[100px]  ">
          <div className="w-full h-full flex justify-center items-start text-start flex-col gap-5 md:static absolute md:top-0 top-[180px] md:py-0 py-4">
            <h1 className="text-[34px] md:text-[48px] text-white_grad font-semibold">
              Hi, I'm <span className="text-yellow_gradient">Arjun</span>
            </h1>
            <h1 className="font-extrabold text-[4rem] md:text-[9rem] text-white w-full leading-none">
              Frontend Developer
            </h1>
            <button className="mt-5 font-bold rounded-lg shadow-lg bg-yellow_gradient text-black px-[60px] md:px-[80px] md:py-3 py-2 flex justify-center items-center">
              Resume
            </button>
            <div className=" md:w-[400px] bottom-0  pt-[25px]  md:px-0">
              <p className="text-[18px] text-white_grad">
                Crafting innovative solutions that simplify and elevate the user
                experience
              </p>
              <div className="flex gap-3 items-center mt-3">
                <div><Image src={linkedin} alt="linkedin" width={100} height={100} className="w-[35px] h-[50px]"/></div>
                <div><Image src={github} alt="linkedin" width={100} height={100} className="w-[35px] h-[50px]"/></div>
                <div><Image src={instagram} alt="linkedin" width={100} height={100} className="w-[35px] h-[50px]"/></div>
                <div><Image src={mail} alt="linkedin" width={100} height={100} className="w-[35px] h-[50px]"/></div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-[50%] w-full flex flex-col justify-center items-center overflow-hidden md:order-2 order-1 ">
          {/* Profile Image */}
          <div className=" h-full md:w-[700px] w-[400px] max-w-[900px] overflow-hidden ">
            <Image
              src={profile}
              alt="Profile picture of Arjun"
              layout="responsive"
              width={600}
              height={600}
              className="object-contain w-full h-full"
              priority // Ensures the image is preloaded for better performance
            />
          </div>
          {/* Gradient Section */}

        </div>
      </section>
      {/* techstack */}
      <section
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
        className="w-full px-0 bg-bg_light flex flex-col  gap-4 justify-center items-center h-[500px] md:h-[300px] shadow-xl relative">
           <h1 className="w-full text-[22px] text-white_grad  md:px-[100px] px-3 md:absolute md:top-[40px]">My <span className="text-yellow_gradient z-50">Tech </span>stack</h1>
        {/* <h1 className="text-start w-full md:px-[100px]  md:items-start md:text-[35px] text-[30px] font-bold text-white_grad md:py-0 py-4">My <span className="text-yellow_gradient">Tech</span>stack </h1> */}
        <div className="flex md:gap-[30px] gap-[25px] flex-wrap justify-center items-center">
          <div className="text-white_grad bg-gray-800 rounded-lg px-4 py-2 shadow-md hover:bg-gray-700 transition duration-300">
            <Nextjs  />
          </div>
          <div className="text-white_grad bg-gray-800 rounded-lg px-4 py-2 shadow-md hover:bg-gray-700 transition duration-300">
            <React  />
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
            <Express  />
          </div>
          <div className="text-white_grad bg-gray-800 rounded-lg px-4 py-2 shadow-md hover:bg-gray-700 transition duration-300">
            <Mongodb  />
          </div>
        </div>
      </section>
      {/* experience */}

      <section className="w-full flex flex-col pt-3 md:px-[100px] px-[15px] md:py-[40px] py-[20px] relative overflow-hidden">
        {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[550px]">
          <Waves
            lineColor="#fff"
            backgroundColor="#181818"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
            className="rounded-s-full"
          />
        </div> */}
        {/* <div className="absolute -left-14 -bottom-10 w-[300px] h-[250px] z-0">
          <Waves
            lineColor="#fff"
            backgroundColor="#181818"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
            className="rounded-tr-full"
          />
        </div> */}
        <h1 className="text-[22px] text-white_grad  md:px-0 px-3">Work <span className="text-yellow_gradient z-50">Experience </span></h1>
        <h1 className="w-full md:w-[860px] md:text-[60px] text-[23px] font-bold text-white_grad py-4 md:px-0 px-3 z-50">Companies <span className="text-yellow_gradient">I</span> have<span className="text-yellow_gradient md:px-5 px-2">worked</span>  for <span className="text-yellow_gradient">in</span> the <span className="text-yellow_gradient">past</span>.</h1>
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-[30px] md:gap-0">
          <div className="flex flex-col gap-4 text-[#8491a0] w-[300px] md:w-[400px]">
            <h1 className="font-semibold text-[100px] md:text-[120]">01</h1>
            <h3 className="text-start text-white_grad md:text-[35px] text-[25px] font-semibold z-50 "><span className="text-[#3cc74e]">Intutive Software Corp</span>, Interaction Designer</h3>
            <h5 className="text-start text-white_grad">I currently am the lead designer on the interaction design team for Google Play.</h5>
          </div>
          <div className="flex flex-col gap-4 text-[#8491a0] w-[300px] md:w-[400px] z-50">
            <h1 className="font-semibold text-[100px] md:text-[120]">02</h1>
            <h3 className="text-start text-white_grad md:text-[35px] text-[25px]  font-semibold z-50"><span className="text-[#609bff]">Vass Systems LLP</span>, Interaction Designer</h3>
            <h5 className="text-start text-white_grad">I currently am the lead designer on the interaction design team for Google Play.</h5>
          </div>
          <div className="flex flex-col gap-4 text-[#8491a0] w-[300px] md:w-[400px] z-50">
            <h1 className="font-semibold text-[100px] md:text-[120]">03</h1>
            <h3 className="text-start text-white_grad md:text-[35px] text-[25px]  font-semibold z-50"><span className="text-[#e95d90]">Softroniics</span>, Interaction Designer</h3>
            <h5 className="text-start text-white_grad z-50">I currently am the lead designer on the interaction design team for Google Play.</h5>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col pt-3 md:px-[100px] px-[15px] md:py-[40px] py-[20px]">
        <h1 className="text-[22px] text-yellow_gradient font-semibold py-[30px] px-[15px]">Portfolio</h1>
        <h1 className="w-full md:w-[860px] md:text-[60px] text-[35px] font-bold text-white_grad py-4 md:px-0 px-[15px]">Results <span className="text-yellow_gradient">That</span>  Matter</h1>
        <div className="w-full flex flex-col md:flex-row md:justify-between justify-start md:items-center items-start gap-2">
          <p className="text-[18px] font-semibold text-white_grad md:w-[60%] w-full px-[15px] md:px-0">Here’s a glimpse of the work I’ve done for clients and projects that I’m proud of. Each piece tells a story of creativity, strategy, and execution coming together to achieve success.</p>
          <button className="bg-yellow_gradient flex text-black p-3 font-semibold rounded-md shadow-lg md:mx-0 mx-[15px] my-3 md:px-[15px] px-[30px]">More On Github</button>
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
              <a href="" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
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
              <a href="" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
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
              <a href="" className="text-yellow_gradient font-semibold text-[22px]">Live Preview</a>
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

    </div>
  );
}
