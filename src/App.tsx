import React, { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { FaRegCopy } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiAstro } from "react-icons/si";
import { CiMenuBurger } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { SiBookmeter } from "react-icons/si";
import GridCompoentes from "./Componentes/GridCompoentes";
import Animaciiones from "./assets/Animaciiones"; 




const TopicsCenter = [
  "Documentacion",
  "blog",
  "Resources",
  "Cominity",
  "Enteprise",
];

const TopickEnterprise = [
  "Gogle",
  "Microsoft",
  "The guardian",
  "NorVPN",
  "PROSCHEL",
  "NBC NEW",
];

const FIlterDetalle = [
  {
    id: 1,
    imagen: <FaBook />,
    title: "Server-First",
    desc: "Astro improves website performance by rendering components on the server, sending lightweight HTML to the browser with zero unnecessary JavaScript overhead.",
    coloBoreal : "bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"   ,
    seconcolordentro :"bg-gradient-to-r from-[#18264C] to-[#1B3D45]"  
  },
  {
    id: 1,
    imagen: <BsJournalBookmarkFill />,
    title: "Content-Driven",
    desc: "Astro was designed to work with your content, no matter where it lives. Load data from your file system, external API, or your favorite CMS.",
    coloBoreal : "bg-radial from-pink-400 from-40% to-fuchsia-700"  ,
    seconcolordentro :"bg-gradient-to-r from-[#371723] to-[#39183A]"  
  },
  {
    id: 1,
    imagen: <SiBookmeter />,
    title: "Customizable",
    desc: "Extend Astro with your favorite tools. Bring your own JavaScript UI components, CSS libraries, themes, integrations, and more.",
    coloBoreal:"bg-radial from-yellow-600 from-40%  via-gold-200 to-gray-200" ,
    seconcolordentro :"bg-gradient-to-r from-[#312C1A] to-[#31221C]"  
  },
];

function App() {
  const [count, setCount] = useState(0);  
  const divRef =  useRef<HTMLDivElement> (  null)  ;
  const HanldeCopy  =  async(  )   =>{ 
       
    //  console.log(divRef.current?.textContent)
     try {
         await navigator.clipboard.writeText(divRef.current?.textContent)
         alert("Copaido en protapaleses")
     } catch (error) {
      console.log("erro del copiar")
      
     }

  }


  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center bg-gradient-to-r from-[#0d0b32] via-[#3D1585] to-[#110623]">
        <div className="absolute top-0 fixed w-full h-[80px] flex items-center justify-around  text-gray-300  bg-[#fafafa10] ">
          <div className="flex items-center  justify-center ">
            <SiAstro className="text-4xl cursor-pointer"></SiAstro>
            <h1 className="text-2xl mx-2 font-bold">Astro</h1>
          </div>
          <div className="md:flex w-[50%] hidden   text-shadow-md justify-around">
            {TopicsCenter.map((item) => (
              <h1 className="hover:border-b">{item}</h1>
            ))}
          </div>
          <div>
            <FaGithub className="text-4xl  hidden  md:block  cursor-pointer"></FaGithub>
          </div>
          <div className="md:hidden ml-10">
            <CiMenuBurger className="text-white  text-2xl  cursor-pointer"></CiMenuBurger>
          </div>
        </div>
        {/* Capa de blur como fondo */}
        <div className="relative w-[100%] h-[80%] flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#120d51] to-[#6518AC] blur-3xl z-0"></div>
          <div className="relative z-20   text-2xl text-white w-[100%]  xl:w-[55%] p-2  text-center px-6">
            <div className="flex mx-auto  w-[90%] lg:w-[40%] rounded-full bg-gray-950/50">
              <div className=" p-3 bg-amber-50 rounded-full bg-gradient-to-bl from-[#2e26a7] to-[#7c28cb]  ">
                <p className="text-[13px] "> Astro 5.7 </p>
              </div>
              <div className="p-2 text-center flex justify-end items-center  text-gray-400">
                <p className="text-[15px] text-center">Avaiable now!</p>
                <FaAngleRight></FaAngleRight>
              </div>
            </div>
            <br></br>
            <h1 className="text-5xl md:text-6xl lg:text-7xl ">
              The web Framework for content driven website
            </h1>
            <br></br>

            <p className=" text-gray-300 font-light text-center  text-[20px]  w-[60%] mx-auto">
              Astro powers the world's fastest marketing sites, blogs,
              e-commerce websites, and more.
            </p>
            <br></br>
            <button className="bg-white p-2 w-[90%]    outline-0 text-indigo-900/30  cursor-pointer rounded-full md:w-[40%] mb-5">
              Get Started
            </button>
            {/* <br></br> */}
            <div  onClick={HanldeCopy}  ref={divRef} className="bg-gray-950/50 p-3 cursor-pointer mx-auto text-gray-500 font-mono  w-[90%]  text-[17px] rounded-2xl  md:w-[40%] flex items-center justify-between">
              <FaHandPointRight></FaHandPointRight>
              npm create astro@latest
              <FaRegCopy></FaRegCopy>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full    h-50 bg-gradient-to-b from-transparent  to-[#0a0a24] z-10">
        <h1 className="text-gray-300 text-center text-2xl">
          Used by some of the largest companies around the world:
        </h1>
        <div className="mx-auto flex justify-center text-white mt-23">
          {TopickEnterprise.map((item) => (
            <h1 className="text-3xl mx-4 font-semibold  shadow-2xl">
              {item.toUpperCase()}
            </h1>
          ))}
        </div>
      </div>



<div>

<Animaciiones>


      <div className="h-screen relative border-no bg-[#0a0a24]  flex items-center justify-center">  

        
        <div className=" w-[70%] z-10">
          <span className="text-fuchsia-400/90 text-2xl font-bold">
            {" "}
            What is Astro?{" "}
          </span>
          <br></br>
          <p className="text-2xl text-white">
            <br></br>

            <p className="text-5xl mx-4 br">
              Astro is a JavaScript web framework<br></br> optimized for
              building fast, content-driven <br>
              </br> websites.
            </p>
            <br></br>
          </p>
          <br></br>
           
           <div  className="flex gap-10 justify-between mx-4">

          {
              FIlterDetalle.map((item) =>(
                <div  className="text-white">
              
              <div   className={`
                w-[60px] h-[60px]  flex items-center justify-center rounded-full ${item.coloBoreal}
                `} >

              <div className={`
                ${item.seconcolordentro} w-[50px] h-[50px] flex items-center  justify-center bg-rose-400  border-gray-100 rounded-full text-2xl"
                `}>

                   {item.imagen}
              
                </div>
                
              </div>
                <br></br>
                   <h1>{item.title}</h1>
                   <h1 className="text-gray-400">{item.desc}</h1>
                  </div>
              ))
          }
           </div>

        </div>
        <div className="size-[800px] rounded-full border-gray-200 border absolute right-0 bg-gradient-to-b from-[#0F2431]  to-[#0a0a24]  blur-3xl ">


          
        </div>
        
      </div>
</Animaciiones>
</div>

         
     <GridCompoentes></GridCompoentes>
   

  
    </>
  );
}

export default App;
