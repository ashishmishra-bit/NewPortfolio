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

                <div className="py-20 px-36" style={{ color: "#9A9A9A" }}>
                    <img src={"https://entrepreneurhandbook.co.uk/wp-content/uploads/2020/08/Web-development-2.0.jpg.webp"} alt="BlogImage" style={{ width: "100%" }} />

                    <div className="Blog-Body -mt-20 p-20 mx-10">
                        <div className="Blog-Title mb-10">
                            Getting Started with Web-Development
                        </div>

                        <div className="flex flex-row items-center text-lg font-semibold">
                            <div className="w-1/2 flex flex-row items-center justify-end mr-3"><img src={profile} alt="profile" style={{ width: "20px" }} /> <span className="ml-3">Ashish Kumar Mishra</span> </div> |
                            <div className="w-1/2 flex flex-row items-center ml-3"><img src={Calander} alt="Calander" style={{ width: "20px" }} /> <span className="ml-3">Date - 21st Nov, 2021</span> </div>
                        </div>

                        <div className="text-xl px-16 text-justify my-10">
                            <h1 className="font-bold text-2xl text-white">Introduction</h1>
                            <div className="my-3 leading-10 text-lg">
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
                                <h1 className="font-bold text-2xl text-white">Most Popular and used Front-End Technologies or Stack –</h1>
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
                                <h1 className="font-bold text-2xl text-white">Most Popular and used Back-End Technologies or Stack – –</h1>
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
                <div className="flex flex-row px-36 my-20">
                    <div className="w-1/2">
                        <img src={"https://blog.keras.io/img/keras-tensorflow-logo.jpg"} alt="BlogImage" style={{ width: "550px" }} />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between" style={{ color: "#9A9A9A" }}>
                        <div className="text-lg">Date - 21st Nov , 2021</div>
                        <div className="text-2xl font-semibold my-2">Transfer learning with TensorFlow</div>
                        <div className="text-lg my-2 text-justify">The most pervasive problems in machine learning are related to data: it can be either insufficient, or low-quality. One obvious solution to this set of problems is to acquire more and better data. However, these two often do not go together. We have to sacrifice quality for quantity or vice versa. </div>
                        <Link to="/blogs/transfer-learning-with-tensorflow" className="text-lg" style={{ color: "#5AE86B" }}>Read More &#x21e8;</Link>
                    </div>
                </div>

                {/* FOOTER */}
                <Footer />
            </div>
        </div>
    )
}
