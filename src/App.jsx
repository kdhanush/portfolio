import React from "react";
import Lottie from "react-lottie";
import "./App.scss";
import InfiniteLoop from "./components/InfiniteLoop/InfiniteLoop";
import Navbar from "./components/Navbar/Navbar";
import animationData from "./assets/animations/workanimation.json";
import { ReactTyped } from "react-typed";
import reactIcon from "./assets/icons/reactjs.png"
import nextIcon from './assets/icons/nextjs.png'
import gitIcon from './assets/icons/git.png'
import htmlIcon from './assets/icons/html-icon.png'
import javascriptIcon from './assets/icons/javascript.png'
import prismaIcon from './assets/icons/prisma-orm.png'
import mySqlIcon from './assets/icons/mysql.png'
import cssIcon from './assets/icons/css-icon.png'
import nestJsIcon from  './assets/icons/nestjs.png'
import typescriptIcon from  './assets/icons/typescriptIcon.png'
import tailwindIcon from  './assets/icons/tailwindIcon.png'
import sassIcon from  './assets/icons/sassIcon.png'
import helloIcon from './assets/icons/waving.png'


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function App() {
  return (
    <>
      <div className="main_container">
        <Navbar />
        <div className="body-container">
          <div className="home flex flex-col md:flex md:flex-row md:h-[90dvh]  justify-center items-center lg:flex-grow">
            <div>
              <div className=" text-3xl md:text-5xl">
                <span className="inline-block w-[290px]">
                  <ReactTyped
                    strings={[
                      `Hello`,
                      "ನಮಸ್ಕಾರ",
                      "你好",
                      "අයුබෝවන්",
                      "Bonjour",
                      "Привет",
                      "வணக்கம்",
                      "こんにちは",
                    ]}
                    typeSpeed={60}
                    loop
                  />
                </span>
                I'm<span className=" text-amber-500"> Dhanush K </span>
              </div>
              <h2 className=" text-3xl md:text-5xl pt-4">
                Frontend/Backend developer
              </h2>
            </div>
            <div className="image-container">
              <Lottie options={defaultOptions} height={450} width={450} />
            </div>
          </div>
          <div className="about flex-col md:flex md:flex-row justify-center items-center">
            <div className="content w-full flex flex-col items-center text-lg">
              <p>
                I'm highly motivated and enthusiastic web developer
                specialiazing in frontend technologies. Experience in designing,
                developing and maintaining web applications using technologies
                such as JavaScript, React, Next.js.
              </p>
              <h1 className=" text-3xl md:text-6xl mt-5"> My Tech Stack</h1>
              <div className="skills mt-10 md:w-3/4 gap-4  grid md:gap-4 justify-center">
                    <InfiniteLoop speed={50} direction="left">
                      <div className="grid gap-2 grid-cols-4 text-lg font-bold elative overflow-hidden px-1">
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={reactIcon} alt="react-icon" className=" h-14"/>React.Js</div>
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={nextIcon} alt="react-icon" className=" h-14"/>Next.Js</div>
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={javascriptIcon} alt="react-icon" className=" h-14"/>Javascript</div>
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={htmlIcon} alt="react-icon" className=" h-14"/>HTML</div>
                      </div>
                      </InfiniteLoop>
                      <InfiniteLoop speed={50} direction="right">
                      <div className="grid gap-2 grid-cols-4 text-lg font-bold elative overflow-hidden px-1">
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={cssIcon} alt="react-icon" className=" h-14"/>CSS</div>
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={gitIcon} alt="react-icon" className=" h-14"/>Git</div>
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={prismaIcon} alt="react-icon" className=" h-14"/>Prisma</div>
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={mySqlIcon} alt="react-icon" className=" h-14"/>Mysql</div>
                      </div>
                      </InfiniteLoop>
                      <InfiniteLoop speed={50} direction="left">
                      <div className="grid gap-2 grid-cols-4 text-lg font-bold elative overflow-hidden px-1">
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={typescriptIcon} alt="react-icon" className=" h-14"/>TypeScript</div>
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={tailwindIcon} alt="react-icon" className=" h-14"/>Tailwind</div>
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={nestJsIcon} alt="react-icon" className=" h-14"/>NestJS</div>
                      <div className=" flex items-center justify-center bg-amber-400 rounded-lg w-52"><img src={sassIcon} alt="react-icon" className=" h-14"/>Sass</div>
                      </div>
                      </InfiniteLoop>
              </div>
            </div>
          </div>
          <div className="projects flex justify-center items-center">
            {/* <div className="test mt-8 text-3xl">
             Project ----- Section 
            
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
