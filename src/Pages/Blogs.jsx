import React from 'react'
import { Link } from 'react-router-dom'
import BlogImage from '../images/BlogImage.png'
import BlogImage2 from '../images/BlogImage2.png'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import '../css/Blogs.css'
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

export default function Blogs() {
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
              width={900}
              height={1000}
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
            &#64;Ashish_Blogs
            </text>        
            
      </motion.svg>
      </motion.div>
            <Sidebar />
            <div className="home-section pb-20">
                {/* HEADING SECTION */}
                <div className="blogs-header flex flex-row">
                
                    <div className="blogs-Heading-text flex ml-10 md:ml-20 items-center">THE <br className=" hidden md:block" /> BLOGS</div>
                    
                </div>

                <div className="flex flex-col md:flex-row px-5 md:px-36">
                    <div className="md:w-1/2">
                        <img src={BlogImage} alt="BlogImage" style={{width:"550px"}} />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-between" style={{color:"#9A9A9A"}}>
                        <div className="text-lg">Date - 21st Nov , 2021</div>
                        <div className="text-2xl font-semibold my-2">How To Store Sessions in MongoDB Using Express.Js</div>
                        <div className="text-lg my-2 text-justify">MongoDB is one of the very popular database used by many developers for different things. First step is to install mongoose package using npm (node package manager ) to access the MongoDB database –</div>
                        <Link to="/seeblogs" className="text-lg" style={{color:"#5AE86B"}}>Read More &#x21e8;</Link>
                    </div>
                </div>

                <div className="px-5 md:px-36 flex flex-col md:flex-row my-16 md:my-28">

                    <div className="flex flex-col">
                        <div>
                            <img src={BlogImage2} alt="BlogImage2" style={{width:"550px"}} />
                        </div>
                        <div className="flex flex-col justify-between " style={{color:"#9A9A9A"}}>
                            <div className="text-lg mt-5">Date - 21st Nov , 2021</div>
                            <div className="text-2xl font-semibold my-2">How To Store Sessions in MongoDB Using Express.Js</div>
                            <div className="text-lg my-2 text-justify md:mr-20">MongoDB is one of the very popular database used by many developers for different things. First step is to install mongoose package using npm (node package manager ) to access the MongoDB database –</div>
                            <Link to="/seeblogs" className="text-lg" style={{color:"#5AE86B"}}>Read More &#x21e8;</Link>
                        </div>
                    </div>

                    <div className="flex flex-col mt-16 md:mt-0">
                        <div>
                            <img src={BlogImage2} alt="BlogImage2" style={{width:"550px"}} />
                        </div>
                        <div className="flex flex-col justify-between " style={{color:"#9A9A9A"}}>
                            <div className="text-lg mt-5">Date - 21st Nov , 2021</div>
                            <div className="text-2xl font-semibold my-2">How To Store Sessions in MongoDB Using Express.Js</div>
                            <div className="text-lg my-2 text-justify md:mr-20">MongoDB is one of the very popular database used by many developers for different things. First step is to install mongoose package using npm (node package manager ) to access the MongoDB database –</div>
                            <Link to="/seeblogs" className="text-lg" style={{color:"#5AE86B"}}>Read More &#x21e8;</Link>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row px-5 md:px-36">
                    <div className="md:w-1/2">
                        <img src={BlogImage} alt="BlogImage" style={{width:"550px"}} />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-between" style={{color:"#9A9A9A"}}>
                        <div className="text-lg">Date - 21st Nov , 2021</div>
                        <div className="text-2xl font-semibold my-2">How To Store Sessions in MongoDB Using Express.Js</div>
                        <div className="text-lg my-2 text-justify">MongoDB is one of the very popular database used by many developers for different things. First step is to install mongoose package using npm (node package manager ) to access the MongoDB database –</div>
                        <Link to="/seeblogs" className="text-lg" style={{color:"#5AE86B"}}>Read More &#x21e8;</Link>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
