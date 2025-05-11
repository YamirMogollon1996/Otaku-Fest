import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { motion } from "framer-motion";
const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];
const AnimacionesCompnetne = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <>
      <div className=" w-[50%] mx-auto    flex justify-around  mt-5 items-center">
        <nav className="flex justify-around  w-full">
          {allIngredients.map((item, index) => (
            <div
              onClick={() => setSelectedTab(item)}
              className="flex  w-full    m-0 p-2 border-b-2 border-gray-100 hover:bg-gray-200 rounded-md hover:border-sky-300"
            >
              <h1>{item.icon}</h1>
              <span>{item.label}</span>
            </div>
            
          ))}
        </nav>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className=" text-center text-9xl  p-2"
          key={selectedTab ? selectedTab.label : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          // style={icon}
        >
          {selectedTab ? selectedTab.icon : "😋"}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AnimacionesCompnetne;
