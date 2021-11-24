import React from 'react'
import workExp from '../icons/workExp.png'
import KiitLogo from '../icons/KiitLogo.png'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Zoom, Flip } from 'react-reveal';

AOS.init({
    duration: 2000,
    delay: 3000,
    easing: 'ease-in-out',
});
AOS.refresh();

export default function JourneyLanding() {
    return (
        <div className="Landing-Journey px-24 py-10 overflow-hidden">

            <div data-aos="fade-down" data-aos-easing="linear" className="Landing-Heading text-center mb-10">JOURNEY</div>

            <div className="flex flex-row">
                {/* Journey-Work */}
                <div className="w-1/2">

                    <div className="Journey-Heading flex flex-row items-center">
                        <img src={workExp} alt="work" style={{ width: "50px" }} />
                        <div className="text-4xl text-white ml-8" style={{ color: "#ACACAC" }}>Work Experience</div>
                    </div>

                    <div className="Timeline h-32"></div>

                    <div className="Journey-Heading  flex flex-row items-center -mt-20">
                        <div data-aos="fade-up">
                            <Zoom>
                                <img src={KiitLogo} alt="work" style={{ width: "200px" }} />
                            </Zoom>
                        </div>
                        <div data-aos="fade-right" className="text-white ml-8 overflow-hidden" >
                            <div className="text-xl">Full Stack Developer & UI/UX Designer(GFG-KIIT)</div>
                            <div className="text-lg py-2" style={{ color: "#ACACAC" }}>December-2020 - Present</div>
                            <Flip x duration={5000} delay={2000}>
                                <div className="text-base pr-24  text-justify " style={{ color: "#B5B4B4" }}>I have contributed in the projects from all domains(Web, Android, UI/UX, ML) I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.</div>
                            </Flip>
                        </div>
                    </div>

                </div>

                {/* Journey-Edu */}
                <div className="w-1/2">

                    <div className="Journey-Heading  flex flex-row items-center">
                        <img src={workExp} alt="work" style={{ width: "50px" }} />
                        <div className="text-4xl text-white ml-8" style={{ color: "#ACACAC" }}>Education</div>
                    </div>

                    <div className="Timeline h-32"></div>

                    <div className="Journey-Heading flex flex-row items-center -mt-24">
                        <div data-aos="fade-up">
                            <Zoom>
                                <img src={KiitLogo} alt="work" style={{ width: "280px" }} />
                            </Zoom>
                        </div>
                        <div data-aos="fade-left" className="text-white ml-8 overflow-hidden"  >
                            <div className="text-xl">B.Tech Information Technology (KIIT) </div>
                            <div className="text-lg py-2" style={{ color: "#ACACAC" }}>July-2019 - Present</div>
                            <Flip x duration={3000} delay={1000}>
                            <div className="text-base pr-24  text-justify" style={{ color: "#B5B4B4" }}>I am a 3rd year IT student , currently studying in KIIT. I secured 8.5 CGPA in my 2nd Year. I have started doing development stuffs from mid of my 1st year and development facinated me a lot.
                            I also got the opportunity to do research work and publish it. I am working on Deep Learning technologies and my papers will be published soon.

                            </div>
                            </Flip>
                        </div>
                    </div>

                </div>
            </div>
            <Link to="/journey" >
                <div className="text-9xl text-white text-center font-semibold">&#x0355;  &#x0355;  &#x0355;  &#x0355; </div>
            </Link>
        </div>
    )
}
