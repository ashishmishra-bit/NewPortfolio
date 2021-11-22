import React from 'react'
import '../css/Projects.css'
import ProjectBackgroundTwo from '../images/ProjectBackgroundTwo.png'
import ProjectHeader from '../images/ProjectHeader.png'
import javaScript from "../icons/javaScript.svg"
// import cross from "../icons/cross.svg"
import html from "../icons/html.svg"
import css from "../icons/css.svg"
// import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function Projects() {
    return (
        <div>
            <Sidebar />
            <div className="home-section pb-20">
                {/* HEADING SECTION */}
                <div className="projects-header flex flex-row">
                    <div className="projects-Heading-text w-1/2 flex ml-20 items-center">MY<br/>WORKS</div>
                    <div className="projects-Heading-image w-1/2 mt-20 flex justify-center items-center">
                        <img src={ProjectHeader} alt="ProjectHeader" />
                    </div>
                </div>

                {/* BODY SECTION */}
                <div className="flex flex-row">
                    <div className="w-1/2 flex flex-col items-end">
                        <div className="projectCard flex flex-row items-end">
                            <div className="w-1/2 lg text-white">GFG-KIIT </div>
                            <div className="w-1/2 flex flex-row justify-end mb-4">
                                <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={html} alt="html" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={css} alt="css" style={{width:"20px",height:"20px"}} />
                            </div>
                        </div>
                        <div className="projectCard flex flex-row items-end mt-4">
                            <div className="w-1/2 lg text-white">GFG-KIIT </div>
                            <div className="w-1/2 flex flex-row justify-end mb-4">
                                <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={html} alt="html" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={css} alt="css" style={{width:"20px",height:"20px"}} />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="projectCard flex flex-row items-end ml-4" style={{height:"550px",backgroundImage:`url(${ProjectBackgroundTwo})`}}>
                        <div className="w-1/2 lg text-white">GFG-KIIT </div>
                            <div className="w-1/2 flex flex-row justify-end mb-4">
                                <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={html} alt="html" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={css} alt="css" style={{width:"20px",height:"20px"}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row-reverse py-4">
                    <div className="w-1/2 flex flex-col">
                        <div className="projectCard flex flex-row items-end ml-4">
                            <div className="w-1/2 lg text-white">GFG-KIIT </div>
                            <div className="w-1/2 flex flex-row justify-end mb-4">
                                <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={html} alt="html" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={css} alt="css" style={{width:"20px",height:"20px"}} />
                            </div>
                        </div>
                        <div className="projectCard flex flex-row items-end mt-4 ml-4">
                            <div className="w-1/2 lg text-white">GFG-KIIT </div>
                            <div className="w-1/2 flex flex-row justify-end mb-4">
                                <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={html} alt="html" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={css} alt="css" style={{width:"20px",height:"20px"}} />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <div className="projectCard flex flex-row items-end" style={{height:"550px",backgroundImage:`url(${ProjectBackgroundTwo})`}}>
                        <div className="w-1/2 lg text-white">GFG-KIIT </div>
                            <div className="w-1/2 flex flex-row justify-end mb-4">
                                <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={html} alt="html" className="mr-3" style={{width:"20px",height:"20px"}} />
                                <img src={css} alt="css" style={{width:"20px",height:"20px"}} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* BODY SECTION ENDS */}
                {/* MODEL SECTION --- POPUP */}
                {/* <div className="Project-about flex flex-row justify-center">
                    <div className="w-1/2 pr-10">
                        <div className="h-1/2">
                            <img src={ProjectBackgroundTwo} alt="{ProjectBackgroundTwo}" style={{height:"100%",width:"100%",borderBottomRightRadius:"120px"}} />
                        </div>
                        <div className="h-1/2">
                            <div className="TechStack-SubHeading mt-10">TECH STACK</div>
                            <div className="flex flex-row mt-5 justify-center ">
                                <img src={javaScript} alt="javaScript" style={{width:"40px",height:"40px"}} />
                                <img src={html} alt="html" className="ml-5" style={{width:"40px",height:"40px"}} />
                                <img src={css} alt="css" className="ml-5" style={{width:"40px",height:"40px"}} />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-between">
                        <div className="flex justify-end px-5 mt-5">
                            <img src={cross} alt="cross" style={{width:"25px"}} />
                        </div>
                        <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. </div>
                        <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. </div>
                        <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. </div>
                        <div className="flex flex-row justify-evenly my-10">
                            <a href="https://github.com" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">View Demo</a>
                            <a href="https://github.com" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">Get Code <i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}
