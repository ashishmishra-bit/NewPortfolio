import React from 'react'
import '../css/Achievements.css'
import AchievementsHeader from '../images/AchievementsHeader.png'
import HackerRankLogo from '../images/HackerRankLogo.png'
import credentials from '../icons/credentials.png'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Coursera from '../images/coursera.png'
import Eudonix from '../images/eudonix.png'
import Udemy from '../images/udemy.png'

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
                        <div className="description text-lg my-2">HackerRank</div>
                        <div className=" description text-lg  mb-2">Issue September , 2021 - No expiration date</div>
                        <a href="https://www.hackerrank.com/certificates/2d7d83a79116" className="text-lg text-white flex flex-row items-center" target="_blank">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className=" description ml-2">View Credential</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4">
                        <img src={HackerRankLogo} alt="HackerRankLogo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">Problem Solving (Intermediate) Certificate</div>
                        <div className="description text-lg  my-2">HackerRank</div>
                        <div className="description text-lg mb-2">Issue September , 2021 - No expiration date</div>
                        <a href="https://www.hackerrank.com/certificates/d682e68f64f8" className="text-lg text-white flex flex-row items-center" target="_blank">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="description  ml-2">View Credential</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4">
                        <img src={Eudonix} alt="Eudonix Logo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">Socket Programming</div>
                        <div className="description text-lg my-2">Eduonix Learning Solutions Pvt Ltd</div>
                        <div className="text-lg description  mb-2">Issued August , 2021 - No expiration date</div>
                        <a href="https://www.eduonix.com/certificate/2cc7d367ae" className="text-lg text-white flex flex-row items-center" target="_blank">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="description  ml-2">View Credential</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4 ">
                        <img src={Coursera} alt="Coursera Logo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">AWS Fundamentals: Going Cloud-Native</div>
                        <div className="description text-lg my-2">Coursera</div>
                        <div className="description text-lg mb-2">Issue June , 2020 - No expiration date</div>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/E4DSTYJMXKUJ" className="text-lg text-white flex flex-row items-center" target="_blank">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="description ml-2">View Credential</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4">
                        <img src={Udemy} alt="Udemy Logo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">Complete Machine Learning</div>
                        <div className="description text-lg my-2">Udemy</div>
                        <div className="text-lg description  mb-2">Issue April , 2020 - No expiration date</div>
                        <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-0ed139a0-4c15-4742-a97e-1fd3750a9bb5.pdf" className="text-lg text-white flex flex-row items-center" target="_blank">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="description ml-2">View Credential</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4">
                        <img src={Coursera} alt="Coursera Logo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">SEO Fundamentals</div>
                        <div className="text-lg description  my-2">Coursera</div>
                        <div className="text-lg description  mb-2">Issue July , 2020 - No expiration date</div>
                        <a href="https://www.coursera.org/account/accomplishments/verify/3S2BWL95EQMN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" className="text-lg text-white flex flex-row items-center" target="_blank">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="description ml-2">View Credential</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4">
                        <img src={Coursera} alt="Coursera Logo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">Introduction to Search Engine Optimisation</div>
                        <div className="text-lg description  my-2">Coursera</div>
                        <div className="text-lg description  mb-2">Issue June , 2020 - No expiration date</div>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/TGWSGCSH7RNT" className="text-lg text-white flex flex-row items-center" target="_blank">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="description ml-2">View Credential</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-row mx-28 mt-20">
                    <div className="w-1/4">
                        <img src={Coursera} alt="Coursera Logo" style={{width:"200px"}} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center">
                        <div className="text-5xl text-white">Fundamentals Of Graphics Design</div>
                        <div className="text-lg description  my-2">Coursera</div>
                        <div className="text-lg description  mb-2">Issue July , 2020 - No expiration date</div>
                        <a href="https://www.coursera.org/account/accomplishments/certificate/4AQ2KAANT7ML" className="text-lg text-white flex flex-row items-center" target="_blank">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="description ml-2">View Credential</span>
                        </a>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
