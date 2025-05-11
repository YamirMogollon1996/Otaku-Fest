import React, { use, useEffect, useRef, useState } from "react";
import shin from "../assets/shigneky.jpg";
import Shingke from "../assets/blulock.jpeg";
import hxh from "../assets/hxh.jpg";
import { blockquote } from "framer-motion/client";
import { IconType } from "react-icons";
import IzquierdaCompene from "../Componentes/IzquierdaCompene";
import { BiSolidMovie } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { PiFlowerDuotone } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import Componentesfilter from "./Componentesfilter";
import ListaMovies from "./ListaMovies";
import FooterAnime from "./FooterAnime";
import SingleAnime from "./SingleAnime";
import { useNavigate } from "react-router-dom";
import LoginDetails from "./LoginDetails";


interface Iconos {
  desct: string;
  icono: React.ReactNode;
}

export interface PropsT {
  numero: string;
  minuto: number;
  pelicula: number;
  audio: number;
  desc: string;
  img?: string;
  name: string;
  iconos?: Iconos[];
}
const TradinData: PropsT[] = [
  {
    name: "Shingeky No kyojim",
    numero: "#2 Trending",
    minuto: 24,
    pelicula: 24,
    audio: 24,
    desc: "lorem Dolor sit amet Consecture adipisic Elit",
    img: Shingke,
    iconos: [
      {
        desct: "TV",
        icono: <FaPlay></FaPlay>,
      },
      {
        desct: "24",
        icono: <BiSolidMovie></BiSolidMovie>,
      },
      {
        desct: "24",
        icono: <IoTimeSharp></IoTimeSharp>,
      },
      {
        desct: "24",
        icono: <AiFillAudio></AiFillAudio>,
      },
    ],
  },
  {
    name: "blueLock",
    numero: "#1 trending",
    minuto: 32,
    pelicula: 32,
    audio: 32,
    desc: "Lorem dolor sit amet consecuture adispict elit the model",
    img: Shingke,
  },
  {
    name: "Hunter x Hunter",
    numero: "#3 trending",
    minuto: 30,
    pelicula: 30,
    audio: 30,
    desc: "Lorem dolor sit amet consecuture adispict elit the model",
    img: Shingke,
  },
];
export interface PropsDetalleCenter {
  pag: number;
  detalle?: PropsT;
}
const AnimeList = () => {
  const [state, setstate] = useState(1);
  const referenciaBuscar = useRef<HTMLDivElement>(null);
  const [modalMenu, setModalMenu] = useState(false);
  const [ModalFiler, setModalFiler] = useState(false);
  const [Windinner, setInnerWidt] = useState(window.innerWidth);
  const [Poster, setRendePoster] = useState({ pag: 0 } as PropsDetalleCenter);

  const navigate = useNavigate();
  const handlePrevClick = () => {
    setModalMenu((prev) => !prev);
  };

  const ahndlemodalFilter = () => {
    setModalFiler((prev) => !prev);
  };

  useEffect(() => {
    const calculateinner = () => {
      setInnerWidt(window.innerWidth);
    };

    window.addEventListener("resize", calculateinner);

    return () => window.removeEventListener("resize", calculateinner);
  }, []);
  return (
    <>
      {/* //SeccionDelfooerAcondicional */}
      <div
      onClick={ ()=> console.log("Jalar wl driver")}
        style={{
          maskImage: "linear-gradient(to bottom, black 80%, black 100%)",
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, ${
            Windinner > 500 ? ".9" : ".5"
          }) 33%, transparent), url(${TradinData[state].img})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        className="w-full h-screen relative"
      >
        <div className="w-full  h-[80px] relative  bg-[#0B0E0B] flex justify-between overflow-auto md:justify-around items-center text-white">
          <div
            onClick={ahndlemodalFilter}
            className="p-4 lg:hidden absolute right-20 rounded-md bg-white"
          >
            <FaSearch className="text-black"></FaSearch>
          </div>

          <div className="flex mx-2 items-center    ">
            <PiFlowerDuotone
              onClick={handlePrevClick}
              className="text-4xl  text-amber-400/90"
            ></PiFlowerDuotone>
            <h1
              onClick={() => setRendePoster({ pag: 0 })}
              className=" mx-4 text-2xl"
            >
              OTAKU
            </h1>
          </div>
          <div
            ref={referenciaBuscar}
            className="hidden w-[40%] md:flex   lg:w-[50%]  "
          >
            <div className=" w-full relative absolute top-50%">
              <input
                placeholder="todo"
                className=" bg-[#181A18] hidden md:block   focus:outline-0 p-3 rounded-md w-full"
              ></input>
              <FaSearch
                onClick={ahndlemodalFilter}
                className="text-white absolute right-[2%] top-[30%] text-2xl"
              ></FaSearch>
            </div>
            <div    onClick={()=>setModalFiler(!ModalFiler)}  className=" bg-[#181A18]     p-4 cursor-pointer  text-center   items-center ml-5 rounded-md">
              <FaFilter  ></FaFilter>
            </div>
          </div>

          <div>
            <button  
            onClick={()=> setRendePoster({
              ...Poster ,
              pag : 2
            })}
              className="  md:flex bg-amber-400/90 p-4 mx-4 border-none rounded-xl  items-center cursor-pointer 
             justify-around text-black   "
            >
              <MdOutlinePersonAddAlt1 className="text-xl"></MdOutlinePersonAddAlt1>
              <p className="hidden">Login</p>
            </button>
          </div>
        </div>

        {Poster.pag === 0 && (
          <>
          <AnimatePresence>


            <div className="absolute  left-10 top-[30%] p-2   md:top-[50%] md:left-[15%]  ">
              <h1 className=" font-bold rela text-2xl text-amber-400/90">
                {" "}
                {TradinData[state].numero}{" "}
              </h1>
              <h1 className="font-bold text-5xl text-white mt-2">
                {TradinData[state].name}
              </h1>
              <div className="flex mt-5">
                {TradinData[state].iconos?.map((item) => (
                  <div className="bg-text-300 flex items-center ">
                    <span className="text-gray-300 mx-2"> {item.icono}</span>
                    <h1 className="text-white">{item.desct}</h1>
                  </div>
                ))}
              </div>
              <hr className="text-gray-800 mt-5"></hr>
              <div className="flex  items-center justify-start  border-gray-50">
                <button className="bg-amber-400/90 p-2 mt-5 rounded-md flex  items-center w-[150px] justify-around">
                  <FaPlay></FaPlay>
                  Watch Now
                </button>
                <div className="flex items-center mx-10  p-2 mt-5 cursor-pointer">
                  <p
                    onClick={() =>
                      setRendePoster({ pag: 1, detalle: TradinData[state] })
                    }
                    className="text-white text-xl"
                  >
                    Details
                  </p>
                  <FaChevronRight className="text-gray-200 mx-4"></FaChevronRight>
                </div>
              </div>
              <p className=" text-gray-400 mt-6  w-[400px] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique facilis fugit ex molestias pariatur ullam
                autemrepudiandae repellat a doloremque soplicabo nisi temporibus
                recusandae nulla aperiam aspernatur!Earumluta debitis quisquam.
              </p>
            </div>
          </AnimatePresence>

            <AnimatePresence>
              {modalMenu && (
                <IzquierdaCompene handlePrevClick={handlePrevClick}>
                  {" "}
                </IzquierdaCompene>
              )}
       
              {ModalFiler && (
                <Componentesfilter
                  ahndlemodalFilter={ahndlemodalFilter}
                >

                </Componentesfilter>
             
             )}
            
            </AnimatePresence>  



          </>
        )}
        {Poster.pag === 1 && <AnimatePresence> <SingleAnime Poster={Poster}></SingleAnime>   </AnimatePresence> }
            {Poster.pag === 2 && <AnimatePresence> <LoginDetails ></LoginDetails>   </AnimatePresence> }
      </div>

      <ListaMovies Windinner={Windinner}></ListaMovies>
      <FooterAnime></FooterAnime>
    </>
  );
};

export default AnimeList;
