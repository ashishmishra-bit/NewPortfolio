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
import Wordpress from "../icons/Wordpress.png"
import Php from "../icons/php.png"
import Kotlin from "../icons/kotlin.png"
import Firebase from "../icons/firebase.png"
import Java from "../icons/java.gif"
import { Link } from 'react-router-dom'


export default function ProjectLanding() {
    return (
        <div className="px-24 py-16">

            <div className="Landing-Heading text-center mb-10">PROJECTS</div>
            
            <div className="flex flex-row">
                <div className="w-1/2 flex flex-col items-end">
                    <div className="projectCard flex flex-row items-end" style={{backgroundImage:`url(${Project1})`}}>
                    
                        <div className="w-1/2 lg text-white">Geek Music Bot </div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"30px",height:"30px"}} />
                            <img src={Nodejs} alt="html" className="mr-3 -mt-2" style={{width:"50px",height:"50px"}} />
                            <img src={Express} alt="css" style={{width:"60px",height:"30px"}} />
                        </div>
                    </div>
                    <div className="projectCard flex flex-row items-end mt-4" style={{backgroundImage:`url(${Project2})`}}>
                        <div className="w-1/2 lg text-white">Be Fresh Groceries </div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"30px",height:"30px"}} />
                            <img src={Wordpress} alt="html" className="mr-3" style={{width:"30px",height:"30px"}} />
                            <img className="mr-3" src={css} alt="css" style={{width:"30px",height:"30px"}} />
                            <img className="mr-3" src={html} alt="css" style={{width:"30px",height:"30px"}} />
                            <img className="-mt-2" src={Php} alt="css" style={{width:"50px",height:"50px" , color:"white"}} />
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="projectCard flex flex-row items-end ml-4" style={{width:"472px",height:"550px",backgroundImage:`url(${Project3})`}}>
                    <div className="w-1/2 lg text-white">Simhan's e-VedaShree</div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={Java} alt="javaScript" className="mr-3" style={{width:"40px",height:"40px"}} />
                            <img src={Firebase} alt="html" className="mr-3" style={{width:"40px",height:"40px"}} />
                            <img src={Kotlin} alt="css" style={{width:"40px",height:"40px"}} />
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
