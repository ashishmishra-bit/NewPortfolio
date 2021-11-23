import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import javaScript from "../icons/javaScript.svg"
import cross from "../icons/cross.svg"
import html from "../icons/html.svg"
import css from "../icons/css.svg"
import { Link } from 'react-router-dom'
import '../css/Projects.css'
import ProjectBackgroundTwo from '../images/ProjectBackgroundTwo.png'


const ProjectModal = ({modalIsOpen , setModalIsOpen}) => {
    const modalRef = useRef();
    const animation = useSpring({
        config: {
          duration: 250
        },
        opacity: modalIsOpen ? 1 : 0,
        transform: modalIsOpen ? `translateY(0%)` : `translateY(-100%)`
      });
    
      const closeModal = e => {
        if (modalRef.current === e.target) {
            setModalIsOpen(false);
        }
      };
    
      const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && modalIsOpen) {
            setModalIsOpen(false);
            console.log('I pressed');
          }
        },
        [setModalIsOpen, modalIsOpen]
      );
    
    return (
        <div>
        {/* <Modal */}
        {modalIsOpen ? <div className="ModalBackground Project-about flex flex-row justify-center">
        
        <div className="w-1/2 pr-10">
        <div className="h-1/2">
            <img src={ProjectBackgroundTwo} alt="{ProjectBackgroundTwo}" style={{height:"100%",width:"100%",borderBottomRightRadius:"120px"}} />
        </div>
        <div className="h-1/2">
            <div className="TechStack-SubHeading mt-10">TECH STACK</div>
            <div className="flex flex-row mt-5 justify-center ">
                <img src={javaScript} alt="javaScript" style={{width:"40px",height:"40px"}} />
                <img src={html} alt="html" className="ml-5" style={{width:"40px",height:"40px"}} />
                <img src={css} alt="css" className="ml-5" style={{width:"40px",height:"40px"}} />
            </div>
        </div>
    </div>
    <div className="w-1/2 flex flex-col justify-between">
        <div className="flex justify-end px-5 mt-5">
            <button onClick={()=> setModalIsOpen(false)} className="cursor-pointer">
            <img src={cross} alt="cross" style={{width:"25px"}} />
            </button>
        </div>
        <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. </div>
        <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. </div>
        <div className="text-white text-base px-5 text-justify" style={{color:"#B5B4B4"}}>I am responsible for making projects on the above mentioned domains and helping others in the club with the same. </div>
        <div className="flex flex-row justify-evenly my-10">
            <a href="https://github.com" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">View Demo</a>
            <a href="https://github.com" className="px-6 py-2 bg-white rounded-lg text-lg font-semibold">Get Code <i class="fab fa-github"></i></a>
        </div>
    </div>
       
    </div> : null}
        </div>
    )
}

export default ProjectModal
