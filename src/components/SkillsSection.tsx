import React from "react";

const SkillsSection=()=>{
    const skills=[
        {
            id:1,
            icon:"https://e7.pngegg.com/pngimages/123/816/png-clipart-computer-icons-java-%E5%92%96%E5%95%A1%E6%B5%B7%E6%8A%A5%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90-miscellaneous-text.png"
        },
        {
            id:2,
            icon:"https://w7.pngwing.com/pngs/290/579/png-transparent-html-html-logo-html-5-html-five-logo-html-5-logo-programming-langugae-3d-icon-thumbnail.png"
        },
        {
            id:3,
            icon:"https://e7.pngegg.com/pngimages/255/1006/png-clipart-react-javascript-webbylab-computer-icons-angularjs-github-text-logo.png"
        },
        {
            id:4,
            icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXDLqIQoEeMb2QzO_CGQkr85wOX75Zgcjeg&s"
        }, 
    ];

    
    return(
        <section>
            <div className="w-full flex flex-wrap justify-center p-2 gap-0 lg:gap-24">
                {skills.map(({id,icon})=>(
                    <figure className="border-2 border-primary backdrop-blur-sm bg-white/30 w-20 h-20 flex justify-center items-center rounded-full ml-2 mt-2">
                        <img src={icon} alt="skill" className="w-10 h-12 absolute z-10"/>
                    </figure>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection;