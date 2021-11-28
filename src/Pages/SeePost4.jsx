import React,{ useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// Component
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// Icons
import profile from '../icons/profile.svg'
import Calander from '../icons/Calander.svg'
// CSS
import '../css/SeePost.css'

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
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div>
            <motion.div
                className="absolute z-50 flex items-center justify-center w-full bg-black"
                initial="initial"
                animate="animate"
                variants={box}
            >
                <motion.svg variants={textContainer} className="absolute z-50 flex">
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
                <Navbar />
                <div className="py-20 px-5 md:px-36" style={{ color: "#9A9A9A" }}>
                    <img src={"https://entrepreneurhandbook.co.uk/wp-content/uploads/2020/08/Web-development-2.0.jpg.webp"} alt="BlogImage" style={{ width: "100%" }} />

                    <div className="Blog-Body -mt-20 md:p-20 md:mx-10">
                        <div className="Blog-Title pt-5 md:pt-0 mb-10">
                            Getting Started with Web-Development
                        </div>

                        <div className="flex flex-col md:flex-row items-center text-lg font-semibold">
                            <div className="md:w-1/2 flex flex-row items-center justify-end md:mr-3"><img src={profile} alt="profile" style={{ width: "20px" }} /> <span className="ml-3">Ashish Kumar Mishra</span> </div> <span className="hidden md:block">|</span>
                            <div className="md:w-1/2 flex flex-row items-center md:ml-3 mt-5 md:mt-0"><img src={Calander} alt="Calander" style={{ width: "20px" }} /> <span className="ml-3">Date - 21st Nov, 2021</span> </div>
                        </div>

                        <div className="px-5 md:px-16 text-justify my-10">
                            <h1 className="font-bold text-xl md:text-2xl text-white">Introduction</h1>
                            <div className="my-3 leading-10 text-base md:text-lg">
                                <p className="pb-3">Building and maintaining the website is called WEB-DEVELOPMENT .The term Development is the process that goes behind the scenes to make such beautiful , efficient and optimized website.Web-development can be categorized into three parts – </p>

                                <div className="px-5 my-3 leading-10">
                                    <ul><span className="text-white">&#9737;</span> Front-End Development – Front-End Development is all about the look and feel about the website. Many people find interest in doing front-end development and its one of the high paid job in the market.</ul>
                                </div>
                            </div>

                            
                            <div className="flex flex-col items-center">
                                <img src={"https://miro.medium.com/max/750/1*3T7J7csXY8u36acofw5N8g.jpeg"} alt="BlogImage2" style={{ width: "700px" }} />
                                <p className="text-sm font-semibold mt-1">Fig1 - Web Development</p>
                            </div>

                            <div className="my-3 leading-10 text-lg">
                                <h1 className="font-bold text-2xl text-white mt-10">Most Popular and used Front-End Technologies or Stack –</h1>
                                • Html
                                • Css
                                • Scss
                                • Tailwind Css
                                • Bootstrap
                                • Javascript
                                • React.Js
                                • Next.Js
                                • Flask(Python)
                                • Three.Js
                                <h1 className="font-bold text-2xl text-white mt-10">Most Popular and used Back-End Technologies or Stack – –</h1>
                                • Node.js
                                • Backbone.js
                                • Django(Python)
                                • GoLang(Taking growth in market)
                                • Php
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other BLOG */}
                <div className="flex flex-col md:flex-row px-5 md:px-36 mb-20">
                    <Link to="/blogs/how-to-store-sessions-in-mongo-db-using-express.Js" className="md:w-1/2">
                        <img src={"https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"} alt="BlogImage" style={{ width: "550px" }, { borderRadius: "31px" }} />
                    </Link>
                    <div className="md:w-1/2 flex flex-col justify-between md:ml-10" style={{ color: "#9A9A9A" }}>
                        <div className="text-lg mt-5 md:mt-0">Date - 21st jan , 2021</div>
                        <Link to="/blogs/how-to-store-sessions-in-mongo-db-using-express.Js"><div className="text-2xl font-semibold my-2">How To Store Sessions in MongoDB Using Express.Js</div></Link>
                        <div className="text-lg my-2 text-justify">MongoDB is one of the very popular database used by many developers for different things. First step is to install mongoose package using npm (node package manager ) to access the MongoDB database –</div>

                        <Link to="/blogs/how-to-store-sessions-in-mongo-db-using-express.Js" className="text-lg" style={{ color: "#5AE86B" }}>Read More &#x21e8;</Link>
                    </div>
                </div>

                {/* FOOTER */}
                <Footer />
            </div>
        </div>
    )
}
