import React from "react";
import { PropsDetalleCenter } from "./animeList";
import { FaBookmark } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { motion} from "framer-motion"
interface PropsCenterDetalle {
  Poster: PropsDetalleCenter;
}

const accionesa = ["Action", "Demos", "Historiacl", "Shounen", "Supernatural"];
const SingleAnime = ({ Poster }: PropsCenterDetalle) => {  
  const { pag, detalle } = Poster;  
  return (
    <motion.div      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.4 }}
    
    className="h-full text-white text-2xl bg-[#0C0D0C]/20 backdrop-blur-2xl">
      <div className="rounded-md grid    grid-cols-1    md:grid-cols-[30%_70%]  w-[90%] h-[100%] md:w-[60%]  mx-auto bg-[#181A18]/70">
        <div className="">
          <div
            style={{
              backgroundImage: `url(${detalle?.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[80%]  mx-auto h-[55%] mt-5 rounded-md"
          ></div>
       <div className=" rounded-md w-[80%] mx-auto text-center p-2 bg-[#202320] mt-6">
        <h1>Rating  <span className="text-amber-400" > 8.45</span> </h1>
       </div>

       <div className="w-[80%]  mx-auto">
            <button className="bg-amber-400/60 w-full p-2 rounded-md my-2 flex items-center justify-center ">
              <FaBookmark className="mx-1"></FaBookmark>
              Bookmar
            </button>
       
            <button className="bg-red-500/50 w-full p-2 rounded-md flex items-center justify-center">
              <FaYoutube className="mx-1"></FaYoutube>
              Trailer
            </button>
       </div>
        </div>
        <div >
          <h1 className="text-2xl md:text-4xl mt-35 font-bold text-center md:text-start">{detalle?.name}</h1>

          <br></br>
          <p  className=" hidden  md:block text-sm md:text-[15px] text-gray-400 text-center md:text-start mx-4 md:mx-0 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
            nobis magnam. Fuga nostrum, reiciendis excepturi possimus provident
            distinctio, voluptates id quaerat ipsam numquam, placeat vel culpa
            necessitatibus fugit totam dolores.
          </p>
          <br></br>
          <div className="grid  grid-cols-1   mx-10 md:mx-0 md:grid-cols-2 md:text-start">
            <div>
              <span className=" text-[15px]  md:text-[20px]  text-gray-400">Status</span> :
              <span className="  text-[15px]  md:text-[20px]  mx-4">{detalle?.audio}</span>
            </div>
            <div>
              <span className=     "  text-[15px]  md:text-[20px]   text-gray-400">Season</span> :
              <span className=" text-[15px]  md:text-[20px]   mx-4">{detalle?.minuto}</span>
            </div>
            <div>
              <span className=" text-[15px]  md:text-[20px]  text-gray-400">Episodes</span> :
              <span className=" text-[15px]  md:text-[20px] mx-4">{detalle?.numero}</span>
            </div>
            <div>
              <span className= "  text-[15px]  md:text-[20px] text-gray-400">Studio</span> :
              <span className=" text-[15px]  md:text-[20px] mx-4">{detalle?.pelicula}</span>
            </div>
            <div>
              <span className=" text-[15px]  md:text-[20px] text-gray-400">Type</span> :
              <span className=" text-[15px]  md:text-[20px] mx-4">Completed</span>
            </div>
            <div>
              <span className=" text-[15px]  md:text-[20px] text-gray-400">Duration</span> :
              <span className="text-[15px]  md:text-[20px] mx-4">tv shoow</span>
            </div>
          </div>
          <br></br>
          <div className="flex flex-wrap  gap-1.5  items-center justify-center    mt-2 ">
            {accionesa.map((item) => (
              <div className="p-2 border rounded-md  border-gray-500 mx-2 hover:bg-amber-600 duration-200 ">
                {" "}
                <h1 className="text-amber-400 mx-2  text-[15px]  ">{item}</h1>{" "}
              </div>
            ))}
          </div>

             <div className="flex   flex-col   w-[100%] mx-auto py-4 bg-[#202320]  rounded-md mt-5">
          <h1 className="my-2 mx-4  md:mx-0">Season</h1>
              <div className="flex justify-around md:justify-start">
              <h1 className="p-2  mx-2 rounded-md   hover:bg-amber-400/30   cursor-pointer bg-[#04080435]" >Season1</h1>
              <h1 className="p-2  mx-2 rounded-md hover:bg-amber-400/30  cursor-pointer bg-[#04080435]">Season2</h1>

        <h1 className="p-2  mx-2 rounded-md hover:bg-amber-400/30  cursor-pointer bg-[#04080435]">Season2</h1>
           
                </div>
          </div>
        </div>
         

      </div> 


       

            
    </motion.div>
  );
};

export default SingleAnime;
