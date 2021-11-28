import React , { useEffect , useRef } from 'react'
import { motion } from 'framer-motion'
import Particles from 'particles-bg'
import lottie from 'lottie-web'
// Components
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// CSS
import '../css/Projects.css'
// ICONS
import javaScript from "../icons/javaScript.svg"
import cross from "../icons/cross.svg"
import html from "../icons/html.svg"
import css from "../icons/css.svg"
import react from '../icons/react.png'
import Nodejs from "../icons/nodejs.png"
import Express from "../icons/expressjs.png"
import Wordpress from "../icons/Wordpress.png"
import Php from "../icons/php.png"
import Kotlin from "../icons/kotlin.png"
import Firebase from "../icons/firebase.png"
import Figma from "../icons/figma.png"
import Next2 from "../icons/Next2.png"
import Tailwind from "../icons/tailwindcss.svg"
import java from '../icons/java.png'
import Project5 from '../icons/Project5.png'
import Python   from   '../icons/python.png'
import Jupyter from "../icons/jupyter.svg";
import Tensorflow from  "../icons/tensorflow.svg";
import Keras from   "../icons/keras.png";
// IMAGES
import Project6 from '../images/gfgproject.png'
import Project1 from '../images/discord.png'
import Project2 from '../images/project2.png'
import Project4 from '../images/project4.png'
import project3 from '../images/project3.jpg';

const box = {
    initial: {
        height: "100vh",
        bottom: 0,
      },
      animate: {
        height: 0,
        transition: {
          when: "afterChildren",
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
};
const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.25,
        when: "afterChildren",
      },
    },
  };
  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

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
    function displayFlex5(){
        document.querySelector('.bg-modal5').style.display = 'flex';
    }
    function displayFlex6(){
        document.querySelector('.bg-modal6').style.display = 'flex';
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
    function displayNone5(){
        document.querySelector('.bg-modal5').style.display = 'none';
    }
    function displayNone6(){
        document.querySelector('.bg-modal6').style.display = 'none';
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    });

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
        <motion.div
            className="absolute z-50 flex items-center justify-center w-full bg-black"
            initial="initial"
            animate="animate"
            variants={box}
        >
            <motion.svg variants={textContainer}  className="absolute z-50 flex">
                <pattern
                    id="pattern"
                    patternUnits="userSpaceOnUse"
                    width={1000}
                    height={900}
                    className="text-white"
                >
                    <rect className="w-full h-full fill-current" />
                    <motion.rect variants={text} className="w-full h-full text-gray-600 fill-current" />
                </pattern>
                <text
                    className="text-3xl font-bold"
                    text-anchor="middle"
                    x="50%"
                    y="50%"
                    style={{ fill: "url(#pattern)" }}
                >
                    &#64;Ashish_Project 
                </text>        
            </motion.svg>
        </motion.div>
        <Sidebar />
        <div className="home-section pb-20">
            <Navbar />
            <Particles color="#48CAE4"  num={200} type="cobweb" bg={true} />

            {/* HEADING SECTION */}
            <div className="projects-header flex flex-col-reverse md:flex-row">
            
                <div className="projects-Heading-text md:w-1/2 flex ml-12 md:ml-20 items-center">MY <br className="hidden md:block" /> WORKS</div>
                
                <div className="projects-Heading-image md:w-1/2 mt-20 flex justify-center items-center">
                    <div id = "container" ref={container}></div>
                </div>
            </div>
            
            {/* BODY SECTION */}
            <div className="flex flex-col md:flex-row pt-8 md:pt-28">
                <div className="md:w-1/2 flex flex-col items-center md:items-end">

                    {/* Card One Start */}
                    <div className="projectCard flex flex-row items-end" onClick={displayFlex1}  style={{backgroundImage: `linear-gradient(357.78deg, rgba(0, 0, 0, 0.92) 17.76%, rgba(0, 0, 0, 0) 48.07%),url(${Project1})`}}>
                        <div className="w-1/2 lg text-white">Geek Music Bot </div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"30px",height:"30px"}} />
                            <img src={Nodejs} alt="html" className="mr-3 -mt-2" style={{width:"50px",height:"50px"}} />
                            <img src={Express} alt="css" style={{width:"60px",height:"30px"}} />
                        </div>
                    </div>
                    {/* Card One Popup - this popup is only mobile responsive */}
                    <div className="bg-modal1">
                        <div className="Project-about flex flex-col md:flex-row justify-center">
                            <div className="md:w-1/2 md:pr-10">
                                <div className="flex justify-end md:px-5 mt-5 md:hidden" onClick={displayNone1}>
                                    <img src={cross} alt="cross" style={{width:"25px"}} />
                                </div>
                                <div className="h-1/2">
                                    <img src={Project1} alt="{ProjectBackgroundTwo}" style={{height:"100%",width:"100%",borderBottomRightRadius:"120px"}} />
                                </div>
                                <div className="h-1/2">
                                    <div className="TechStack-SubHeading mt-2 md:mt-10">TECH STACK</div>
                                    <div className="flex flex-row mt-5 justify-center ">
                                    <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"50px",height:"50px"}} />
                                    <img src={Nodejs} alt="html" className="mr-3 -mt-3" style={{width:"75px",height:"75px"}} />
                                    <img src={Express} alt="css" style={{width:"90px",height:"50px"}} />
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex flex-col justify-between mt-10 md:mt-0">
                                <div className="md:flex justify-end px-5 mt-5 hidden md:block" onClick={displayNone1}>
                                    <img src={cross} alt="cross" style={{width:"25px"}} />
                                </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>This Application allows you to stream music from <span className="text-green-300">YouTube</span> while you are connected to voice channels </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}> The application has multiple option like - <ul>&#9900; PLay/Pause Option</ul> <ul>&#9900; Queueing the song</ul> <ul>&#9900; Song can be Looped</ul> </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>The application is built using a Javascript Library know as <span className="text-green-300">Discod.Js , Youtube API </span> and is Hoted on <span className="text-green-300">Heroku</span> </div>
                                <div className="flex flex-row justify-evenly my-5 md:my-10">
                                    <a href="https://github.com/ashishmishra-bit/music-bot" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">View Demo</a>
                                    <a href="https://github.com/ashishmishra-bit/music-bot" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">Get Code <i class="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Card Two Start */}
                    <div className="projectCard flex flex-row items-end mt-4" onClick={displayFlex2} style={{backgroundImage: `linear-gradient(357.78deg, rgba(0, 0, 0, 0.92) 17.76%, rgba(0, 0, 0, 0) 48.07%),url(${Project2})`}}>
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
                {/* Card Two Popup */}
                <div className="bg-modal2">
                    <div className="Project-about flex flex-row justify-center">
                        <div className="w-1/2 pr-10">
                            <div className="h-1/2">
                                <img src={Project2} alt="{ProjectBackgroundTwo}" style={{height:"100%",width:"100%",borderBottomRightRadius:"120px"}} />
                            </div>
                            <div className="h-1/2">
                                <div className="TechStack-SubHeading mt-10">TECH STACK</div>
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
                            <div className="flex justify-end px-5 mt-5" onClick={displayNone2}>
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

                {/* Card Three */}
                <div className="mt-4 md:mt-0 md:w-1/2">
                    <div className="projectCard-long flex flex-row items-end ml-5 md:ml-4" onClick={displayFlex3} style={{backgroundImage: `linear-gradient(357.78deg, rgba(0, 0, 0, 0.92) 17.76%, rgba(0, 0, 0, 0) 48.07%),url(${project3})`}}>
                        <div className="w-1/2 lg text-white">Simhan's e-VedaShree</div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={java } alt="javaScript" className="mr-3" style={{width:"60px",height:"60px"}}  />
                            <img src={Firebase} alt="html" className="mr-3" style={{width:"60px",height:"60px"}}  />
                            <img src={Kotlin} alt="css" style={{width:"60px",height:"60px"}}/>
                        </div>
                    </div>
                </div>
                {/* Card Three Popup */}
                <div className="bg-modal3">
                    <div className="Project-about flex flex-row justify-center">
                        <div className="w-1/2 pr-10">
                            <div className="h-1/2">
                                <img src={project3} alt="{ProjectBackgroundTwo}" style={{height:"100%",width:"100%",borderBottomRightRadius:"120px"}} />
                            </div>
                            <div className="h-1/2">
                                <div className="TechStack-SubHeading mt-10">TECH STACK</div>
                                <div className="flex flex-row mt-5 justify-center ">
                                <img src={java } alt="javaScript" className="mr-3" style={{width:"70px",height:"70px"}} />
                                <img src={Firebase} alt="html" className="mr-3" style={{width:"70px",height:"70px"}} />
                                <img src={Kotlin} alt="css" style={{width:"70px",height:"70px"}} />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col justify-between">
                            <div className="flex justify-end px-5 mt-5" onClick={displayNone3}>
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

            {/* Next Project Section */}
            <div className="flex flex-col md:flex-row-reverse mt-4">
                <div className="md:w-1/2 flex flex-col">

                    {/* Card Four Start */}
                    <div className="projectCard flex flex-row items-end ml-4" onClick={displayFlex4} style={{backgroundImage: `linear-gradient(357.78deg, rgba(0, 0, 0, 0.92) 17.76%, rgba(0, 0, 0, 0) 48.07%),url(${Project4})`}}>
                        <div className="w-1/2 lg text-white">Aecor </div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"40px",height:"40px"}} />
                            <img src={Tailwind} alt="html" className="mr-3 " style={{width:"40px",height:"40px"}} />
                            <img src={Figma} alt="css" className="mr-3 " style={{width:"40px",height:"50px"}} />
                            <img src={Next2} className="mr-3 " alt="css" style={{width:"90px",height:"50px"}} />
                        </div>
                    </div>
                    {/* Card Four Popup */}
                    <div className="bg-modal4">
                        <div className="Project-about flex flex-row justify-center">
                            <div className="w-1/2 pr-10">
                                <div className="h-1/2">
                                    <img src={Project4} alt="{ProjectBackgroundTwo}" style={{height:"100%",width:"100%",borderBottomRightRadius:"120px"}} />
                                </div>
                                <div className="h-1/2">
                                    <div className="TechStack-SubHeading mt-10">TECH STACK</div>
                                    <div className="flex flex-row mt-5 justify-center ">
                                    <img src={javaScript} alt="javaScript" className="mr-3" style={{width:"50px",height:"50px"}} />
                            <img src={Tailwind} alt="html" className="mr-3 " style={{width:"50px",height:"50px"}} />
                            <img src={Figma} className="mr-3 " alt="css" style={{width:"80px",height:"70px"}} />
                            <img src={Next2} className="mr-3 " alt="css" style={{width:"90px",height:"50px"}} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col justify-between">
                                <div className="flex justify-end px-5 mt-5" onClick={displayNone4}>
                                    <img src={cross} alt="cross" style={{width:"25px"}} />
                                </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>This is the that monitors and provide <span className="text-green-300">Trading</span> support. The application has Server Side Rendering, also the application is supported for intallation in your local systems. i.e well known as <span className="text-green-300 text-2xl">PWA (Progressive Web Apps).</span> </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}> The application is designed and built me and my friend <span className="text-green-300">@Ankit Raj</span> </div>
                                <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>The application is built using a React.js framework know as <span className="text-green-300">Next.Js </span> for designing the UI i used <span className="text-green-300">Figma</span> & for styling the web application i used  <span className="text-green-300">Tailwind Css</span> </div>
                                <div className="flex flex-row justify-evenly my-10">
                                    <a href="https://aecorcap.com/" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">View Demo</a>
                                    <a href="https://github.com/ashishmishra-bit" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">Get Code <i class="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card five Start */}
                    <div className="projectCard flex flex-row items-end mt-4 ml-4" onClick={displayFlex5} style={{backgroundImage: `linear-gradient(357.78deg, rgba(0, 0, 0, 0.92) 17.76%, rgba(0, 0, 0, 0) 48.07%),url(${Project5})`}}>
                        <div className="w-1/2 lg text-white">SentiMent Analysis </div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={Python} alt="javaScript" className="mr-3" style={{width:"50px",height:"50px"}} />
                            <img src={Tensorflow} alt="html" className="mr-3" style={{width:"50px",height:"50px"}} />
                            <img className="mr-3" src={Keras} alt="css" style={{width:"50px",height:"50px"}} />
                            <img className="mr-3" src={Jupyter} alt="css" style={{width:"50px",height:"50px"}} />                                
                        </div>
                    </div>
                </div>
                {/* Card five Popup */}
                <div className="bg-modal5">
                    <div className="Project-about flex flex-row justify-center">
                        <div className="w-1/2 pr-10">
                            <div className="h-1/2">
                                <img src={Project5} alt="{ProjectBackgroundTwo}" style={{height:"100%",width:"100%",borderBottomRightRadius:"120px"}} />
                            </div>
                            <div className="h-1/2">
                                <div className="TechStack-SubHeading mt-10">TECH STACK</div>
                                <div className="flex flex-row mt-5 justify-center ">
                                <img src={Python} alt="javaScript" className="mr-3" style={{width:"50px",height:"50px"}} />
                            <img src={Tensorflow} alt="html" className="mr-3" style={{width:"50px",height:"50px"}} />
                            <img className="mr-3" src={Keras} alt="css" style={{width:"50px",height:"50px"}} />
                            <img className="mr-3" src={Jupyter} alt="css" style={{width:"50px",height:"50px"}} />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col justify-between">
                            <div className="flex justify-end px-5 mt-5" onClick={displayNone5}>
                                <img src={cross} alt="cross" style={{width:"25px"}} />
                            </div>
                            <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>I have been working with the research paper on the topic <span className = "text-green-300 text-2xl">Sentiment Analysis.</span> The basic idea was to the get better accuracy for the model and use Depp Neural Networks to train the model. I ended up getting the 98% accuracy.  </div>
                            <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>I have used <span className = "text-green-300 text-2xl">Convolutional Neural Network (CNN) and Extreme Learning Machine (ELM) </span>algorithm to get the final result.</div>
                            <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>The application is built using <span className="text-green-300"> Pthon , Tensorflow , Keras & JupyterNotebook.</span> </div>
                            <div className="flex flex-row justify-evenly my-10">
                                <a href="https://github.com/ashishmishra-bit" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">View Demo</a>
                                <a href="https://github.com/ashishmishra-bit" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">Get Code <i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card six */}
                <div className="mt-4 md:mt-0 md:w-1/2 flex md:justify-end">
                    <div className="projectCard-long flex flex-row items-end ml-5 md:ml-4" onClick={displayFlex6} style={{backgroundImage: `linear-gradient(357.78deg, rgba(0, 0, 0, 0.92) 17.76%, rgba(0, 0, 0, 0) 48.07%),url(${Project6})`}}>
                        <div className="w-1/2 lg text-white">GFG KIIT</div>
                        <div className="w-1/2 flex flex-row justify-end mb-4">
                            <img src={react } alt="javaScript" className="mr-3" style={{width:"60px",height:"60px"}} />
                            <img src={javaScript} alt="html" className="mr-3" style={{width:"50px",height:"50px"}} />
                            <img src={css} alt="css" style={{width:"50px",height:"50px"}}/>
                        </div>
                    </div>
                </div>
                {/* Card six Popup */}
                <div className="bg-modal6">
                    <div className="Project-about flex flex-row justify-center">
                        <div className="w-1/2 pr-10">
                            <div className="h-1/2">
                                <img src={Project6} alt="{ProjectBackgroundTwo}" style={{height:"100%",width:"100%",borderBottomRightRadius:"120px"}} />
                            </div>
                            <div className="h-1/2">
                                <div className="TechStack-SubHeading mt-10">TECH STACK</div>
                                <div className="flex flex-row mt-5 justify-center ">
                                <img src={react } alt="javaScript" className="mr-3" style={{width:"60px",height:"60px"}} />
                                <img src={javaScript} alt="html" className="mr-3" style={{width:"50px",height:"50px"}} />
                                <img src={css} alt="css" style={{width:"50px",height:"50px"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col justify-between">
                            <div className="flex justify-end px-5 mt-5" onClick={displayNone6}>
                                <img src={cross} alt="cross" style={{width:"25px"}} />
                            </div>
                            <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>The website is build for college society.</div>
                            <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>This website has shows the past records of GFG KIIT. The projects ,, Webinars & Members present in the society.  </div>
                            <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>The application is built using <span className="text-green-300"> React.Js , Javascript & Css.</span> </div>
                            <div className="flex flex-row justify-evenly my-10">
                                <a href="https://gfgkiit.co" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">View Demo</a>
                                <a href="https://github.com/ashishmishra-bit/" target="_blank" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">Get Code <i class="fab fa-github"></i></a>
                            </div>
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

