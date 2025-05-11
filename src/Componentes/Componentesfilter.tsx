import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { generosAnime } from "./IzquierdaCompene";

interface PropsButonModalcenter {
  ahndlemodalFilter: () => void;
}

export  interface PropsGender {
  name: string;
  estado: boolean;
}
const Componentesfilter = ({ ahndlemodalFilter }: PropsButonModalcenter) => {
  const [FilterElijerdata, setFilterEljeirData] = useState<PropsGender[]>([]);
  const handleChangueEstate   =(  item :  PropsGender ) =>{   

          setFilterEljeirData(FilterElijerdata.map((prev)=>(
              prev.name  ===  item.name  
              ?  {...prev ,estado : true}
              :prev
          )))
  }
  useEffect(() => {
    let esperar = generosAnime.reduce((acum: PropsGender[], item: string) => {
      acum.push({ name: item, estado: false });
      return acum;
    }, []);
    setFilterEljeirData(esperar);
  }, []);
  return (
    <>
      <div className="  text-white   top-20 w-[100%] fixed bg-black mx-auto h-auto text-center z-200">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4 }}
          className=" w-[90%] mx-auto   bg-[#181A18]  rounded-md  lg:w-[50%] mx-auto"
        >
          <h1 className="text-start mx-6  mb-5 text-3xl font-bold text-amber-200 mt-5    border-b-gray-200 ">
            Filter{" "}
          </h1>
          <hr className="text-gray-500 w-[90%] mx-auto"></hr> 

          <div className=" flex flex-col   w-[98%] lg:flex-row   mx-auto justify-around items-center">


          <select className="p-3 w-[95%] lg:w-[30%] bg-[#0e0f0ec2]   rounded-md  mt-5  outline-0">
            <option value="" disabled selected>
              Selecciona una opción
            </option>
            <option>OVA</option>
            <option>ONA </option>
            <option>MOVIE</option>
          </select>

          <select className="p-3 w-[95%] lg:w-[30%] bg-[#0e0f0ec2]  rounded-md  mt-5 outline-0">
            <option value="" disabled selected>
              Selecciona una opción
            </option>
            <option>DETAILS</option>
            <option>ONA </option>
            <option>ALL</option>
          </select>

          <select className="p-3 w-[95%] lg:w-[30%] bg-[#0e0f0ec2]  rounded-md  mt-5 outline-0">
            <option value="" disabled selected>
              Selecciona una opción
            </option>
            <option>OVA</option>
            <option defaultValue={"ona"}>ONA </option>
            <option>MOVIE</option>
          </select>
          </div>


          <input
            placeholder="All"
            className="p-3 w-[90%] bg-[#0e0f0ec2]  rounded-md  mt-5 outline-0"
          ></input>

          <div className="grid grid-cols-3 mt-5 gap-2 w-[90%] mx-auto cursor-pointer">
            {FilterElijerdata.length > 0 ? (
              FilterElijerdata.map((item) => (
                <h1
                  onClick={()=>handleChangueEstate(item)}
                  className={`p-3  ${ !item.estado   ? "bg-[#0e0f0ec2]" :  "bg-amber-400/90" } rounded-md hover:bg-[#202120c2] duration-200`}
                >
                  {item.name}
                </h1>
              ))
            ) : (
              <h1>Cargandoo</h1>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Componentesfilter;
