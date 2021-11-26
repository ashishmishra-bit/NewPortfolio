import React from 'react'
import credentials from '../icons/credentials.png'

const Certificates = ({imgUrl , title,organization , date,link}) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row mx-5 md:mx-28 mt-20">
                <div className="md:w-1/4 flex justify-center">
                    <img src={imgUrl} alt="Coursera Logo" style={{ width: "200px" }} />
                </div>
                <div className="md:w-3/4 flex flex-col justify-center mt-10 md:mt-0">
                    <div className="text-lg md:text-5xl text-white text-center md:text-left">{title}</div>
                    <div className="description text-lg my-2 text-center md:text-left">{organization}</div>
                    <div className="description text-lg mb-2 text-center md:text-left">{date}</div>
                    <a href={link} className="text-lg text-white flex flex-row items-center justify-center md:justify-start" target="_blank">
                        <img src={credentials} alt="credentials" style={{ width: "20px", height: "20px" }} />
                        <span className="description ml-2">View Credential</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Certificates
