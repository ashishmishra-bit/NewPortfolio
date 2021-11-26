import React from 'react'
import cross from "../icons/cross.svg"


const ProjectModal = ({classname , displayNone , imgUrl ,  techStackImgUrl , desc1 , desc2,desc3 , demoLink , codeLink }) => {
    function displayFlex1(){
        document.querySelector({classname}).style.display = 'flex';
    }
    function displayNone(){
        document.querySelector({classname}).style.display = 'none';
    }
    return (
        <div>
            <div className={classname}>
                <div className="Project-about flex flex-col md:flex-row justify-center">
                    <div className="md:w-1/2 md:pr-10">
                        <div className="flex justify-end md:px-5 mt-5 md:hidden" onClick={displayNone}>
                            <img src={cross} alt="cross" style={{ width: "25px" }} />
                        </div>
                        <div className="h-1/2">
                            <img src={imgUrl} alt="{ProjectBackgroundTwo}" style={{ height: "100%", width: "100%", borderBottomRightRadius: "120px" }} />
                        </div>
                        <div className="h-1/2">
                            <div className="TechStack-SubHeading mt-10">TECH STACK</div>
                            <div className="flex flex-row mt-5 justify-center ">
                                <img src={techStackImgUrl} alt="javaScript" className="mr-3" style={{ width: "50px", height: "50px" }} />
                                <img src={techStackImgUrl} alt="html" className="mr-3 -mt-3" style={{ width: "75px", height: "75px" }} />
                                <img src={techStackImgUrl} alt="css" style={{ width: "90px", height: "50px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-between mt-10 md:mt-0">
                        <div className="md:flex justify-end px-5 mt-5 hidden md:block" onClick={displayNone}>
                            <img src={cross} alt="cross" style={{ width: "25px" }} />
                        </div>
                        <div className="text-white text-base px-5 text-justify" style={{ color: "#B5B4B4" }}>{desc1} </div>
                        <div className="text-white text-base px-5 text-justify" style={{ color: "#B5B4B4" }}> {desc2} </div>
                        <div className="text-white text-base px-5 text-justify" style={{ color: "#B5B4B4" }}>{desc3}</div>
                        <div className="flex flex-row justify-evenly my-10">
                            <a href={demoLink} target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">View Demo</a>
                            <a href={codeLink} target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">Get Code <i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
