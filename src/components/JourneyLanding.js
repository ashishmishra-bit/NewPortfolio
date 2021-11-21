import React from 'react'
import workExp from '../icons/workExp.png'
import KiitLogo from '../icons/KiitLogo.png'
import { Link } from 'react-router-dom'

export default function JourneyLanding() {
    return (
        <div className="Landing-Journey px-24 py-10">

            <div className="Landing-Heading text-center mb-10">JOURNEY</div>

            <div className="flex flex-row">
                {/* Journey-Work */}
                <div className="w-1/2">

                    <div className="Journey-Heading flex flex-row items-center">
                        <img src={workExp} alt="work" style={{width:"50px"}} />
                        <div className="text-4xl text-white ml-8" style={{color:"#ACACAC"}}>Work Experience</div>
                    </div>

                    <div className="Timeline h-32"></div>

                    <div className="Journey-Heading  flex flex-row items-center -mt-20">
                        <img src={KiitLogo} alt="work" style={{width:"50px"}} />
                        <div className="text-white ml-8" >
                            <div className="text-xl">Web & Android Developer & UI/UX Designer(GFG-KIIT)</div>
                            <div className="text-lg py-2"style={{color:"#ACACAC"}}>December-2020 - Present</div>
                            <div className="text-base pr-24  text-justify " style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.</div>
                        </div>
                    </div>

                </div>

                {/* Journey-Edu */}
                <div className="w-1/2">

                    <div className="Journey-Heading  flex flex-row items-center">
                        <img src={workExp} alt="work" style={{width:"50px"}} />
                        <div className="text-4xl text-white ml-8" style={{color:"#ACACAC"}}>Education</div>
                    </div>

                    <div className="Timeline h-32"></div>

                    <div className="Journey-Heading flex flex-row items-center -mt-20">
                        <img src={KiitLogo} alt="work" style={{width:"50px"}} />
                        <div className="text-white ml-8"  >
                            <div className="text-xl">Web & Android Developer & UI/UX Designer(GFG-KIIT)</div>
                            <div className="text-lg py-2" style={{color:"#ACACAC"}}>December-2020 - Present</div>
                            <div className="text-base pr-24  text-justify" style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.</div>
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
