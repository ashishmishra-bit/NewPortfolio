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
                    <img src={"https://www.euractiv.com/wp-content/uploads/sites/2/2021/07/AI-800x450.jpg"} alt="BlogImage" style={{ width: "100%" }} />

                    <div className="Blog-Body -mt-20 p-20 mx-10">
                        <div className="Blog-Title mb-10">
                        Sentiment Analysis using Deep Learning
                        </div>

                        <div className="flex flex-row items-center text-lg font-semibold">
                            <div className="w-1/2 flex flex-row items-center justify-end mr-3"><img src={profile} alt="profile" style={{ width: "20px" }} /> <span className="ml-3">Ashish Kumar Mishra</span> </div> |
                            <div className="w-1/2 flex flex-row items-center ml-3"><img src={Calander} alt="Calander" style={{ width: "20px" }} /> <span className="ml-3">Date - 21st Nov, 2021</span> </div>
                        </div>

                        <div className="text-xl px-16 text-justify my-10">
                            <h1 className="font-bold text-2xl text-white">Introduccction</h1>
                            <div className="my-3 leading-10 text-lg">
                                <p className="pb-3">The growth of the internet due to social networks such as facebook, twitter, Linkedin,  instagram etc. has led to significant users interaction and has empowered users to express their opinions about products, services, events, their preferences among others. It has also provided opportunities to the users to share their wisdom and experiences with each other. The faster development of social networks is causing explosive growth of digital content. It has turned online opinions, blogs, tweets, and posts into a very valuable asset for the corporates to get insights from the data and plan their strategy. </p>
                                <p className="pb-3">Traditional approach to manually extract complex features, identify which feature is relevant, and derive the patterns from this huge information is very time consuming and require significant human efforts. However, Deep Learning can exhibit excellent performance via Natural Language Processing (NLP) techniques to perform sentiment analysis on this massive information. The core idea of Deep Learning techniques is to identify complex features extracted from this vast amount of data without much external intervention using deep neural networks. These algorithms automatically learn new complex features. Both automatic feature extraction and availability of resources are very important when comparing the traditional machine learning approach and deep learning techniques(Araque et al., 2017).  Here the goal is to classify the opinions and sentiments expressed by users. In this article, we will discuss about various sentiment analysis techniques and several ensemble models to aggregate the information from multiple features.</p>
                            </div>

                            <h1 className="font-bold text-2xl text-white mb-10">Sentiment analysis</h1>
                            <div className="flex flex-col items-center">
                                <img src={"https://storage.ning.com/topology/rest/1.0/file/get/7316024065?profile=original"} alt="BlogImage2" style={{ width: "700px" }} />
                                <p className="text-sm font-semibold mt-1">Fig1 - Tensorflow and Keras</p>
                            </div>

                            <div className="my-3 leading-10 text-lg">
                                <p className="pb-3">It is a set of techniques / algorithms used to detect the sentiment (positive, negative, or neutral) of a given text. It is a very powerful application of natural language processing (NLP) and finds usage in a large number of industries. It refers to the use of NLP, text analysis, computational linguistics, and biometrics to systematically identify, extract, quantify, study different states and subjective information. The sentiment analysis sometimes goes beyond the categorization of texts to find opinions and categorizes them as positive or negative, desirable or undesirable. Below figure describes the architecture of sentiment classification on texts. </p>                                
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
