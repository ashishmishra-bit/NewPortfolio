import React from 'react'
import Sidebar from '../components/Sidebar'
import '../css/Landing.css'
import Particles from 'particles-bg';
import Typewriter from 'typewriter-effect';
import Profile from '../images/avatar.png'

export default function Landing() {
    return (
        <div className="landing">
            <Sidebar />
            <div className="home-section">
                <div className="Landing-header">
                    <Particles color="#d400ff" type="cobweb" />
                    <div className="typingEffect">
                        <p>~Hello World~</p>
                        <p>I am Ashish Kumar Mishra</p>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Frontend | Android | Data Science | UI/UX')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(2500)
                                // .deleteAll()
                                // .callFunction(() => {
                                //     console.log('All strings were deleted');
                                // })
                                .start();
                            }}
                        />
                    </div>
                </div>
                <div className="Landing-About px-24 pb-10">
                    <div className="Landing-About-Head">ABOUT</div>
                    <div className="flex md:flex-row">
                        <div className="w-3/4 text-white text-2xl pr-28 text-justify">
                            Hello guys, this is Ashish Kumar Mishra. I am an earnest techie and enthusiast about interests in every new update that comes up. I love to be hardworking and dedicated to whatever I take up as a task.  Web development attracts me the most. I have also learned Android Development. Apart from that, I do know about SEO. I have also earned certification in UI/UX. I have also completed 2 projects namely. One of them being a music and billing app for android and the other are 4 to 5 website designs for UI/UX.
                        </div>
                        <div className="w-1/4">
                            <img src={Profile} alt="Profile" style={{width:"220px"}} />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
