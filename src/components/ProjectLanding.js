import React from 'react'
import '../css/Projects.css'
import ProjectBackgroundTwo from '../images/ProjectBackgroundTwo.png'
import javaScript from "../icons/javaScript.png"
import html from "../icons/html.svg"
import css from "../icons/css.svg"
import { Link } from 'react-router-dom'


export default function ProjectLanding() {
    return (
        <div className="px-24 py-16">

            <div className="Landing-Heading text-center mb-10">PROJECTS</div>
            
            <div className="flex flex-row">
                <div className="w-1/2 flex flex-col items-end">
                    <div className="projectCard flex flex-row items-end">
                        <div className="w-1/2 lg text-white">GFG-KIIT </div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"20px"}} />
                            <img src={html} alt="html" className="mr-3" style={{width:"20px"}} />
                            <img src={css} alt="css" style={{width:"20px"}} />
                        </div>
                    </div>
                    <div className="projectCard flex flex-row items-end mt-4">
                        <div className="w-1/2 lg text-white">GFG-KIIT </div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"20px"}} />
                            <img src={html} alt="html" className="mr-3" style={{width:"20px"}} />
                            <img src={css} alt="css" style={{width:"20px"}} />
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="projectCard flex flex-row items-end ml-4" style={{width:"480px",height:"550px",backgroundImage:`url(${ProjectBackgroundTwo})`}}>
                    <div className="w-1/2 lg text-white">GFG-KIIT </div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"20px"}} />
                            <img src={html} alt="html" className="mr-3" style={{width:"20px"}} />
                            <img src={css} alt="css" style={{width:"20px"}} />
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/projects" >
                <div className="text-9xl text-white text-center font-semibold">&#x0355;  &#x0355;  &#x0355;  &#x0355; </div>
            </Link>
        </div>
    )
}
