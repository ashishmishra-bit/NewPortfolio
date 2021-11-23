import { Link } from 'react-router-dom'
import React, { useState } from "react";
import '../css/Sidebar.css'
import logo from '../images/logo.png'
import Journey from '../icons/Journey2.png'
import Projects from '../icons/Projects2.png'
import Blogs from '../icons/Blogs2.png'
// import Work from '../icons/Work.png'
import Achievments from '../icons/Achievments2.png'
import Facebook from '../icons/Facebook.png'
import Github from '../icons/Github.png'
import Instagram from '../icons/Instagram.png'
import Linkedin from '../icons/Linkedin.png'
import Twitter from '../icons/Twitter.png'


const Navbar = () => {
    const [tooltipStatus, setTooltipStatus] = useState(0);
    return (
        <div className="sidebar">
            <div>
                <Link to="/" className="flex justify-center">
                    <img src={logo} alt="logo" style={{ width: "45px" }} />
                </Link>
                <div className="sidebar-header">
                    <Link to="/journey" className="flex justify-center mt-4">
                        <img src={Journey} alt="logo" style={{ width: "60px" }} onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)} />
                        
                        <div className="relative mt-20 md:mt-0" onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
                            
                        {tooltipStatus == 1 && (
                            <div role="tooltip" className="z-20  w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded">
                                <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                            <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                    <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-sm font-bold text-gray-800 pb-1">Look At My Journey &#9996; </p>                                    
                            </div>
                        )}{" "}
                    </div>
                    </Link>
                    <Link to="/projects" className="flex justify-center mt-6">
                        <img src={Projects} alt="logo" style={{ width: "60px" }} onMouseEnter={() => setTooltipStatus(2)} onMouseLeave={() => setTooltipStatus(0)} />

                        <div className="relative mt-20 md:mt-0" onMouseEnter={() => setTooltipStatus(2)} onMouseLeave={() => setTooltipStatus(0)}>
                            
                        {tooltipStatus == 2 && (
                            <div role="tooltip" className="z-20  w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded">
                                <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                            <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                    <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-sm font-bold text-gray-800 pb-1">View My Projects &#9996; </p>                                    
                            </div>
                        )}{" "}
                    </div>

                    </Link>
                    <Link to="/blogs" className="flex justify-center mt-6">
                        <img src={Blogs} alt="logo" style={{ width: "60px" }} onMouseEnter={() => setTooltipStatus(3)} onMouseLeave={() => setTooltipStatus(0)}/>

                        <div className="relative mt-20 md:mt-0" onMouseEnter={() => setTooltipStatus(3)} onMouseLeave={() => setTooltipStatus(0)}>
                            
                        {tooltipStatus == 3 && (
                            <div role="tooltip" className="z-20  w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded">
                                <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                            <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                    <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-sm font-bold text-gray-800 pb-1">View My Blogs &#9996; </p>                                    
                            </div>
                        )}{" "}
                    </div>

                    </Link>
                    {/* <Link to="/" className="flex justify-center mt-6">
                        <img src={Work} alt="logo" style={{width:"25px"}} />
                    </Link> */}
                    <Link to="/achievements" className="flex justify-center mt-6">
                        <img src={Achievments} alt="logo" style={{ width: "60px" }} onMouseEnter={() => setTooltipStatus(4)} onMouseLeave={() => setTooltipStatus(0)} />

                        <div className="relative mt-20 md:mt-0" onMouseEnter={() => setTooltipStatus(4)} onMouseLeave={() => setTooltipStatus(0)}>
                            
                        {tooltipStatus == 4 && (
                            <div role="tooltip" className="z-20  w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded">
                                <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                            <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                                <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                    <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-sm font-bold text-gray-800 pb-1">Look At My Achievments &#9996; </p>                                    
                            </div>
                        )}{" "}
                    </div>

                    </Link>

                </div>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100008053720762"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    className="flex justify-center mt-4"
                >
                    <img src={Facebook} alt="Facebook" style={{ width: "25px" }} />
                </a>
                <a href="https://www.linkedin.com/in/ankit-raj-a3405b1b0"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin"
                    className="flex justify-center mt-4"
                >
                    <img src={Linkedin} alt="Linkedin" style={{ width: "25px" }} />
                </a>
                <a href="https://instagram.com/ankit_r.a.j?igshid=895xw0qgqmx2"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="flex justify-center mt-4"
                >
                    <img src={Instagram} alt="Instagram" style={{ width: "25px" }} />
                </a>
                <a href="https://github.com/AnkitRajCode"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                    className="flex justify-center mt-4"
                >
                    <img src={Github} alt="Github" style={{ width: "25px" }} />
                </a>
                <a href="https://twitter.com/ankit__raj__?s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                    className="flex justify-center mt-4"
                >
                    <img src={Twitter} alt="Twitter" style={{ width: "25px" }} />
                </a>
            </div>
        </div>
    )
}

export default Navbar
