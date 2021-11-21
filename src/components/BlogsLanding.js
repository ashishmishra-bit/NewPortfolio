import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Blogs.css'
import ProjectBackgroundTwo from '../images/ProjectBackgroundTwo.png'


export default function BlogsLanding() {
    return (
        <div className="px-24 py-16">

            <div className="Landing-Heading text-center mb-10">BLOGS</div>

            <div className="">
                <div className="flex flex-row justify-center">
                    <div className="blogMaze " style={{backgroundImage:`url(${ProjectBackgroundTwo})`}}></div>
                    <div className="blogMaze ml-3" style={{backgroundImage:`url(${ProjectBackgroundTwo})`}}></div>
                </div>
                <div className="flex flex-row justify-center -mt-16">
                    <div className="blogMaze" style={{backgroundImage:`url(${ProjectBackgroundTwo})`}}></div>
                </div>
            </div>
            <Link to="/blogs" >
                <div className="text-9xl text-white text-center font-semibold">&#x0355;  &#x0355;  &#x0355;  &#x0355; </div>
            </Link>
        </div>
    )
}
