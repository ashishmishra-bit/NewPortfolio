import React from 'react'
import Sidebar from '../components/Sidebar'
import '../css/Landing.css'
import Particles from 'particles-bg'
import Typewriter from 'typewriter-effect'
import Profile from '../images/avatar3.png'

import JourneyLanding from '../components/JourneyLanding'
import TechAndTools from '../components/TechAndTools'
// import useEffect from 'react';


// Animation Imports
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Fade, Zoom } from 'react-reveal';
import ProjectLanding from '../components/ProjectLanding'
import Footer from '../components/Footer'
import BlogsLanding from '../components/BlogsLanding'
import Navbar from '../components/Navbar'
// ..
AOS.init({
    duration: 2000,
    delay: 5000,
    easing: 'ease-in-out',
});
AOS.refresh();


const Landing = () => {
    

    
    return (
        <div className="landing">
            <Sidebar />
            
            <div className="home-section">
                {/* HEADING SECTION */}
                <div className="Landing-header">
                <Navbar />
                    <Particles color="#48CAE4" type="cobweb" />
                    <div className="typingEffect">
                        <Fade down  duration = {3000} delay = {500}>
                            <p>~Hello World~</p>
                        </Fade>
                        <Fade up duration = {3000} delay = {500}>
                            <p>I am Ashish Kumar Mishra</p>
                        </Fade>
                        <Zoom duration = {5000} delay = {300}>
                        <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Frontend | Android | Data Science | UI/UX')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(2500)
                                .start();
                        }}
                    />
                        </Zoom>
                    </div>
                </div>

                {/* ABOUT SECTION */}
                <div className="px-5 md:px-24 md:py-28 overflow-hidden">
                    <div className="Landing-Heading text-center md:text-left md:ml-14 lg:ml-8 " data-aos="fade-in" data-aos-duration="9000">ABOUT</div>
                    {/* <div className="Landing-Heading text-center md:text-left md:ml-14 lg:ml-8 ">ABOUT</div> */}
                    <div className="flex flex-col-reverse md:flex-row ">
                        <div className="md:w-3/4 text-lg md:text-2x md:pr-28 text-justify" style={{ color: "#B5B4B4" }} data-aos="slide-right" data-aos-duration="9000">
                        {/* <div className="md:w-3/4 text-lg md:text-2xl md:pr-28 text-justify" style={{ color: "#B5B4B4" }}> */}
                            Hello Folks, I am Ashish Kumar Mishra. I am a hardworking, self-motivated, and well-organized person, sincerely dedicated to my allocated job. I am an IT undergraduate scholar with a penchant for exploring various innovations that are emerging in the technical field. Web Development fascinates me the most. I have acquired skills in Android development and SEO and currently, I have lessons in Data Science and working on research papers. I have obtained certification in UI/UX and terminated with designing websites and projects. I am brushing up my skills to attain more perfection and intend to generate newness in the field of Information and Technology.
                        </div>
                        <div className="text profileImage md:w-4/12 md:-mt-7" data-aos="slide-left" data-aos-duration="9000">
                        {/* <div className="text profileImage md:w-4/12 "> */}
                            <img src={Profile} alt="Profile"  />
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
