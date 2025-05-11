import React, { Children, JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
interface ChiildrenReact {
  children: React.ReactNode
}
const Animaciiones = ({ children }: ChiildrenReact) => {
  const referenca = useRef<HTMLInputElement>(null);
  const invitsa = useInView(referenca, { once: true });
  return (
    <motion.div
      ref={referenca}
      initial={{ opacity: 0, y: 60 }} // empieza más abajo
      animate={invitsa ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Animaciiones;
