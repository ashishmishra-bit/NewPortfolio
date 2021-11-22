import React , { useEffect , useRef } from 'react'
import '../css/Projects.css'
import ProjectBackgroundTwo from '../images/ProjectBackgroundTwo.png'
import ProjectHeader from '../images/ProjectHeader.png'
import javaScript from "../icons/javaScript.svg"
import html from "../icons/html.svg"
import css from "../icons/css.svg"
// import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import lottie from 'lottie-web';
// import  Project from '../LottieAssets/project.json';

export default function Projects() {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../LottieAssets/project.json')
        })
    } , [])

    return (
        <div>
            <Sidebar />
            <div className="home-section pb-20">
                {/* HEADING SECTION */}
                <div className="projects-header flex flex-row">
                
                    <div className="projects-Heading-text w-1/2 flex ml-20 items-center">MY<br/>WORKS</div>
                    
                    <div className="projects-Heading-image w-1/2 mt-20 flex justify-center items-center">
                    <div id = "container" ref={container}></div>
                        {/* <img src={ProjectHeader} alt="Projects Header" /> */}
                        
                    </div>
                </div>
                

                {/* BODY SECTION */}
                <div className="flex flex-row pt-28">
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
            </div>
            <Footer />
        </div>
    )
}

