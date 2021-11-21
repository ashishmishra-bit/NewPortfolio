import React from 'react'
import "../css/TechAndTools.css"
import react from "../icons/react.png"
import javaScript from "../icons/javaScript.png"
import expressjs from "../icons/expressjs.png"
import next from "../icons/next.png"
import bootstrap from "../icons/bootstrap.png"
import sass from "../icons/sass.png"
import wordpress from "../icons/wordpress.png"
import firebase from "../icons/firebase.png"
import mysql from "../icons/mysql.png"
import mongodb from "../icons/mongodb.png"
import c from "../icons/c.png"
import CPlus from "../icons/CPlus.png"
import html from "../icons/html.png"
import css from "../icons/css.png"
import python from "../icons/python.png"
import adobeXD from "../icons/adobeXD.png"
import figma from "../icons/figma.png"

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
                    </div>
                    <div className="flex flex-row justify-center -mt-5">
                        <div className="maze" style={{backgroundImage:`url(${bootstrap})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${wordpress})`}}></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse my-40">
                <div className="w-1/2 TechAndTools-SubHeading">BACK-END</div>
                <div className="w-1/2 flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="maze" style={{backgroundImage:`url(${javaScript})`,backgroundColor:"#f7e018"}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${expressjs})`,backgroundSize:"90px"}}></div>
                        <div className="maze ml-1"></div>
                        <div className="maze ml-1"></div>
                    </div>
                    <div className="flex flex-row justify-center -mt-5">
                        <div className="maze"></div>
                        <div className="maze ml-1"></div>
                        <div className="maze ml-1"></div>
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
                        <div className="maze"></div>
                        <div className="maze ml-1"></div>
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
                        <div className="maze" style={{backgroundImage:`url(${html})`}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${css})`}}></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2 TechAndTools-SubHeading">GRAPHICS</div>
                <div className="w-1/2 flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="maze" style={{backgroundImage:`url(${adobeXD})`,backgroundSize:"50px"}}></div>
                        <div className="maze ml-1" style={{backgroundImage:`url(${figma})`,backgroundSize:"60px"}}></div>
                        <div className="maze ml-1"></div>
                    </div>
                    <div className="flex flex-row justify-center -mt-5">
                        <div className="maze"></div>
                        <div className="maze ml-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
