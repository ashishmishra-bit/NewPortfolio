import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="logo" className="logo" />
                <span className="text-xl font-semibold uppercase">Portfolio</span>
            </Link>

            <ul>
                <li><Link to="/"><span> Home </span></Link></li>
                <li><Link to="/"><span> Events </span></Link></li>
                <li><Link to="/"><span> Projects </span></Link></li>
                <li><Link to="/"><span> Members </span></Link></li>
            </ul>

        </div>
    )
}

export default Navbar
