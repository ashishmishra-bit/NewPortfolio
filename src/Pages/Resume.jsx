import React, { useEffect } from 'react';
import { motion } from 'framer-motion'
import Particles from 'particles-bg'

// Components
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

// CSS
import '../css/Landing.css'
// Animation Imports
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
  duration: 2000,
  delay: 5000,
  easing: 'ease-in-out',
});
AOS.refresh();

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

const Resume = () => {

    // const [embedUrl] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="landing">
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
        {/* HEADING SECTION */}
        <div className="Landing-header">
          <Navbar />
          <Particles color="#48CAE4" type="cobweb" />
          <iframe src="https://drive.google.com/file/d/1Qc4qTMvhCpzsmhjBmvnt6lOfmV7IPqw9/preview" width="640" height="480" allow="autoplay"></iframe>

        </div>       
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
