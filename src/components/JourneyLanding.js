import React from 'react'
import workExp from '../icons/workExp.png'
import KiitLogo from '../icons/KiitLogo.png'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Zoom, Flip } from 'react-reveal';
import resumeDetails from '../JsonData/resumeDetails'
import Animation from "../components/Animation"

AOS.init({
    duration: 2000,
    delay: 3000,
    easing: 'ease-in-out',
});
AOS.refresh();

export default function JourneyLanding() {
    return (
        <div className="Landing-Journey md:px-24 py-10 overflow-hidden">

            {/* <div data-aos="fade-down" data-aos-easing="linear" className="Landing-Heading text-center md:mb-10">JOURNEY</div> */}
            <div className="Landing-Heading text-center md:mb-10">JOURNEY</div>

            <div className="flex flex-col md:flex-row px-5">
                {/* Journey-Work */}
                <div className="md:w-1/2">

                    <div className="Journey-Heading flex flex-row items-center">
                        <img src={workExp} alt="work" style={{ width: "50px" }} />
                        <div className="text-4xl text-white ml-8" style={{ color: "#ACACAC" }}>Work Experience</div>
                    </div>



                    <div className="Timeline h-40 -mt-5 md:-mt-0  md:h-32"></div>

                    <div className="Journey-Heading  flex flex-row items-center ml-2 md:ml-0 -mt-24 md:-mt-20">
                    {resumeDetails.journeyExperienceHome.map((exp) => {
                        return (
                            <> 
                            <div data-aos="fade-up">
                            <Zoom>
                                <img src={KiitLogo} alt="work" style={{ width: "200px" }} />
                            </Zoom>
                        </div>
                        <div data-aos="fade-right" className="text-white ml-8 overflow-hidden" >
                            <div className="text-lg md:text-xl">{exp.title}</div>
                            <div className="text-base md:text-lg py-2" style={{ color: "#ACACAC" }}>{exp.date}</div>
                            <Flip x duration={3000} delay={1000}>
                                <div className="text-sm md:text-base md:pr-24  text-justify " style={{ color: "#B5B4B4" }}>{exp.desc}</div>
                            </Flip>
                        </div>
                            </>
                        )
                    })}
                        
                    </div>

                </div>

                {/* Journey-Edu */}
                <div className="mt-20 md:mt-0 md:w-1/2">

                    <div className="Journey-Heading  flex flex-row items-center">
                        <img src={workExp} alt="work" style={{ width: "50px" }} />
                        <div className="text-4xl text-white ml-8" style={{ color: "#ACACAC" }}>Education</div>
                    </div>

                    <div className="Timeline h-44 md:h-32"></div>

                    <div className="Journey-Heading flex flex-row items-center ml-2 md:ml-0 -mt-36 md:-mt-24">
                        {resumeDetails.journeyEducationHome.map((edu) => {
                            return(
                                <>
                                <div data-aos="fade-up">
                                <Zoom>
                                    <img src={KiitLogo} alt="work" style={{ width: "280px" }} />
                                </Zoom>
                            </div>
                            <div data-aos="fade-left" className="text-white ml-8 overflow-hidden"  >
                                <div className="text-lg md:text-xl">{edu.title} </div>
                                <div className="text-base md:text-lg py-2" style={{ color: "#ACACAC" }}>{edu.date}</div>
                                <Flip x duration={3000} delay={1000}>
                                <div className="text-sm md:text-base md:pr-24  text-justify" style={{ color: "#B5B4B4" }}>{edu.desc}</div>
                                
                                </Flip>
                            </div>
                                </>
                            )
                        })}
                    </div>

                </div>
            </div>
            <Link to="/journey">
            <Animation />
            </Link>
        </div>
    )
}
