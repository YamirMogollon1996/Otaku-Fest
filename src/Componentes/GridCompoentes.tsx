import React, { useRef } from "react";
import { FaRegCopy } from "react-icons/fa";
import { motion, useInView, useScroll } from "framer-motion";

const OpcionDes = [
  {
    title: "Content Collecion",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nostrum, enim placeat nam tempore ea sunt dolore, suscipit, vitae commodi optio aperiam dignissimos quos voluptates odit quasi? Eum, explicabo culpa.",
  },
  {
    title: "Actions",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nostrum, enim placeat nam tempore ea sunt dolore, suscipit, vitae commodi optio aperiam dignissimos quos voluptates odit quasi? Eum, explicabo culpa.",
  },
  {
    title: "Envirometn Variables",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nostrum, enim placeat nam tempore ea sunt dolore, suscipit, vitae commodi optio aperiam dignissimos quos voluptates odit quasi? Eum, explicabo culpa.",
  },
  {
    title: "Depleyoment Adapter",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nostrum, enim placeat nam tempore ea sunt dolore, suscipit, vitae commodi optio aperiam dignissimos quos voluptates odit quasi? Eum, explicabo culpa.",
  },
  {
    title: "UI Integrations",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nostrum, enim placeat nam tempore ea sunt dolore, suscipit, vitae commodi optio aperiam dignissimos quos voluptates odit quasi? Eum, explicabo culpa.",
  },
  {
    title: "Dev Toolbar",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nostrum, enim placeat nam tempore ea sunt dolore, suscipit, vitae commodi optio aperiam dignissimos quos voluptates odit quasi? Eum, explicabo culpa.",
  },
];

const DescripconConvalor = [
  {
    tile: "Content Colleciotns",
    desc: "Organize your Markdown and MDX with built-in TypeScript type-safety and frontmatte",
    condition: 0,
  },
  {
    tile: "Zero JavaScript , By Default",
    desc: "Astro only ships the JavaScript you need and automatically strips away the rest for a faster",
    condition: 5,
  },
  {
    tile: "View Transitions",
    desc: "Astro supports view transitions with just a few lines of code. View transitions update your page content without the browser’s ",
    condition: 6,
  },
];

const GridCompoentes = () => {
  const { scrollY } = useScroll();
  const referenciadiv = useRef<HTMLDivElement>(null);
  const Vistainview = useInView(referenciadiv, {
    once: true,
    margin: "-100px",
  });


  console.log(scrollY);
  return (
    <motion.div className="  w-[100vw] h-[200vh]    relative bg-gradient-to-b from-[#0a0a23] to-black     bg-[#060913]">
      <div className="size-[900px]  rounded-full
       border-gray-200 border absolute left-0 
       bg-gradient-to-b from-[#0F2431]  to-[#18183c]  blur-3xl ">
       </div>
      <motion.div  
      
      initial={{opacity:0   , y:100}}
      animate={Vistainview ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      ref={referenciadiv}
      
      
      className=" md:w-[90%]  lg:w-[60%] mx-auto  z-30 relative">
        <p className="text-fuchsia-500/70 text-xl  ">Everything you need</p>
        <p className="text-5xl mt-4  text-white"> Fully Featured</p>
        <p className="text-gray-500 text-xl mt-5">
          Astro comes with everything you need to build a modern <br></br>
          website. Need more? Extend Astro with integrations.
        </p>
        <br></br>
        {/* //seccionDrigTemprale */}

        <div className="grid grid-cols-1   md:grid-cols-3    gap-7 mb-7 border-gray-100">
          {DescripconConvalor.map((item) => (
            <div className="border border-gray-800   bg-[#0C0F19] rounded-xl p-4  hover:bg-gray-900 duration-150">
              <div className="min-h-[300px]  place-content-center items-center">
                {item.condition === 0 && (
                  <h1 className="text-[200px]  place-items-center hover:scale-125 duration-200 cursor-pointer border-gray-200  font-bold text-center text-transparent w-[] bg-clip-text bg-gradient-to-b from-[#30343D] to-[#1D1D2A]">
                    <FaRegCopy className="text-9xl bg-gray  text-gray-700"></FaRegCopy>
                  </h1>
                )}
                {item.condition === 5 && (
                  <h1 className="text-[200px]  hover:scale-125 duration-200 cursor-pointer border-gray-200  font-bold text-center text-transparent w-[] bg-clip-text bg-gradient-to-b from-[#30343D] to-[#1D1D2A]">
                    1
                  </h1>
                )}

                <div className="grid grid-cols-6 gap-2 auto-cols-auto place-content-center">
                  {item.condition === 6 &&
                    Array.from({ length: 5 }, (_, i) => (
                      <div
                        className={`bg-gradient-to-b  h-[80px]  rounded-md from-[#30343D] to-[#1D1D2A]
                   ${i === 0 && "col-span-2"}
                      ${i === 1 && "col-span-2"}
                         ${
                           i === 2 &&
                           "col-span-2   bg-gradient-to-br  h-[80px]  rounded-md from-[#060913] to-[#1D1D2A] "
                         }
                    ${i === 3 && "col-span-3"}
                    ${i === 4 && "col-span-3"}
                   
                   `}
                      ></div>
                    ))}
                </div>
              </div>

              <h1 className="text-white  text-xl">{item.tile}</h1>
              <br></br>
              <p className="text-gray-400"> {item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3   gap-7 border-gray-100">
          {OpcionDes.map((item) => (
            <div className="border border-gray-800  bg-[#0C0F19] rounded-xl p-4  hover:bg-gray-900 duration-150">
              <h1 className="text-white  text-2xl">{item.title}</h1>
              <br></br>
              <p className="text-gray-400"> {item.descripcion}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GridCompoentes;
