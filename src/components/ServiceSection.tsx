import React from "react";
import { motion } from "framer-motion";
import { services, animationVariants } from "./data/constants";

interface ServiceProps {
  id: number;
  title: string;
  src: string;
  description: string[];
}

const ServicesSection: React.FC = () => {
  return (
    <div id="services" className="container max-w-screen-xl mx-auto px-4 mt-40">
      <motion.h1
        variants={animationVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
      >
        Mis Servicios
      </motion.h1>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20">
        {services.map(({ id, title, src, description }: ServiceProps) => (
          <motion.div
            key={id}
            variants={animationVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="border-2 border-primary backdrop-blur-sm bg-white/30 p-8 rounded-3xl"
          >
            <div className="flex items-center">
              <img 
                src={src} 
                width={50} 
                height={50} 
                alt={`${title} service icon`} 
                className="w-10 h-10 object-contain block"
              />
              <h3 className="text-xl font-semibold text-white ml-5">{title}</h3>
            </div>
            
            <div className="space-y-2 mt-4">
              <p className="leading-8 text-white">{description.join('')}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;