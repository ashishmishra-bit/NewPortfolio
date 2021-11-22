import React from 'react'
import '../css/Achievements.css'
import AchievementsHeader from '../images/AchievementsHeader.png'
import HackerRankLogo from '../images/HackerRankLogo.png'
import credentials from '../icons/credentials.png'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function Achievements() {
    return (
        <div>
            <Sidebar />
            <div className="home-section pb-20">
                {/* HEADING SECTION */}
                <div className="achivements-header flex flex-row">
                    <div className="achivements-Heading-text w-1/2 flex ml-20 items-center">“ Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. ”</div>
                    <div className="achivements-Heading-image w-1/2 flex justify-center items-center">
                        <img src={AchievementsHeader} alt="AchievementsHeader" />
                    </div>
                </div>

                {/* BODY SECTION */}
                <div className="Landing-Heading TechAndTools-Heading text-center mb-10 uppercase">Achievements</div>

                <div className="flex flex-row mx-28">
                    <div className="w-1/4">
                        <img src={HackerRankLogo} alt="HackerRankLogo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">Problem Solving (Basic) Certificate</div>
                        <div className="text-lg text-white my-2">HackerRank</div>
                        <div className="text-lg text-white mb-2">Issue September , 2021 - No expiration date</div>
                        <a href="https://www.google.com" className="text-lg text-white flex flex-row items-center">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="ml-2">View Credential</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4">
                        <img src={HackerRankLogo} alt="HackerRankLogo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">Problem Solving (Basic) Certificate</div>
                        <div className="text-lg text-white my-2">HackerRank</div>
                        <div className="text-lg text-white mb-2">Issue September , 2021 - No expiration date</div>
                        <a href="https://www.google.com" className="text-lg text-white flex flex-row items-center">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="ml-2">View Credential</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4">
                        <img src={HackerRankLogo} alt="HackerRankLogo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">Problem Solving (Basic) Certificate</div>
                        <div className="text-lg text-white my-2">HackerRank</div>
                        <div className="text-lg text-white mb-2">Issue September , 2021 - No expiration date</div>
                        <a href="https://www.google.com" className="text-lg text-white flex flex-row items-center">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="ml-2">View Credential</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4">
                        <img src={HackerRankLogo} alt="HackerRankLogo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">Problem Solving (Basic) Certificate</div>
                        <div className="text-lg text-white my-2">HackerRank</div>
                        <div className="text-lg text-white mb-2">Issue September , 2021 - No expiration date</div>
                        <a href="https://www.google.com" className="text-lg text-white flex flex-row items-center">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="ml-2">View Credential</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4">
                        <img src={HackerRankLogo} alt="HackerRankLogo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">Problem Solving (Basic) Certificate</div>
                        <div className="text-lg text-white my-2">HackerRank</div>
                        <div className="text-lg text-white mb-2">Issue September , 2021 - No expiration date</div>
                        <a href="https://www.google.com" className="text-lg text-white flex flex-row items-center">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="ml-2">View Credential</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4">
                        <img src={HackerRankLogo} alt="HackerRankLogo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">Problem Solving (Basic) Certificate</div>
                        <div className="text-lg text-white my-2">HackerRank</div>
                        <div className="text-lg text-white mb-2">Issue September , 2021 - No expiration date</div>
                        <a href="https://www.google.com" className="text-lg text-white flex flex-row items-center">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="ml-2">View Credential</span>
                        </a>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
