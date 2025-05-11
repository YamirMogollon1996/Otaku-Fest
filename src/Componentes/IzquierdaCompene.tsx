import React, { useEffect, useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

import {  motion} from "framer-motion"
interface Propsqueestiosn { 
    handlePrevClick  : ()=> void
}



export const generosAnime = [
  // Por temática general
  "Shounen",
  "Shoujo",
  "Seinen",
  "Josei",
  "Kodomo",

  // Por tipo de historia
  "Acción",
  "Aventura",
  "Comedia",
  "Drama",
  "Romance",
  "Terror",
  "Misterio",
  "Thriller",
  "Psicológico",
  "Fantasía",
  "Ciencia ficción",
  "Slice of Life",
  "Deportivo",
  "Musical",

  // Subgéneros específicos
  "Isekai",
  "Mecha",
  "Cyberpunk",
  "Postapocalíptico",
  "Espacial",
  "Paranormal",
  "Sobrenatural",
  "Magia",
  "Mahou Shoujo",
  "Harem",
  "Reverse Harem",
  "Ecchi",
]; 

const IzquierdaCompene = (   {handlePrevClick}:  Propsqueestiosn) => {
  
  // const [CargarPeliculas, setCargarPeliculas]  =  useState<>()



  return (
    <>
      <motion.div   
       initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.4 }}
      className="  top-0   bg-[#0b0e0baf] left-0 w-[100%] h-full  fixed z-50 ">
        <RiCloseLargeLine  onClick={handlePrevClick} className="absolute top-0 text-white text-2xl font-bold right-auto m-4" ></RiCloseLargeLine>
        <br></br>
        <h1 className="text-2xl text-center    z-50 p-2 w-[50%] mx-auto mt-5 rounded-xl  text-white">
          Gender Animes List
        </h1>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="grid   grid-cols-2 backdrop-blur-sm h-full">
          {generosAnime.map((item) => (
            <h1 className="text-xl mx-4  mt-2 cursor-pointer text-white">
              {item}
            </h1>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default IzquierdaCompene;
