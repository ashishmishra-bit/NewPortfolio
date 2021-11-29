import React, { useEffect } from 'react';
import { motion } from 'framer-motion'
import Particles from 'particles-bg'
import Typewriter from 'typewriter-effect'
// Components
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import JourneyLanding from '../components/JourneyLanding'
import TechAndTools from '../components/TechAndTools'
import ProjectLanding from '../components/ProjectLanding'
import BlogsLanding from '../components/BlogsLanding'
import Footer from '../components/Footer'
// JSON
import resumeDetails from '../JsonData/resumeDetails'
// Image
import Profile from '../images/avatar3.png'
// CSS
import '../css/Landing.css'
// Animation Imports
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Fade, Zoom } from 'react-reveal';
AOS.init({
  duration: 2000,
  delay: 5000,
  easing: 'ease-in-out',
});
AOS.refresh();

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

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="landing">
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
            &#64;Ashish Mishra
          </text>
        </motion.svg>
      </motion.div>

      <Sidebar />
      <div className="home-section">
        {/* HEADING SECTION */}
        <div className="Landing-header">
          <Navbar />
          <Particles color="#48CAE4" type="cobweb" />
          <div className="typingEffect">
            <Fade down duration={3000} delay={500}>
              <p>~Hello World~</p>
            </Fade>
            <Fade up duration={3000} delay={500}>
              <p>{resumeDetails.name}</p>
            </Fade>
            <Zoom duration={5000} delay={300}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(`${resumeDetails.title}`)
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .start();
                }}
              />
            </Zoom>
           <a href = "https://drive.google.com/drive/u/0/folders/1bCFV6_GZkgYr300HAAwGM9ysefj9ZlIf" target = "_blank">
           <button class="button type1">
           <p className="text-white font-bold">Get Resume 🗒️</p>
         </button>
           </a>
          </div>

        </div>

        {/* ABOUT SECTION */}
        <div className="px-5 md:px-24 md:py-28 overflow-hidden">
          <div className="Landing-Heading text-center md:text-left md:ml-14 lg:ml-8 " data-aos="fade-in" data-aos-duration="9000">ABOUT</div>
          {/* <div className="Landing-Heading text-center md:text-left md:ml-14 lg:ml-8 ">ABOUT</div> */}
          <div className="flex flex-col-reverse md:flex-row ">
            <div className="md:w-3/4 text-lg md:text-2x md:pr-28 text-justify" style={{ color: "#B5B4B4" }} data-aos="slide-right" data-aos-duration="9000">
              {/* <div className="md:w-3/4 text-lg md:text-2xl md:pr-28 text-justify" style={{ color: "#B5B4B4" }}> */}
              {resumeDetails.about}
            </div>
            <div className="text profileImage md:w-4/12 md:-mt-7" data-aos="slide-left" data-aos-duration="9000">
              {/* <div className="text profileImage md:w-4/12 "> */}
              <img src={Profile} alt="Profile" />
            </div>
          </div>
        </div>

        {/* JOURNEY SECTION */}
        <JourneyLanding />

        {/* TECH & TOOLS SECTION */}
        <TechAndTools />

        {/* PROJECTS SECTION */}
        <ProjectLanding />

        {/* BLOGS SECTION */}
        <BlogsLanding />

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
