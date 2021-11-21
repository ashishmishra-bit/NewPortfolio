import React from 'react'
import "../css/TechAndTools.css"
import react from "../icons/react.png"
import javaScript from "../icons/javascript.gif"
import expressjs from "../icons/expressjs.png"
import next from "../icons/next.png"
import bootstrap from "../icons/bootstrap.png"
import sass from "../icons/sass.png"
import Tailwindcss from "../icons/tailwindcss.svg";
import wordpress from "../icons/wordpress.gif";
import Nodejs from "../icons/nodejs.png"
import firebase from "../icons/firebase.png"
import mysql from "../icons/mysql.png"
import mongodb from "../icons/mongodb.png"
import c from "../icons/c.png"
import CPlus from "../icons/CPlus.png"
import python from "../icons/python.gif"
import Django from "../icons/django.svg"
import adobeXD from "../icons/adobeXD.png"
import figma from "../icons/figma.png"
import Java from "../icons/java.gif"
import PHP from "../icons/php.svg"
import postgresql from "../icons/postgresql.svg"
import oracle from "../icons/oracle.svg"
import photoshop from "../icons/photoshop.svg"
import illustrator from "../icons/illustrator.gif"
import afterEffect from "../icons/after-effects.gif"

export default function TechAndTools() {
    return (
        <div className="px-24 py-16">

            <div className="Landing-Heading TechAndTools-Heading text-center mb-10">TECH & TOOLS</div>
            
            <div className="flex flex-row mt-20">
                <div className="w-1/2 TechAndTools-SubHeading">FRONT-END</div>
                <div className="w-1/2 flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="maze " style={{backgroundImage:`url(${next})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${react})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${sass})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${Tailwindcss})`}}></div>
                    </div>
                    <div className="flex flex-row justify-center -mt-5">
                        <div className="maze" style={{backgroundImage:`url(${bootstrap})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${javaScript})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${wordpress})`}}></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse my-40">
                <div className="w-1/2 TechAndTools-SubHeading">BACK-END</div>
                <div className="w-1/2 flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="maze" style={{backgroundImage:`url(${Nodejs})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${expressjs})`,backgroundSize:"90px"}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${Django})`,backgroundSize:"90px"}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${Java})`,backgroundSize:"90px"}}></div>
                        
                    </div>
                    <div className="flex flex-row justify-center -mt-5">
                    <div className="maze ml-1" style={{backgroundImage:`url(${firebase})`,backgroundSize:"90px"}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${PHP})`,backgroundSize:"90px"}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${python})`,backgroundSize:"90px"}}></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2 TechAndTools-SubHeading">DATABASES</div>
                <div className="w-1/2 flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="maze" style={{backgroundImage:`url(${firebase})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${mysql})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${mongodb})`}}></div>
                    </div>
                    <div className="flex flex-row justify-center -mt-5">
                    <div className="maze ml-1" style={{backgroundImage:`url(${postgresql})`}}></div>
                    <div className="maze ml-1" style={{backgroundImage:`url(${oracle})`}}></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse my-40">
                <div className="w-1/2 TechAndTools-SubHeading">LANGUAGES</div>
                <div className="w-1/2 flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="maze" style={{backgroundImage:`url(${c})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${CPlus})`,backgroundSize:"80px"}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${python})`,backgroundSize:"60px"}}></div>
                    </div>
                    <div className="flex flex-row justify-center -mt-5">
                        <div className="maze" style={{backgroundImage:`url(${Java})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${javaScript})`}}></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2 TechAndTools-SubHeading">GRAPHICS</div>
                <div className="w-1/2 flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="maze" style={{backgroundImage:`url(${adobeXD})`,backgroundSize:"50px"}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${figma})`,backgroundSize:"60px"}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${photoshop})`,backgroundSize:"60px"}}></div>
                    </div>
                    <div className="flex flex-row justify-center -mt-5">
                    <div className="maze ml-1" style={{backgroundImage:`url(${illustrator})`,backgroundSize:"60px"}}></div>
                    <div className="maze ml-1" style={{backgroundImage:`url(${afterEffect})`,backgroundSize:"60px"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
