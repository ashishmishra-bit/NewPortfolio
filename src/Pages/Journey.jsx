import React from 'react'
import Sidebar from '../components/Sidebar'
import workExp from '../icons/workExp.png'
import KiitLogo from '../icons/KiitLogo.png'
import Narangi from '../images/Narangi.png'
import Company from '../images/Company.png'
import '../css/Journey.css'
import Footer from '../components/Footer'

export default function Journey() {
    return (
        <div>
            <Sidebar />
            <div className="home-section">
                {/* HEADING SECTION */}
                <div className="Journey-header flex flex-col justify-center items-center">
                    <div className="Landing-Heading mb-10">JOURNEY</div>
                    <p className = "journey-header-text">My Brain Has Too Many Tabs open 😉 😉 😉 
                    </p>

                    {/* 
                    <div className="text-8xl text-white ">Odyssey of being</div>
                    <div className="text-4xl text-white mt-8">Abecedarian TO Crackerjack</div>
                    */}
                </div>

                <div className="Landing-Journey px-24 py-10">

                    {/* <div className="Landing-Heading text-center mb-10">JOURNEY</div> */}

                    <div className="flex flex-row">
                        {/* Journey-Work */}
                        <div className="w-1/2">

                            <div className="Journey-Heading flex flex-row items-center">
                                <img src={workExp} alt="work" style={{width:"50px"}} />
                                <div className="text-4xl text-white ml-8" style={{color:"#ACACAC"}}>Work Experience</div>
                            </div>

                            <div className="Timeline h-36"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-20 ">
                                <img src={KiitLogo} alt="work" style={{width:"50px"}} />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web & Android Developer & UI/UX Designer(GFG-KIIT)</div>
                                    <div className="text-lg py-2"style={{color:"#ACACAC"}}>December-2020 - Present</div>
                                    <div className="text-base pr-24  text-justify " style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.</div>
                                </div>
                            </div>

                            <div className="Timeline h-64 -mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-20">
                                <img src={KiitLogo} alt="work" style={{width:"50px"}} />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web & Android Developer & UI/UX Designer(GFG-KIIT)</div>
                                    <div className="text-lg py-2"style={{color:"#ACACAC"}}>December-2020 - Present</div>
                                    <div className="text-base pr-24  text-justify " style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.</div>
                                </div>
                            </div>

                            <div className="Timeline h-64 -mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-20">
                                <img src={KiitLogo} alt="work" style={{width:"50px"}} />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web & Android Developer & UI/UX Designer(GFG-KIIT)</div>
                                    <div className="text-lg py-2"style={{color:"#ACACAC"}}>December-2020 - Present</div>
                                    <div className="text-base pr-24  text-justify " style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.</div>
                                </div>
                            </div>

                            <div className="Timeline h-64 -mt-20"></div>

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

                            <div className="Timeline h-64 -mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-20">
                                <img src={KiitLogo} alt="work" style={{width:"50px"}} />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web & Android Developer & UI/UX Designer(GFG-KIIT)</div>
                                    <div className="text-lg py-2"style={{color:"#ACACAC"}}>December-2020 - Present</div>
                                    <div className="text-base pr-24  text-justify " style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.</div>
                                </div>
                            </div>

                            <div className="Timeline h-64 -mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-20">
                                <img src={KiitLogo} alt="work" style={{width:"50px"}} />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web & Android Developer & UI/UX Designer(GFG-KIIT)</div>
                                    <div className="text-lg py-2"style={{color:"#ACACAC"}}>December-2020 - Present</div>
                                    <div className="text-base pr-24  text-justify " style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.</div>
                                </div>
                            </div>

                            <div className="Timeline h-64 -mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-20">
                                <img src={KiitLogo} alt="work" style={{width:"50px"}} />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web & Android Developer & UI/UX Designer(GFG-KIIT)</div>
                                    <div className="text-lg py-2"style={{color:"#ACACAC"}}>December-2020 - Present</div>
                                    <div className="text-base pr-24  text-justify " style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col justify-center mt-28 mb-14">
                        <div className="flex flex-row justify-center">
                            <div className="journeyMaze " style={{backgroundImage:`url(${Narangi})`}}></div>
                            <div className="journeyMaze ml-3" style={{backgroundImage:`url(${Company})`}}></div>
                            <div className="journeyMaze ml-3" style={{backgroundImage:`url(${Narangi})`}}></div>
                        </div>
                        <div className="flex flex-row justify-center -mt-5">
                            <div className="journeyMaze" style={{backgroundImage:`url(${Narangi})`}}></div>
                            <div className="journeyMaze ml-3" style={{backgroundImage:`url(${Company})`}}></div>
                        </div>
                        <div className="flex flex-row justify-center -mt-5">
                            <div className="journeyMaze" style={{backgroundImage:`url(${Company})`}}></div>
                        </div>
                    </div>


                </div>

                <Footer />

            </div>
        </div>
    )
}
