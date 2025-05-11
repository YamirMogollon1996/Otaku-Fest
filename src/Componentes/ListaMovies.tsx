import React from "react";

import bleach from "../assets/bleach.jpg";
import boku from "../assets/blulock.jpeg";
import dada from "../assets/dadadan.avif";
import jujustu from "../assets/jujsutu.jpg";
import onepunch from "../assets/one puch.jpg";
import naruto from "../assets/pagina2.jpg";
import pokemon from "../assets/pokemon1.jpeg";
import skn from "../assets/skn.jpg";
import sololevigni from "../assets/solleveing.webp";

import { FaPlay } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
interface Contadordeelacnho {
  Windinner: number;
}

const animes = [
  {
    name: "Bleach",
    tv: true,
    sub: true,
    img: bleach,
    duration: "24 min",
    episodes: 366,
  },
  {
    name: "Blue Lock",
    tv: true,
    sub: true,
    img: boku,
    duration: "23 min",
    episodes: 24,
  },
  {
    name: "Dandadan",
    tv: true,
    sub: true,
    img: dada,
    duration: "24 min",
    episodes: 12,
  },
  {
    name: "Jujutsu Kaisen",
    tv: true,
    sub: true,
    img: jujustu,
    duration: "24 min",
    episodes: 47,
  },
  {
    name: "One Punch Man",
    tv: true,
    sub: true,
    img: onepunch,
    duration: "23 min",
    episodes: 24,
  },
  {
    name: "Naruto",
    tv: true,
    sub: true,
    img: naruto,
    duration: "23 min",
    episodes: 220,
  },
  {
    name: "Pokémon",
    tv: true,
    sub: true,
    img: pokemon,
    duration: "22 min",
    episodes: 1000,
  },
  {
    name: "SK∞ (Skate Infinity)",
    tv: true,
    sub: true,
    img: skn,
    duration: "23 min",
    episodes: 12,
  },
  {
    name: "Solo Leveling",
    tv: true,
    sub: true,
    img: sololevigni,
    duration: "25 min",
    episodes: 12,
  },
  {
    name: "SK∞ (Skate Infinity)",
    tv: true,
    sub: true,
    img: skn,
    duration: "23 min",
    episodes: 12,
  },
];

const ListaMovies = ({ Windinner }: Contadordeelacnho) => {
  console.log(Windinner)
  return (
    <>
      <div className="bg-[#0C0D0C]  border-gray-50">
        <div className=" md:w-[90%] xl:w-[90%] 2xl:w-[70%] mx-auto">
          <h1 className="text-4xl text-center md:text-start   text-amber-400/60 font-bold   py-10">
            Most Population
          </h1>
          <hr className="text-gray-500"></hr>
          <br></br>
 
     {
        Windinner > 600  ?
          <div className=" justify-around  grid  gap-3   md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  flex-wrap">
            {animes.slice(0 , animes.length).map((item) => (
              <div>
                <div
                  className="w-[250px] relative h-[400px] rounded-md border-gray-200 opacity-80 hover:opacity-100 cursor-pointer "
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute left-0 top-0 text-white bg-white p-2  rounded-md">
                    <h1 className="text-black font-bold">TV</h1>
                  </div>
                  <div className="absolute right-0 bottom-0 text-white bg-amber-400/90 p-2  rounded-md">
                    <h1 className="text-black font-bold">SUB</h1>
                  </div>
                </div>
                <h1 className="text-gray-100 text-xl font-semibold mx-1 mt-3  ">
                  {item.name}
                </h1>
                <div className="text-gray-400 flex justify-start">
                  <div className="flex items-center my-3">
                    <FaPlay></FaPlay>
                    <span className="mx-4"> {item.duration}</span>
                  </div>

                  <div className="flex items-center  justify-center">
                    <FaClock></FaClock>
                    <span className="mx-4"> {item.episodes}</span>
                  </div>
                </div>
              </div>

              // </>
            ))}
          </div>  :   
           <div className=" justify-around  grid  gap-3   md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  flex-wrap">
            {animes.slice(0,5).map((item) => (
              <div>
                <div
                  className="w-[250px] relative h-[400px] rounded-md border-gray-200 opacity-80 hover:opacity-100 cursor-pointer "
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute left-0 top-0 text-white bg-white p-2  rounded-md">
                    <h1 className="text-black font-bold">TV</h1>
                  </div>
                  <div className="absolute right-0 bottom-0 text-white bg-amber-400/90 p-2  rounded-md">
                    <h1 className="text-black font-bold">SUB</h1>
                  </div>
                </div>
                <h1 className="text-gray-100 text-xl font-semibold mx-1 mt-3  ">
                  {item.name}
                </h1>
                <div className="text-gray-400 flex justify-start">
                  <div className="flex items-center my-3">
                    <FaPlay></FaPlay>
                    <span className="mx-4"> {item.duration}</span>
                  </div>

                  <div className="flex items-center  justify-center">
                    <FaClock></FaClock>
                    <span className="mx-4"> {item.episodes}</span>
                  </div>
                </div>
              </div>

              // </>
            ))}
          </div> 
          //  <div className=" justify-around  grid  gap-3   md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  flex-wrap">
          //   {animes.slice(0.5).map((item) => (
          //     <div>
          //       <div
          //         className="w-[250px] relative h-[400px] rounded-md border-gray-200 opacity-80 hover:opacity-100 cursor-pointer "
          //         style={{
          //           backgroundImage: `url(${item.img})`,
          //           backgroundSize: "cover",
          //           backgroundPosition: "center",
          //         }}
          //       >
          //         <div className="absolute left-0 top-0 text-white bg-white p-2  rounded-md">
          //           <h1 className="text-black font-bold">TV</h1>
          //         </div>
          //         <div className="absolute right-0 bottom-0 text-white bg-amber-400/90 p-2  rounded-md">
          //           <h1 className="text-black font-bold">SUB</h1>
          //         </div>
          //       </div>
          //       <h1 className="text-gray-100 text-xl font-semibold mx-1 mt-3  ">
          //         {item.name}
          //       </h1>
          //       <div className="text-gray-400 flex justify-start">
          //         <div className="flex items-center my-3">
          //           <FaPlay></FaPlay>
          //           <span className="mx-4"> {item.duration}</span>
          //         </div>

          //         <div className="flex items-center  justify-center">
          //           <FaClock></FaClock>
          //           <span className="mx-4"> {item.episodes}</span>
          //         </div>
          //       </div>
          //     </div>

          //     // </>
          //   ))}
          // </div>
          


     }
        </div>

        
        <div className="text-center p-5">
          <button className="bg-amber-300 rounded-md p-2 mx-auto">
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default ListaMovies;
