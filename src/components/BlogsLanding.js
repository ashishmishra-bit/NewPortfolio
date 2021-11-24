import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Blogs.css'
import BlogImage1 from '../images/BlogImage2.png'
import BlogImage3 from '../images/datascience.jpg'
import BlogImage2 from '../images/mongodb.png'


export default function BlogsLanding() {
    return (
        <div className="px-24 py-16">

            <div className="Landing-Heading text-center mb-10">BLOGS</div>

            <div className="">
                <div className="flex flex-row justify-center">
                    <div className="blogMaze " style={{backgroundImage:`url(${BlogImage1})` , backgroundSize:`100% 100%`}}></div>
                    <div className="blogMaze ml-3" style={{backgroundImage:`url(${BlogImage2})` , backgroundSize:`cover`}}></div>
                </div>
                <div className="flex flex-row justify-center -mt-16">
                    <div className="blogMaze" style={{backgroundImage:`url(${BlogImage3})`}}></div>
                </div>
            </div>
            <Link to="/blogs" >
                <div className="text-9xl text-white text-center font-semibold">&#x0355;  &#x0355;  &#x0355;  &#x0355; </div>
            </Link>
        </div>
    )
}
