import React from 'react'
import '../css/Achievements.css'
import AchievementsHeader from '../images/AchievementsHeader.png'
import HackerRankLogo from '../images/HackerRankLogo.png'
import credentials from '../icons/credentials.png'
import problemSolvingBadge from '../icons/problemSolvingBadge.png'
import DaysOfCodingBadge from '../icons/30DaysOfCodingBadge.png'
import star from '../icons/star.svg'
import CppBadge from '../icons/CppBadge.png'
import JavaBadge from '../icons/JavaBadge.png'
import LeetcodeLogo from '../icons/LeetcodeLogo.png'
// import CodeChiefLogo from '../icons/CodeChiefLogo.png'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Coursera from '../images/coursera.png'
import Eudonix from '../images/eudonix.png'
import Udemy from '../images/udemy.png'
import Dp from '../icons/DP.png'
import Ds from '../icons/DS.png'
import Algo from '../icons/algo.png'
import Algo2 from '../icons/algo2.png'
import Navbar from '../components/Navbar'
import Certificates from '../components/Certificates'
import { motion } from 'framer-motion'
import resumeDetails from '../JsonData/resumeDetails'
import Particles from 'particles-bg'

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


export default function Achievements() {
    return (
        <div>
        <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        variants={box}
      >
          <motion.svg variants={textContainer}  className="absolute z-50 flex">
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width={1000}
              height={900}
              className="text-white"
            >
              <rect className="w-full h-full fill-current" />
              <motion.rect variants={text} className="w-full h-full text-gray-600 fill-current" />
            </pattern>
            <text
              className="text-3xl font-bold"
              text-anchor="middle"
              x="50%"
              y="50%"
              style={{ fill: "url(#pattern)" }}
            >
            &#64;Ashish_Archive 
            </text>        
            
      </motion.svg>
      </motion.div>
            <Sidebar />
            <div className="home-section pb-20">
                <Navbar />
                <Particles color="#48CAE4" num={300} type="cobweb" bg={true} />

                {/* HEADING SECTION */}
                <div className="achivements-header flex flex-col-reverse md:flex-row px-5 md:px-0">
                    <div className="achivements-Heading-text md:w-1/2 flex md:ml-20 items-center">“ Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away ! ! ! ”</div>
                    <div className="achivements-Heading-image md:w-1/2 flex justify-center items-center">
                        <img src={AchievementsHeader} alt="AchievementsHeader" />
                    </div>
                </div>

                {/* BODY SECTION */}
                <div className="achivements-Title-Heading text-center mb-10 uppercase">Achievements</div>

                {/* COMPETETIVE PROGRAMMING ACHIVEMENT */}
                <div className="flex flex-col md:flex-row justify-center items-center md:space-between md:mx-28 mb-16" style={{color:"#979797"}}>
                    {/* HACKERRANK CARD */}
                    <div className="competetive-card md:mx-10">
                        <div className="flex flex-row items-center">
                            <img src={HackerRankLogo} alt="HackerRankLogo" style={{width:"40px",height:"40px"}} />
                            <a href="https://www.hackerrank.com/ashish_mishra521" target="_blank"><span className="text-lg font-semibold ml-5">HackerRank</span></a>
                        </div>

                        <p  className="text-lg font-semibold mt-5 mb-2">Badges</p>
                        <div className="flex flex-row ">
                            <img src={problemSolvingBadge} alt="problemSolvingBadge" style={{width:"65px",height:"55px"}} />
                            <img src={CppBadge} alt="CppBadge" className="ml-3" style={{width:"65px",height:"55px"}} />
                            <img src={JavaBadge} alt="JavaBadge" className="ml-3" style={{width:"65px",height:"55px"}} />
                            <img src={DaysOfCodingBadge} alt="DaysOfCodingBadge" className="ml-3" style={{width:"65px",height:"55px"}} />
                        </div>

                        <p  className="text-lg font-semibold mt-5 mb-2">Certificates</p>
                        <a href="https://www.hackerrank.com/certificates/2d7d83a79116" className="text-lg flex flex-row items-center" target="_blank">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="text-base ml-2">Problem Solving (Basic) Certificate</span>
                        </a>
                        <a href="https://www.hackerrank.com/certificates/2d7d83a79116" className="text-lg flex flex-row items-center mt-2" target="_blank">
                            <img src={credentials} alt="credentials" style={{width:"20px",height:"20px"}} />
                            <span className="text-base ml-2">Problem Solving (Intermediate) Certificate</span>
                        </a>
                    </div>

                    {/* LEETCODE CARD */}
                    <div className="competetive-card mt-5 md:mt-0">
                        <div className="flex flex-row items-center">
                            <img src={LeetcodeLogo} alt="LeetcodeLogo" style={{width:"40px",height:"40px"}} />
                            <div className="flex flex-col ml-5">
                                <a href="https://leetcode.com/tragic69/" target="_blank"><span className="text-lg font-semibold ">Leetcode</span></a>
                                <div className="flex flex-row">
                                    <img src={star} alt="star" style={{width:"15px",height:"15px"}} />
                                    <img src={star} alt="star" className="ml-1" style={{width:"15px",height:"15px"}} />
                                    <img src={star} alt="star" className="ml-1" style={{width:"15px",height:"15px"}} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row justify-around items-center my-3">
                            <div className="flex flex-row items-center text-3xl">
                                3
                                <img src={star} alt="star" className="ml-1" style={{width:"15px",height:"15px"}} />
                            </div>

                            <div className="Divide-Line"></div>

                            <div className="flex flex-col">
                                <span className="text-lg mb-2">Highest Rating</span>
                                <div className="flex flex-row justify-center text-black font-semibold">
                                    <div className="Rating" >1</div>
                                    <div className="Rating ml-2">5</div>
                                    <div className="Rating ml-2">2</div>
                                    <div className="Rating ml-2">8</div>
                                </div>
                            </div>
                        </div>

                        <p  className="text-lg font-semibold mt-5 mb-2 ">Badges</p>
                        <div className="flex flex-row ">
                        <img src={Dp} alt="problemSolvingBadge" style={{width:"66px",height:"66px"}} />
                        <img src={Ds} alt="CppBadge" className="ml-3" style={{width:"66px",height:"66px"}} />
                        <img src={Algo} alt="JavaBadge" className="ml-3" style={{width:"66px",height:"66px"}} />
                        <img src={Algo2} alt="DaysOfCodingBadge" className="ml-3" style={{width:"66px",height:"66px"}} />
                        </div>

                        <p className="text-lg text-center font-semibold mt-5 ">250+ Question Solved</p>

                    </div>

                    {/* CODECHIEF CARD */}
                    {/* 
                        <div className="competetive-card">
                        <div className="flex flex-row items-center">
                            <img src={CodeChiefLogo} alt="CodeChiefLogo" style={{width:"40px",height:"40px"}} />
                            <div className="flex flex-col ml-5">
                                <span className="text-lg font-semibold ">Codechief</span>
                                <div className="flex flex-row">
                                    <img src={star} alt="star" style={{width:"15px",height:"15px"}} />
                                    <img src={star} alt="star" className="ml-1" style={{width:"15px",height:"15px"}} />
                                    <img src={star} alt="star" className="ml-1" style={{width:"15px",height:"15px"}} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row justify-around items-center my-3">
                            <div className="flex flex-row items-center text-3xl">
                                3
                                <img src={star} alt="star" className="ml-1" style={{width:"15px",height:"15px"}} />
                            </div>

                            <div className="Divide-Line"></div>

                            <div className="flex flex-col">
                                <span className="text-lg mb-2">Highest Rating</span>
                                <div className="flex flex-row justify-center text-black font-semibold">
                                    <div className="Rating" >1</div>
                                    <div className="Rating ml-2">5</div>
                                    <div className="Rating ml-2">2</div>
                                    <div className="Rating ml-2">8</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row justify-around items-center mt-8">
                            <div className="flex flex-col">
                                <div className="flex flex-row justify-center text-black font-semibold">
                                    <div className="Rating" >1</div>
                                    <div className="Rating ml-2">5</div>
                                    <div className="Rating ml-2">2</div>
                                    <div className="Rating ml-2">8</div>
                                </div>
                                <span className="text-base mt-2">Global Rating</span>
                            </div>

                            <div className="Divide-Line" style={{height:"55px"}}></div>

                            <div className="flex flex-col">
                                <div className="flex flex-row justify-center text-black font-semibold">
                                    <div className="Rating" >1</div>
                                    <div className="Rating ml-2">5</div>
                                    <div className="Rating ml-2">2</div>
                                    <div className="Rating ml-2">8</div>
                                </div>
                                <span className="text-base mt-2">Country Rating</span>
                            </div>
                        </div>


                        <p className="text-lg text-center font-semibold mt-5">250+ Question Solved</p>

                    </div>
                        
                    */}
                    
                    
                </div>

                <div className="achivements-Title-Heading text-center mb-10 uppercase">Certifications</div>
                
                
                {resumeDetails.certifications.map((certificates) =>{
                    return(
                        <>
                        <Certificates 
                        imgUrl = {certificates.imgUrl}
                        title={certificates.title}
                        organization={certificates.organization}
                        date={certificates.date}
                        link={certificates.link}       
                        /> 
                        </>
                    )
                })}              

            </div>
            <Footer />
        </div>
    )
}
