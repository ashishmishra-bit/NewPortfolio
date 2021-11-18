import React from 'react'
import Navbar from '../components/Navbar'
import codeEditor from '../images/codeEditor.png'
import profile from '../images/profile.jpg'
import '../css/Landing.css'

export default function Landing() {
    return (
        <div className="landing">
            <Navbar />
            {/* Header Section */}
            <div className="landing-header">
                <div className="landing-header-text">
                    <div className="xl">
                        A Community of Geeks<br/>
                        By the Geeks,<br/>
                        For the Geeks
                    </div>
                    <div className="sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim tempus ligula, sed egestas libero pharetra eget. Nulla justo leo, sollicitudin id semper sed, tristique sed ipsum. Nunc id arcu lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dign. 
                    </div>
                </div>
                <div className="landing-header-img">
                    <img src={codeEditor} alt="codeEditor" />
                </div>
            </div>

            {/* Our Photo & About Section */}
            <div className="flex flex-col md:flex-row mt-14">
                <div className="w-1/3 flex justify-center items-center">
                    <img src={profile} alt="logo" style={{width:"220px",height:"220px"}} className="rounded-full"/>
                </div>
                <div className="w-2/3 text-lg font-normal p-20">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis debitis natus explicabo rem, veniam deleniti ex obcaecati quas sunt! Facilis id voluptates recusandae, dicta blanditiis officia atque inventore illum tenetur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum culpa, non hic, reiciendis mollitia facilis, fugiat est minima esse incidunt repellat rerum dicta eligendi. Porro magnam consectetur alias quam.
                </div>
            </div>

        </div>
    )
}
