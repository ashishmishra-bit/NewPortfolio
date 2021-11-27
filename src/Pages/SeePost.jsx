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
                    <img src={BlogImage} alt="BlogImage" style={{width:"100%"}}  />

                    <div className="Blog-Body -mt-28 p-20 mx-10">
                        <div className="Blog-Title mb-10">
                            How To Store Sessions in MongoDB Using Express.Js
                        </div>

                        <div className="flex flex-row items-center text-lg font-semibold">
                            <div className="w-1/2 flex flex-row items-center justify-end mr-3"><img src={profile} alt="profile" style={{width:"20px" }} /> <span className="ml-3">Ashish Kumar Mishra</span> </div> |
                            <div className="w-1/2 flex flex-row items-center ml-3"><img src={Calander} alt="Calander" style={{width:"20px" }} /> <span className="ml-3">Date - 21st Nov, 2021</span> </div>
                        </div>

                        <div className="text-xl px-16 text-justify my-10">
                            Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity. Cloud Firestore also offers seamless integration with other Firebase and Google Cloud products, including Cloud Functions.
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={BlogImage2} alt="BlogImage2" style={{width:"400px"}} />
                            <p className="text-sm font-semibold">Fig 1  - HTML to GOOGLE SHEET</p>
                        </div>

                        <div className="text-xl px-16 text-justify my-10">
                            Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity. Cloud Firestore also offers seamless integration with other Firebase and Google Cloud products, including Cloud Functions.
                        </div>
                    </div>
                </div>

                {/* Other BLOG */}
                <div className="flex flex-row px-36 my-20">
                    <div className="w-1/2">
                        <img src={BlogImage} alt="BlogImage" style={{width:"550px"}} />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between" style={{color:"#9A9A9A"}}>
                        <div className="text-lg">Date - 21st Nov , 2021</div>
                        <div className="text-2xl font-semibold my-2">How To Store Sessions in MongoDB Using Express.Js</div>
                        <div className="text-lg my-2 text-justify">MongoDB is one of the very popular database used by many developers for different things. First step is to install mongoose package using npm (node package manager ) to access the MongoDB database –</div>
                        <Link to="/seeblogs" className="text-lg" style={{color:"#5AE86B"}}>Read More &#x21e8;</Link>
                    </div>
                </div>

                {/* FOOTER */}
                <Footer />
            </div>
        </div>
    )
}
