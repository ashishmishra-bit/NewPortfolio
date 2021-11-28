import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Blogs.css'
import BlogImage1 from '../images/BlogImage2.png'
import BlogImage3 from '../images/datascience.jpg'
import BlogImage2 from '../images/mongodb.png'
import resumeDetails from '../JsonData/resumeDetails'
import Tensoflow from '../images/tensorflow.png'
import Animation from "../components/Animation"

export default function BlogsLanding() {
    return (
        <div className="px-5 md:px-24 pb-16 md:py-16">

            <div className="Landing-Heading text-center mb-10">BLOGS</div>

            <div>
                <div className="flex flex-row justify-center">
                    <Link to ="/blogs" className="blogMaze " style={{backgroundImage:`url(${Tensoflow})` , backgroundSize:`100% 100%`}}></Link>
                    <Link to ="/blogs" className="blogMaze ml-2 md:ml-3" style={{backgroundImage:`url(${BlogImage2})` , backgroundSize:`cover`}}></Link>
                </div>
                <div className="flex flex-row justify-center -mt-8 md:-mt-16">
                    <Link to ="/blogs" className="blogMaze" style={{backgroundImage:`url(${BlogImage3})`}}></Link>
                </div>
            </div>
            <Link to="/blogs" >
            <Animation />
            </Link>
        </div>
    )
}
