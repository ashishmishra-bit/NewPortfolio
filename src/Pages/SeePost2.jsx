import React,{ useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// Component
import Sidebar from '../components/Sidebar'
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

                <div className="py-20 px-36" style={{ color: "#9A9A9A" }}>
                    <img src={"http://devclass.com/wp-content/uploads/2018/08/Tensorflow.jpg"} alt="BlogImage" style={{ width: "100%" }} />

                    <div className="Blog-Body -mt-20 p-20 mx-10">
                        <div className="Blog-Title mb-10">
                            Transfer learning with TensorFlow
                        </div>

                        <div className="flex flex-row items-center text-lg font-semibold">
                            <div className="w-1/2 flex flex-row items-center justify-end mr-3"><img src={profile} alt="profile" style={{ width: "20px" }} /> <span className="ml-3">Ashish Kumar Mishra</span> </div> |
                            <div className="w-1/2 flex flex-row items-center ml-3"><img src={Calander} alt="Calander" style={{ width: "20px" }} /> <span className="ml-3">Date - 21st Nov, 2021</span> </div>
                        </div>

                        <div className="text-xl px-16 text-justify my-10">
                            <h1 className="font-bold text-2xl text-white">A brief introduction to transfer learning</h1>
                            <div className="my-3 leading-10 text-lg">
                                <p className="pb-3">The most pervasive problems in machine learning are related to data: it can be either insufficient, or low-quality. One obvious solution to this set of problems is to acquire more and better data. However, these two often do not go together. We have to sacrifice quality for quantity or vice versa. Fortunately, there is a more innovative solution: transfer learning.</p>
                                <p className="pb-3">Transfer learning is a method of reusing an already trained model for another task. The original training step is called pre-training. The general idea is that, pre-training “teaches” the model more general features, while the latter final training stage “teaches” it features specific to our own (limited) data.</p>
                            </div>

                            <h1 className="font-bold text-2xl text-white mb-10">Tensorflow and Keras API</h1>
                            <div className="flex flex-col items-center">
                                <img src={"https://blog.keras.io/img/keras-tensorflow-logo.jpg"} alt="BlogImage2" style={{ width: "700px" }} />
                                <p className="text-sm font-semibold mt-1">Fig1 - Tensorflow and Keras</p>
                            </div>

                            <div className="my-3 leading-10 text-lg">
                                <p className="pb-3">TensorFlow is an end-to-end platform that enables building and deploying ML models. We are only interested in building models, not deploying them, and for that, we need to use Keras. Keras is an API designed for “human beings, not machines,” to quote themselves. That’s to say, Keras is designed for coders like us who want to build custom models. Its simple and easy-to-remember syntax makes it almost addictive.</p>
                                <p className="pb-3">While Keras API itself is available as a stand-alone Python library, it is also available as part of the TensorFlow library. Using tensorflow.keras is recommended over Keras itself, as it is maintained by the TensorFlow team, which ensures consistency with other TensorFlow modules.</p>
                            </div>
                        </div>                                              
                    </div>
                </div>

                {/* Other BLOG */}
                <div className="flex flex-row px-36 my-20">
                    <div className="w-1/2">
                        <img src={"https://thenfapost.com/wp-content/uploads/2021/03/ai.jpg"} alt="BlogImage" style={{ width: "550px" }} />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between" style={{ color: "#9A9A9A" }}>
                        <div className="text-lg">Date - 21st Nov , 2021</div>
                        <div className="text-2xl font-semibold my-2">Sentiment Analysis using Deep Learning</div>
                        <div className="text-lg my-2 text-justify">The growth of the internet due to social networks such as facebook, twitter, Linkedin,  instagram etc. has led to significant users interaction and has empowered users to express their opinions about products, services, events, their preferences among others. </div>
                        <Link to="/blogs/sentiment-analysis-using-deep-learning" className="text-lg" style={{ color: "#5AE86B" }}>Read More &#x21e8;</Link>
                    </div>
                </div>

                {/* FOOTER */}
                <Footer />
            </div>
        </div>
    )
}
