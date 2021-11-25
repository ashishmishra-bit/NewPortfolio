import React , { useEffect , useRef } from 'react'
import '../css/Projects.css'
import ProjectBackgroundTwo from '../images/ProjectBackgroundTwo.png'
import ProjectHeader from '../images/ProjectHeader.png'
import javaScript from "../icons/javaScript.svg"
import cross from "../icons/cross.svg"
import html from "../icons/html.svg"
import css from "../icons/css.svg"
// import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import lottie from 'lottie-web';
// import  Project from '../LottieAssets/project.json';


import Project1 from '../images/discord.png'
import Project2 from '../images/project2.png'
import Project3 from '../images/project3.png'
import project3 from '../images/project3.jpg';
// import javaScript from "../icons/javaScript.svg"
import Nodejs from "../icons/nodejs.png"
import Express from "../icons/expressjs.png"
// import html from "../icons/html.svg"
// import css from "../icons/css.svg"
import Wordpress from "../icons/Wordpress.png"
import Php from "../icons/php.png"
import Kotlin from "../icons/kotlin.png"
import Firebase from "../icons/firebase.png"
import Java from "../icons/java.gif"

export default function Projects() {

    //Vanilla JavaScript for Pop-up
    function displayFlex1(){
        document.querySelector('.bg-modal1').style.display = 'flex';
    }
    function displayFlex2(){
        document.querySelector('.bg-modal2').style.display = 'flex';
    }
    function displayFlex3(){
        document.querySelector('.bg-modal3').style.display = 'flex';
    }
    function displayFlex4(){
        document.querySelector('.bg-modal4').style.display = 'flex';
    }
    function displayNone1(){
        document.querySelector('.bg-modal1').style.display = 'none';
    }
    function displayNone2(){
        document.querySelector('.bg-modal2').style.display = 'none';
    }
    function displayNone3(){
        document.querySelector('.bg-modal3').style.display = 'none';
    }
    function displayNone4(){
        document.querySelector('.bg-modal4').style.display = 'none';
    }

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
                        <div className="projectCard flex flex-row items-end" onClick={displayFlex1} style={{backgroundImage:`url(${Project1})`}}>
                        <div className="w-1/2 lg text-white">Geek Music Bot </div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"30px",height:"30px"}} />
                            <img src={Nodejs} alt="html" className="mr-3 -mt-2" style={{width:"50px",height:"50px"}} />
                            <img src={Express} alt="css" style={{width:"60px",height:"30px"}} />
                        </div>
                        </div>
                        <div className="projectCard flex flex-row items-end mt-4" onClick={displayFlex3} style={{backgroundImage:`url(${Project2})`}}>
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

                    <div className="bg-modal1">

                        <div className="Project-about flex flex-row justify-center">
                            <div className="w-1/2 pr-10">
                                <div className="h-1/2">
                                    <img src={Project1} alt="{ProjectBackgroundTwo}" style={{height:"100%",width:"100%",borderBottomRightRadius:"120px"}} />
                                </div>
                                <div className="h-1/2">
                                    <div className="TechStack-SubHeading mt-10">TECH STACK</div>
                                    <div className="flex flex-row mt-5 justify-center ">
                                    <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"50px",height:"50px"}} />
                                    <img src={Nodejs} alt="html" className="mr-3 -mt-3" style={{width:"75px",height:"75px"}} />
                                    <img src={Express} alt="css" style={{width:"90px",height:"50px"}} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col justify-between">
                                <div className="flex justify-end px-5 mt-5" onClick={displayNone1}>
                                    <img src={cross} alt="cross" style={{width:"25px"}} />
                                </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>This Application allows you to stream music from <span className="text-green-300">YouTube</span> while you are connected to voice channels </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}> The application has multiple option like - <ul>&#9900; PLay/Pause Option</ul> <ul>&#9900; Queueing the song</ul> <ul>&#9900; Song can be Looped</ul> </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>The application is built using a Javascript Library know as <span className="text-green-300">Discod.Js , Youtube API </span> and is Hoted on <span className="text-green-300">Heroku</span> </div>
                                <div className="flex flex-row justify-evenly my-10">
                                    <a href="https://github.com/ashishmishra-bit/music-bot" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">View Demo</a>
                                    <a href="https://github.com/ashishmishra-bit/music-bot" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">Get Code <i class="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* model start */}
                    <div className="bg-modal3">

                        <div className="Project-about flex flex-row justify-center">
                            <div className="w-1/2 pr-10">
                                <div className="h-1/2">
                                    <img src={Project2} alt="{ProjectBackgroundTwo}" style={{height:"100%",width:"100%",borderBottomRightRadius:"120px"}} />
                                </div>
                                <div className="h-1/2">
                                    <div className="TechStack-SubHeading mt-10">TECH typ</div>
                                    <div className="flex flex-row mt-5 justify-center ">
                                    <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"50px",height:"50px"}} />
                                    <img src={Wordpress} alt="html" className="mr-3" style={{width:"50px",height:"50px"}} />
                                    <img className="mr-3" src={css} alt="css" style={{width:"50px",height:"50px"}} />
                                    <img className="mr-3" src={html} alt="css" style={{width:"50px",height:"50px"}} />
                                    <img className="-mt-2" src={Php} alt="css" style={{width:"70px",height:"70px" , color:"white"}} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col justify-between">
                                <div className="flex justify-end px-5 mt-5" onClick={displayNone3}>
                                    <img src={cross} alt="cross" style={{width:"25px"}} />
                                </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>This is the website for online grocery store , basically an online ecommerce website. It has <span className = "text-green-300 text-2xl">20K+</span> visitors every month  </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>It has support for firebase authentication and use MySql databse. </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>The application is built using <span className="text-green-300"> HTML, CSS,  JAVASCRIPT, WORDPRESS, PHP.</span> </div>
                                <div className="flex flex-row justify-evenly my-10">
                                    <a href="https://befreshgroceries.com/" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">View Demo</a>
                                    <a href="https://github.com/ashishmishra-bit" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">Get Code <i class="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* model end */}

                    <div className="w-1/2">
                        <div className="projectCard flex flex-row items-end ml-4"  onClick={displayFlex2} style={{width:"472px",height:"550px",backgroundImage:`url(${Project3})`}}>
                        <div className="w-1/2 lg text-white">Simhan's e-VedaShree </div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                        <img src={Java} alt="javaScript" className="mr-3" style={{width:"40px",height:"40px"}} />
                        <img src={Firebase} alt="html" className="mr-3" style={{width:"40px",height:"40px"}} />
                        <img src={Kotlin} alt="css" style={{width:"40px",height:"40px"}} />
                    </div>
                        </div>
                    </div>

                    <div className="bg-modal2">

                        <div className="Project-about flex flex-row justify-center">
                            <div className="w-1/2 pr-10">
                                <div className="h-1/2">
                                    <img src={project3} alt="{ProjectBackgroundTwo}" style={{height:"100%",width:"100%",borderBottomRightRadius:"120px"}} />
                                </div>
                                <div className="h-1/2">
                                    <div className="TechStack-SubHeading mt-10">TECH STACK</div>
                                    <div className="flex flex-row mt-5 justify-center ">
                                    <img src={Java} alt="javaScript" className="mr-3" style={{width:"70px",height:"70px"}} />
                                    <img src={Firebase} alt="html" className="mr-3" style={{width:"70px",height:"70px"}} />
                                    <img src={Kotlin} alt="css" style={{width:"70px",height:"70px"}} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col justify-between">
                                <div className="flex justify-end px-5 mt-5" onClick={displayNone2}>
                                    <img src={cross} alt="cross" style={{width:"25px"}} />
                                </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>Long back, vedas could only be taught through gurus. But with the advancement in technology and the evolution of learning to e-learning, this app aims to be a source for learning vedas. </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>The application has more than <span className="text-green-300 text-2xl">5000+ Downlaods</span> & it has recieved <span className="text-green-300 text-2xl">4.5 &#9733;</span> by the users </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>The application is built using <span className="text-green-300"> Java , Kotlin , Firebase , XML.</span> </div>
                                <div className="flex flex-row justify-evenly my-10">
                                    <a href="https://play.google.com/store/apps/details?id=pradyumna.simhansapp&hl=en_IN&gl=US" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">View Demo</a>
                                    <a href="https://github.com/ashishmishra-bit/E-VedaApp" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">Get Code <i class="fab fa-github"></i></a>
                                </div>
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

