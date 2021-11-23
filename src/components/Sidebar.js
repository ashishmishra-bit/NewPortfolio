import { Link } from 'react-router-dom'
import '../css/Sidebar.css'
import logo from '../images/logo.png'
import Journey from '../icons/Journey2.png'
import Projects from '../icons/Projects2.png'
import Blogs from '../icons/Blogs2.png'
// import Work from '../icons/Work.png'
import Achievments from '../icons/Achievments2.png'
import Facebook from '../icons/Facebook.png'
import Github from '../icons/Github.png'
import Instagram from '../icons/Instagram.png'
import Linkedin from '../icons/Linkedin.png'
import Twitter from '../icons/Twitter.png'

const Navbar = () => {
    return (
        <div className="sidebar">
            <div>
                <Link to="/" className="flex justify-center">
                    <img src={logo} alt="logo" style={{width:"45px"}} />
                </Link>
                <div className="sidebar-header">
                    <Link to="/journey" className="flex justify-center mt-4">
                        <img src={Journey} alt="logo" style={{width:"60px"}} />
                    </Link>
                    <Link to="/projects" className="flex justify-center mt-6">
                        <img src={Projects} alt="logo" style={{width:"60px"}} />
                    </Link>
                    <Link to="/blogs" className="flex justify-center mt-6">
                        <img src={Blogs} alt="logo" style={{width:"60px"}} />
                    </Link>
                    {/* <Link to="/" className="flex justify-center mt-6">
                        <img src={Work} alt="logo" style={{width:"25px"}} />
                    </Link> */}
                    <Link to="/achievements" className="flex justify-center mt-6">
                        <img src={Achievments} alt="logo" style={{width:"60px"}} />
                    </Link>
                    
                </div>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100008053720762"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook" 
                    className="flex justify-center mt-4"
                >
                    <img src={Facebook} alt="Facebook" style={{width:"25px"}} />
                </a>
                <a href="https://www.linkedin.com/in/ankit-raj-a3405b1b0"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin" 
                    className="flex justify-center mt-4"
                >
                    <img src={Linkedin} alt="Linkedin" style={{width:"25px"}} />
                </a>
                <a href="https://instagram.com/ankit_r.a.j?igshid=895xw0qgqmx2"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram" 
                    className="flex justify-center mt-4"
                >
                    <img src={Instagram} alt="Instagram" style={{width:"25px"}} />
                </a>
                <a href="https://github.com/AnkitRajCode"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github" 
                    className="flex justify-center mt-4"
                >
                    <img src={Github} alt="Github" style={{width:"25px"}} />
                </a>
                <a href="https://twitter.com/ankit__raj__?s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter" 
                    className="flex justify-center mt-4"
                >
                    <img src={Twitter} alt="Twitter" style={{width:"25px"}} />
                </a>
            </div>
        </div>
    )
}

export default Navbar
