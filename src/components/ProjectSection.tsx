import React, { useState } from "react";
import { motion } from "framer-motion";
import { animationVariants } from "./data/constants";

interface Project {
    id: number;
    title: string;
    description: string;
    picture: string;
    tools: string[];
}

const ProjectsSection = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "Pagina Web",
            description: "Pagina Web sobre los sistemas de emergencia, que incluye un mapa interactivo",
            picture: '/sistemPic.png',
            tools: ["Python Anaconda", "MapBox GL", "JavaScript"]
        }
    ];

    const [page, setPage] = useState(0);

    const projectIndex = (page + projects.length) % projects.length;

    const paginate = (newDirection: number) => {
        setPage(prevPage => (prevPage + newDirection + projects.length) % projects.length);
    };

    return (
        <div id="projects" className="container max-w-screen-xl mx-auto mt-40 px-4">
            <motion.h1
                variants={animationVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
            >
                Mis Proyectos
            </motion.h1>
            
            <div 
                key={page}
                className="w-full flex-col items-center mt-20 border-2 border-primary bg-white/30 p-8 rounded-3xl"
            >
                <div className="w-full justify-end flex z-[100] relative">
                    <button 
                        className="text-white text-3xl" 
                        onClick={() => paginate(-1)} 
                        aria-label="Previous Slide"
                    >
                        {"<"}
                    </button>
                    <button 
                        className="text-white text-3xl ml-4" 
                        onClick={() => paginate(1)} 
                        aria-label="Next Slide"
                    >
                        {">"}
                    </button>
                </div>

                <img 
                    src={projects[projectIndex].picture} 
                    alt={projects[projectIndex].title}
                    className="max-w-[100%] md:max-w-[65%] h-[200px] md:h-[500px] object-cover rounded-lg mt-4"
                />

                <h2 className="text-white text-3xl mt-4 font-semibold">
                    {projects[projectIndex].title}
                </h2>

                <p className="text-white text-xl mt-4">
                    {projects[projectIndex].description}
                </p>

                <div className="text-primary text-md mt-2 font-bold">
                    <strong className="mr-5">Tools:</strong>
                    {projects[projectIndex].tools.join(", ")}
                </div>

                <div className="flex justify-center mt-10 z-[100] relative">
                    {projects.map((_, index) => (
                        <div 
                            key={index} 
                            className={`w-3 h-3 rounded-full mx-1 ${
                                index === projectIndex ? "bg-primary" : "bg-white/50"
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;