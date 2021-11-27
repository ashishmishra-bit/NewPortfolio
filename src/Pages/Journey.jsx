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
          <motion.svg variants={textContainer}  className="absolute z-50 flex">
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width={750}
              height={800}
              className="text-white"
            >
              <rect className="w-full h-full fill-current" />
              <motion.rect variants={text} className="w-full h-full text-gray-600 fill-current" />
            </pattern>
            <text
              className="text-4xl font-bold"
              text-anchor="middle"
              x="50%"
              y="50%"
              style={{ fill: "url(#pattern)" }}
            >
              Ashish Mishra
            </text>        
            
      </motion.svg>
      </motion.div>
            <Sidebar />
            <div className="home-section">
                <Navbar />
                {/* HEADING SECTION */}
                <div className="Journey-header flex flex-col justify-end md:justify-center items-center">
                    <div className="Landing-Heading text-center mb-10">JOURNEY</div>
                    <p className="journey-header-text">My Brain Has Too Many Tabs open 😉 😉 😉
                    </p>

                    {/* 
                    <div className="text-8xl text-white ">Odyssey of being</div>
                    <div className="text-4xl text-white mt-8">Abecedarian TO Crackerjack</div>
                    */}
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

                            <div className="Timeline h-44 md:h-36"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-28 md:-mt-20 ">
                                <img src={Gfgkiit} alt="work" style={{ width: "50px" }} className="z-10" />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Full Stack Developer & UI/UX Designer(GFG-KIIT)</div>
                                    <div className="text-lg py-2" style={{ color: "#ACACAC" }}>December-2020 - Present</div>
                                    <div className="text-base md:pr-24 text-justify " style={{ color: "#B5B4B4" }}>I have contributed in the projects from all domains(Web, Android, UI/UX, ML) I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.</div>
                                </div>
                            </div>

                            <div className="Timeline h-80 md:h-64 -mt-28 md:-mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-32 md:-mt-20">
                                <img src={Freelance} alt="freelancecomunitee.com" style={{ width: "50px" }} className="z-10" />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web Developer (freelancecomunitee.com)</div>
                                    <div className="text-lg py-2" style={{ color: "#ACACAC" }}>January-2021 - May-2021</div>
                                    <div className="text-base md:pr-24  text-justify " style={{ color: "#B5B4B4" }}>I was responsible for developing the website and integrating it with automation tools like Integromat , Automate.io ,Zapier , Mailchimp,etc.
                                        I also learned new cloud and linux technologies like Linode, Vultr and also how to manage the servers.</div>
                                </div>
                            </div>

                            <div className="Timeline h-80 md:h-64 -mt-32 md:-mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-28 md:-mt-20">
                                <img src={Kenisha} alt="work" style={{ width: "50px" }} className="z-10" />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web Developer (Kenisha Styles)
                                    </div>
                                    <div className="text-lg py-2" style={{ color: "#ACACAC" }}>July-2020 - September-2020</div>
                                    <div className="text-base md:pr-24  text-justify " style={{ color: "#B5B4B4" }}>I was responsible for developing the company website and collecting the data for user visit , updating the website with new contents on regular basis, and updating the UI to increase user interaction .</div>
                                </div>
                            </div>

                            <div className="Timeline h-72 md:h-64 -mt-32 md:-mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-24 md:-mt-20">
                                <img src={A2d} alt="work" style={{ width: "50px" }} className="z-10" />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web Developer (A2D Web)</div>
                                    <div className="text-lg py-2" style={{ color: "#ACACAC" }}>November-2020 - January-2021</div>
                                    <div className="text-base md:pr-24  text-justify " style={{ color: "#B5B4B4" }}>I developed the company website through WordPress. I got the to learn about WordPress and how it functions. Learned new web scripting language PHP .</div>
                                </div>
                            </div>

                        </div>

                        {/* Journey-Edu */}
                        <div className="md:w-1/2 mt-32 md:mt-0">

                            <div className="Journey-Heading  flex flex-row items-center">
                                <img src={workExp} alt="work" style={{ width: "50px" }} />
                                <div className="text-4xl text-white ml-8" style={{ color: "#ACACAC" }}>Education</div>
                            </div>

                            <div className="Timeline h-60 md:h-36"></div>

                            <div className="Journey-Heading flex flex-row items-center -mt-40 md:-mt-24">
                                <img src={KiitLogo} alt="work" style={{ width: "50px" }} />
                                <div className="text-white ml-8"  >
                                    <div className="text-xl">B.Tech Information Technology (KIIT)</div>
                                    <div className="text-lg py-2" style={{ color: "#ACACAC" }}>July-2019 - Present</div>
                                    <div className="text-base md:pr-24  text-justify" style={{ color: "#B5B4B4" }}>I am a 3rd year IT student , currently studying in KIIT. I secured 8.5 CGPA in my 2nd Year. I have started doing development stuffs from mid of my 1st year and development facinated me a lot.
                                        I also got the opportunity to do research work and publish it. I am working on Deep Learning technologies and my papers will be published soon.</div>
                                </div>
                            </div>

                            <div className="Timeline h-80 md:h-64 -mt-40 md:-mt-24"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-20">
                                <img src={Apsn} alt="work" style={{ width: "50px" }} className="z-10" />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Senior Secondary (XII)</div>
                                    <div className="text-lg py-2" style={{ color: "#ACACAC" }}>05/2018 - 05/2019</div>
                                    <div className="text-base md:pr-24  text-justify " style={{ color: "#B5B4B4" }}>I studied in Army Public School Narangi; Its an CBSE board school with all facilities. I secured 83.3% in my XIIth grade and my subjects were (Physics,Chemistry,Maths,English,Physical Education)</div>
                                </div>
                            </div>

                            <div className="Timeline h-64 -mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-24 md:-mt-20">
                                <img src={Apsn} alt="work" style={{ width: "50px" }} className="z-10" />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Secondary (X)</div>
                                    <div className="text-lg py-2" style={{ color: "#ACACAC" }}>05/2016 - 05/2017</div>
                                    <div className="text-base md:pr-24  text-justify " style={{ color: "#B5B4B4" }}>I studied in Army Public School Narangi; Its an CBSE board school with all facilities. I secured 9.8 CGPA in my Xth grade and my subjects were (English,Maths,Science,Social Science & Hindi)</div>
                                </div>
                            </div>


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
