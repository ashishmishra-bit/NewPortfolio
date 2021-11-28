import React from 'react'
import Sidebar from '../components/Sidebar'
import workExp from '../icons/workExp.png'
import KiitLogo from '../icons/KiitLogo.png'
import Narangi from '../images/Narangi.png'
import Company from '../images/Company.png'
import Freelance from '../images/freelance.png'
import Kenisha from '../images/kenisha.png'
import Gfgkiit from '../images/gfgkiit.png'
import A2d from '../images/a2d.png'
import Apsn from '../images/apsn.png'
import Gfg2 from '../images/gfg2.png'
import A2d2 from '../images/a2d2.png'
import Free from '../images/free.png'
import Kiit2 from '../images/kiit2.png'
import '../css/Journey.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import JourneyVideo from '../icons/journey2.mp4';
import resumeDetails from '../JsonData/resumeDetails'
import Particles from 'particles-bg'



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



export default function Journey() {
    return (
        <div>
            <motion.div
                className="absolute z-50 flex items-center justify-center w-full bg-black"
                initial="initial"
                animate="animate"
                variants={box}
            >
                <motion.svg variants={textContainer} className="absolute z-50 flex">
                    <pattern
                        id="pattern"
                        patternUnits="userSpaceOnUse"
                        width={900}
                        height={1000}
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
                        &#64;Ashish_Journey
                    </text>

                </motion.svg>
            </motion.div>
            <Sidebar />

            <div className="home-section">
                <Navbar />
                <Particles color="#48CAE4" num={200} type="cobweb" bg={true} />
                {/* HEADING SECTION */}

                <div className="Journey-header flex flex-col justify-end md:justify-center items-center">
                    <div className="Landing-Heading text-center mb-10 z-10">JOURNEY</div>
                    <p className="journey-header-text z-10">My Brain Has Too Many Tabs open 😉 😉 😉
                    </p>


                    <video autoPlay loop className="video-background" muted >
                        <source src={JourneyVideo} type="video/mp4" />

                    </video>
                </div>


                <div className="Landing-Journey md:px-24 py-10">

                    {/* <div className="Landing-Heading text-center mb-10">JOURNEY</div> */}

                    <div className="flex flex-col md:flex-row px-5 md:px-0">
                        {/* Journey-Work */}
                        <div className="md:w-1/2">

                            <div className="Journey-Heading flex flex-row items-center">
                                <img src={workExp} alt="work" style={{ width: "50px" }} />
                                <div className="text-3xl md:text-4xl text-white ml-8" style={{ color: "#ACACAC" }}>Work Experience</div>
                            </div>
                            <div className="Timeline h-36 md:h-16 "></div>
                            {resumeDetails.experiences.map((exp) => {
                                return (
                                    <>
                                        <div className="Timeline h-44 md:h-36 -mt-20"></div>
                                        <div className="Journey-Heading  flex flex-row items-center -mt-28 md:-mt-20 py-4">
                                            <img src={exp.imgUrl} alt="work" style={{ width: "50px" }} className="z-10" />
                                            <div className="text-white ml-8" >
                                                <div className="text-xl">{exp.title}</div>
                                                <div className="text-lg py-2" style={{ color: "#ACACAC" }}>{exp.date}</div>
                                                <div className="text-base md:pr-24 text-justify " style={{ color: "#B5B4B4" }}>{exp.desc}</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>

                        {/* Journey-Edu */}
                        <div className="md:w-1/2 mt-32 md:mt-0">

                            <div className="Journey-Heading  flex flex-row items-center">
                                <img src={workExp} alt="work" style={{ width: "50px" }} />
                                <div className="text-4xl text-white ml-8" style={{ color: "#ACACAC" }}>Education</div>
                            </div>

                            <div className="Timeline h-60 md:h-36"></div>

                            {resumeDetails.educations.map((edu) => {
                                return (
                                    <>
                                        <div className="Timeline h-44 md:h-36 -mt-20"></div>
                                        <div className="Journey-Heading flex flex-row items-center -mt-40 md:-mt-24 py-5">
                                            <img src={edu.imgUrl} alt="work" style={{ width: "50px" }} />
                                            <div className="text-white ml-8"  >
                                                <div className="text-xl">{edu.title}</div>
                                                <div className="text-lg py-2" style={{ color: "#ACACAC" }}>{edu.date}</div>
                                                <div className="text-base md:pr-24  text-justify" style={{ color: "#B5B4B4" }}>{edu.desc}</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center mt-28 mb-14">
                        <div className="flex flex-row justify-center">
                            <div className="journeyMaze " style={{ backgroundImage: `url(${Kiit2})` }}></div>
                            <div className="journeyMaze ml-3" style={{ backgroundImage: `url(${Free})` }}></div>
                            <div className="journeyMaze ml-3" style={{ backgroundImage: `url(${Company})` }}></div>
                        </div>
                        <div className="flex flex-row justify-center -mt-5">
                            <div className="journeyMaze" style={{ backgroundImage: `url(${A2d2})` }}></div>
                            <div className="journeyMaze ml-3" style={{ backgroundImage: `url(${Gfg2})` }}></div>
                        </div>
                        <div className="flex flex-row justify-center -mt-5">
                            <div className="journeyMaze" style={{ backgroundImage: `url(${Narangi})` }}></div>
                        </div>
                    </div>


                </div>

                <Footer />

            </div>
        </div>
    )
}
