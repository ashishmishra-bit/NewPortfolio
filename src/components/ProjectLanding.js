import React from 'react'
import '../css/Projects.css'
import ProjectBackgroundTwo from '../images/ProjectBackgroundTwo.png'
import Project1 from '../images/discord.png'
import Project2 from '../images/project2.png'
import Project3 from '../images/project3.png'
import javaScript from "../icons/javaScript.svg"
import Nodejs from "../icons/nodejs.png"
import Express from "../icons/expressjs.png"
import html from "../icons/html.svg"
import css from "../icons/css.svg"
import Wordpress from "../icons/wordpress.png"
import Php from "../icons/php.png"
import Kotlin from "../icons/kotlin.png"
import Firebase from "../icons/firebase.png"
import Java from "../icons/java.gif"
import { Link } from 'react-router-dom'
import resumeDetails from '../JsonData/resumeDetails'
import Animation from "../components/Animation"


export default function ProjectLanding() {
    return (
        <div className="px-2 md:px-24 py-16">

            <div className="Landing-Heading text-center mb-10">PROJECTS</div>

            <div className="flex flex-col md:flex-row ">
                <div className="md:w-1/2 flex flex-col items-center md:items-end -mt-5">
                    {resumeDetails.projectHome.map((project) => {
                        return (
                            <>
                                <Link to = '/projects' className="projectCard flex flex-row items-end mt-5" style={{backgroundImage: `linear-gradient(357.78deg, rgba(0, 0, 0, 0.92) 17.76%, rgba(0, 0, 0, 0) 48.07%),url(${project.imgUrl})`}} >

                                    <div className="w-1/2 text-white">{project.title} </div>
                                    <div className="w-1/2 flex flex-row justify-end mb-4">
                                        <img src={project.techStack1} alt="javaScript" className="mr-3" />
                                        <img src={project.techStack2} alt="html" className="mr-3" />
                                        <img src={project.techStack3} alt="css" className="mr-3" />
                                        {(project.techStack4) || (project.techStack5) ? (
                                            <>
                                                <img src={project.techStack4} alt="html" className="mr-3" />
                                                <img src={project.techStack5} alt="css" />
                                            </>
                                        ) : null}
                                    </div>
                                </Link>
                            </>
                        )
                    })}

                </div>
                <div className="mt-4 md:mt-0 md:w-1/2">
                    {resumeDetails.longProjectCardHome.map((project) => {
                        return (
                            <>
                                <Link to='/projects'  className="projectCard-long flex flex-row items-end ml-4" style={{backgroundImage: `linear-gradient(357.78deg, rgba(0, 0, 0, 0.92) 17.76%, rgba(0, 0, 0, 0) 48.07%),url(${project.imgUrl})`}}>
                                    <div className="w-1/2 lg text-white">{project.title}</div>
                                    <div className="w-1/2 flex flex-row justify-end mb-4">
                                        <img src={project.techStack1} alt="javaScript" className="mr-3"  />
                                        <img src={project.techStack2} alt="html" className="mr-3" style={{width:"40px"}} />
                                        <img src={project.techStack3} alt="css"  />
                                    </div>
                                </Link>
                            </>
                        )
                    })}

                </div>
            </div>

            <Link to="/projects" >
                <Animation />
            </Link>
        </div>
    )
}
