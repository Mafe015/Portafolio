import React from "react";

const education=[
    {
        id:1,
        duration:"Proceso",
        school:" Universidad EIA",
        post:"Ingeniera en Sistema"
    },
    {
        id:2,
        duration:"01/2021 - 11/2022",
        school:"Pascual Bravo",
        post:"Media Tecnica-Diseño Grafico"
    }
];

const EducationSection=()=>{
    return(
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20">
            {education.map(({id,duration,school,post})=>(
                <div className="border-2 border-primary backdrop-blur-sm text-white bg-white/30 p-8 rounded-3x1" key={id}>
                    <div className="flex items-center">
                        <span className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
                        👩🏽‍💻
                        </span>
                        <h3 className="text-xl font-semibold text-white ml-4">{post}</h3>
                    </div>
                    <div className="text-base mt-5">
                        <p>{duration}</p>
                        <p>{school}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EducationSection;