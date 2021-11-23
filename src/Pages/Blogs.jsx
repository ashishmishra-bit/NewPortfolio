import React from 'react'
import { Link } from 'react-router-dom'
import BlogImage from '../images/BlogImage.png'
import BlogImage2 from '../images/BlogImage2.png'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import '../css/Blogs.css'

export default function Blogs() {
    return (
        <div>
            <Sidebar />
            <div className="home-section pb-20">
                {/* HEADING SECTION */}
                <div className="blogs-header flex flex-row">
                
                    <div className="blogs-Heading-text flex ml-20 items-center">THE<br/>BLOGS</div>
                    
                </div>

                <div className="flex flex-row px-36">
                    <div className="w-1/2">
                        <img src={BlogImage} alt="BlogImage" style={{width:"550px"}} />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between" style={{color:"#9A9A9A"}}>
                        <div className="text-lg">Date - 21st Nov , 2021</div>
                        <div className="text-2xl font-semibold my-2">How To Store Sessions in MongoDB Using Express.Js</div>
                        <div className="text-lg my-2 text-justify">MongoDB is one of the very popular database used by many developers for different things. First step is to install mongoose package using npm (node package manager ) to access the MongoDB database –</div>
                        <Link to="/seeblogs" className="text-lg" style={{color:"#5AE86B"}}>Read More &#x21e8;</Link>
                    </div>
                </div>

                <div className="px-36 flex flex-row my-28">

                    <div className="flex flex-col">
                        <div>
                            <img src={BlogImage2} alt="BlogImage2" style={{width:"550px"}} />
                        </div>
                        <div className="flex flex-col justify-between " style={{color:"#9A9A9A"}}>
                            <div className="text-lg mt-5">Date - 21st Nov , 2021</div>
                            <div className="text-2xl font-semibold my-2">How To Store Sessions in MongoDB Using Express.Js</div>
                            <div className="text-lg my-2 text-justify mr-20">MongoDB is one of the very popular database used by many developers for different things. First step is to install mongoose package using npm (node package manager ) to access the MongoDB database –</div>
                            <Link to="/seeblogs" className="text-lg" style={{color:"#5AE86B"}}>Read More &#x21e8;</Link>
                        </div>
                    </div>

                    <div className="flex flex-col ">
                        <div>
                            <img src={BlogImage2} alt="BlogImage2" style={{width:"550px"}} />
                        </div>
                        <div className="flex flex-col justify-between " style={{color:"#9A9A9A"}}>
                            <div className="text-lg mt-5">Date - 21st Nov , 2021</div>
                            <div className="text-2xl font-semibold my-2">How To Store Sessions in MongoDB Using Express.Js</div>
                            <div className="text-lg my-2 text-justify mr-20">MongoDB is one of the very popular database used by many developers for different things. First step is to install mongoose package using npm (node package manager ) to access the MongoDB database –</div>
                            <Link to="/seeblogs" className="text-lg" style={{color:"#5AE86B"}}>Read More &#x21e8;</Link>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row px-36">
                    <div className="w-1/2">
                        <img src={BlogImage} alt="BlogImage" style={{width:"550px"}} />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between" style={{color:"#9A9A9A"}}>
                        <div className="text-lg">Date - 21st Nov , 2021</div>
                        <div className="text-2xl font-semibold my-2">How To Store Sessions in MongoDB Using Express.Js</div>
                        <div className="text-lg my-2 text-justify">MongoDB is one of the very popular database used by many developers for different things. First step is to install mongoose package using npm (node package manager ) to access the MongoDB database –</div>
                        <Link to="/seeblogs" className="text-lg" style={{color:"#5AE86B"}}>Read More &#x21e8;</Link>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
