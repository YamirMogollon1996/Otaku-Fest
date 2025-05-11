import React from 'react';
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
const iconosSocial =  [FaFacebookMessenger ,FaFacebookSquare,FaTwitch,MdOutlineWhatsapp]
const abecedarioMayusculas = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
const FooteeDes = ["Terms of Use", "Our Policy", "Contact Us", "Feedback"];
const FooterAnime = () => {
  return (
    <>
      <div className="bg-[#181A18] py-6   ">
        <div className="w-[70%] mx-auto text-center">
          <h1 className="   text-start  font-bold text-2xl mt-4 text-amber-400/60 mb-5">
            A-Z LIST
          </h1>
          <p className="text-gray-400 mb-5 text-start">
            Searching Order by Alphabet Normally from A to Z
          </p>
          <div className="flex flex-wrap  gap-3 place-content-center  md:place-content-start">
            {abecedarioMayusculas.map((item, index) => (
              <button
                key={index}
                className="text-gray-500 bg-[#0f100f] p-3 rounded-md w-[50px] text-center cursor-pointer hover:bg-gray-700 transition"
                aria-label={`Select ${item}`}
              >
                {item}
              </button>
            ))}
          </div>

<div className='  flex  justify-center flex-col   md:flex-row items-center   md:justify-between'>

          <div className="flex   md:flex-row justify-start gap-x-4 mt-6 " >
            {FooteeDes.map((item, index) => (
              <h1 key={index} className="text-gray-500 cursor-pointer hover:text-gray-300 transition font-semibold text-lg">
                {item}
              </h1>
            ))}
          </div>
          <div className='flex  md:flex-row  justify-around p-2'>
          {
            iconosSocial.map((Icon) =>  (
              <div className='p-4  rounded-lg  mt-4 mx-2 bg-[#0f100f]'>
                    <Icon className='text-2xl text-gray-500'></Icon>
                </div>
            ))
          }
          </div>
</div>
        </div>
      </div>
    </>
  );
};

export default FooterAnime;
