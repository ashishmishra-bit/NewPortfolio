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
                                <img src={Gfgkiit} alt="work" style={{width:"50px"}} className="z-10" />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Full Stack Developer & UI/UX Designer(GFG-KIIT)</div>
                                    <div className="text-lg py-2"style={{color:"#ACACAC"}}>December-2020 - Present</div>
                                    <div className="text-base pr-24  text-justify " style={{color:"#B5B4B4"}}>I have contributed in the projects from all domains(Web, Android, UI/UX, ML) I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.</div>
                                </div>
                            </div>

                            <div className="Timeline h-64 -mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-20">
                                <img src={Freelance} alt="freelancecomunitee.com" style={{width:"50px"}} className="z-10"/>
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web Developer (freelancecomunitee.com)</div>
                                    <div className="text-lg py-2"style={{color:"#ACACAC"}}>January-2021 - May-2021</div>
                                    <div className="text-base pr-24  text-justify " style={{color:"#B5B4B4"}}>I was responsible for developing the website and integrating it with automation tools like Integromat , Automate.io ,Zapier , Mailchimp,etc.
                                    I also learned new cloud and linux technologies like Linode, Vultr and also how to manage the servers.</div>
                                </div>
                            </div>

                            <div className="Timeline h-64 -mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-20">
                                <img src={Kenisha} alt="work" style={{width:"50px"}} className="z-10" />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web Developer (Kenisha Styles)
                                    </div>
                                    <div className="text-lg py-2"style={{color:"#ACACAC"}}>July-2020 - September-2020</div>
                                    <div className="text-base pr-24  text-justify " style={{color:"#B5B4B4"}}>I was responsible for developing the company website and collecting the data for user visit , updating the website with new contents on regular basis, and updating the UI to increase user interaction .</div>
                                </div>
                            </div>

                            <div className="Timeline h-64 -mt-20"></div>

                            <div className="Journey-Heading  flex flex-row items-center -mt-20">
                                <img src={A2d} alt="work" style={{width:"50px"}} className="z-10" />
                                <div className="text-white ml-8" >
                                    <div className="text-xl">Web Developer (A2D Web)</div>
                                    <div className="text-lg py-2"style={{color:"#ACACAC"}}>November-2020 - January-2021</div>
                                    <div className="text-base pr-24  text-justify " style={{color:"#B5B4B4"}}>I developed the company website through WordPress. I got the to learn about WordPress and how it functions. Learned new web scripting language PHP .</div>
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
