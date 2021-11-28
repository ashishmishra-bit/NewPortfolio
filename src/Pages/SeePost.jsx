import React from 'react'
import { Link } from 'react-router-dom'
import BlogImage from '../images/BlogImage.png'
import BlogImage2 from '../images/BlogImage2.png'
import profile from '../icons/profile.svg'
import Calander from '../icons/Calander.svg'
import Sidebar from '../components/Sidebar'
import '../css/SeePost.css'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import MongoDB from '../images/mongodb.png'
import SeePost2 from '../Pages/SeePost2'

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

export default function SeePost() {
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
              width={750}
              height={800}
              className="text-white"
            >
              <rect className="w-full h-full fill-current" />
              <motion.rect variants={text} className="w-full h-full text-gray-600 fill-current" />
            </pattern>
            <text
              className="text-4xl font-bold"
              text-anchor="middle"
              x="50%"
              y="50%"
              style={{ fill: "url(#pattern)" }}
            >
            &#64;Ashish Mishra 
            </text>        
            
      </motion.svg>
      </motion.div>
            <Sidebar />
            <div className="home-section">

                <div className="py-20 px-36" style={{color:"#9A9A9A"}}>
                    <img src={MongoDB} alt="BlogImage" style={{width:"100%"}}  />

                    <div className="Blog-Body -mt-28 p-20 mx-10">
                        <div className="Blog-Title mb-10">
                            How To Store Sessions in MongoDB Using Express.Js
                        </div>

                        <div className="flex flex-row items-center text-lg font-semibold">
                            <div className="w-1/2 flex flex-row items-center justify-end mr-3"><img src={profile} alt="profile" style={{width:"20px" }} /> <span className="ml-3">Ashish Kumar Mishra</span> </div> |
                            <div className="w-1/2 flex flex-row items-center ml-3"><img src={Calander} alt="Calander" style={{width:"20px" }} /> <span className="ml-3">Date - 21st Nov, 2021</span> </div>
                        </div>

                        <div className="text-xl px-16 text-justify my-10">
                          <h1 className="font-bold text-2xl text-white">Session -</h1>
                          <div className="px-5 my-3 leading-10">
                          <ul><span className="text-white">&#9737;</span> Sessions are server side file that contains user information.</ul>
                          <ul><span className="text-white">&#9737;</span>  Session are not stored in user’s browsers unlike cookies..</ul>
                          <ul><span className="text-white">&#9737;</span> As soon as you close your browser you will loose your session , i.e user data will be deleted .</ul>
                          <ul><span className="text-white">&#9737;</span> It stores our objects in sessions .</ul>
                          </div>

                          <h1 className="font-bold text-2xl text-white">Cookies – </h1>
                          <div className="px-5 my-3 leading-10">
                          <ul><span className="text-white">&#9737;</span> Cookies are Client-side files that conatins user information .</ul>
                          <ul><span className="text-white">&#9737;</span>  Cookies are stored in user’s browser .</ul>
                          <ul><span className="text-white">&#9737;</span> Cookies save your data in your browser until you delete that , but we can set cookies lifetime after which it will expire.</ul>
                          <ul><span className="text-white">&#9737;</span> Cookies can only store strings.</ul>
                          </div>
                          MongoDB is one of the very popular database used by many developers for different things .
                          <div className="px-5 my-3 leading-8 text-lg">
                            <ul> <span className="text-white px-3">&#9737;</span>First step is to install mongoose package using npm (node package manager ) to access the MongoDB database –</ul>
                            <ul> <span className="text-white px-3">&#9737;</span>Second step is to install the connect-mongo & sessionpackage using npm –</ul>
                            <ul> <span className="text-white px-3">&#9737;</span>Now in server.js we will have to import these package to use it</ul>
                          </div>
                         
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={"https://letscodee.com/wp-content/uploads/2021/06/1.png"} alt="BlogImage2" style={{width:"700px"}} />
                            <p className="text-sm font-semibold mt-1">Fig1 - Server.js</p>
                        </div>

                        <div className="text-xl px-16 text-justify my-10">
                        <div className="px-5 my-3 leading-8 text-lg">
                            <ul> <span className="text-white px-3">&#9737;</span>Now we will connect the MongoDB with our App –</ul>                           
                          </div>                            
                        </div>

                        <div className="flex flex-col items-center">
                        <img src={"https://letscodee.com/wp-content/uploads/2021/06/2.png"} alt="BlogImage2" style={{width:"700px"}} />
                        <p className="text-sm font-semibold mt-1">Fig2 - Server.js (Connect The App)</p>
                    </div>

                        <div className="text-xl px-16 text-justify my-10">
                        <div className="px-5 my-3 leading-8 text-lg">
                            <ul> <span className="text-white px-3">&#9737;</span>Now we have to do session configuration –</ul>                           
                          </div>                            
                        </div>

                        <div className="flex flex-col items-center">
                        <img src={"https://letscodee.com/wp-content/uploads/2021/06/3.png"} alt="BlogImage2" style={{width:"700px"}} />
                        <p className="text-sm font-semibold mt-1">Fig3 - Server.js (session Configuration)</p>
                    </div>
                    </div>
                </div>

                {/* Other BLOG */}
                <div className="flex flex-row px-36 my-20">
                    <div className="w-1/2">
                        <img src={"https://thenfapost.com/wp-content/uploads/2021/03/ai.jpg"} alt="BlogImage" style={{width:"550px"}} />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between" style={{color:"#9A9A9A"}}>
                        <div className="text-lg">Date - 21st Nov , 2021</div>
                        <div className="text-2xl font-semibold my-2">Sentiment Analysis using Deep Learning</div>
                        <div className="text-lg my-2 text-justify">he growth of the internet due to social networks such as facebook, twitter, Linkedin,  instagram etc. has led to significant users interaction and has empowered users to express their opinions about products, services, events, their preferences among others. </div>
                        <Link to="/blogs/sentiment-analysis-using-deep-learning" target="_blank" className="text-lg" style={{color:"#5AE86B"}}>Read More &#x21e8;</Link>
                    </div>
                </div>

                {/* FOOTER */}
                <Footer />
            </div>
        </div>
    )
}
