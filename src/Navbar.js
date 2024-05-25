import {HStack} from '@chakra-ui/react';
import {Link, useLocation} from 'react-router-dom';
import './Navbar.css';


const NavBar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return ( 
        <nav className="website-navbar">
            <Link to="/"><h6 className = "my-name">HENNESSY</h6></Link>
            <div className="links">
                <HStack>
                    <Link to="/about" className={`website-navlink ${pathname === "/about" ? "active" : ""}`}>About</Link>
                    <Link to="/experience" className={`website-navlink ${pathname === "/experience" ? "active" : ""}`}>Experience</Link>
                    <Link to="/tech-projects" className={`website-navlink ${pathname === "/tech-projects" ? "active" : ""}`}>Tech</Link>
                    <Link to="/non-tech-projects" className={`website-navlink ${pathname === "/non-tech-projects" ? "active" : ""}`}>Non-Tech</Link>
                    {/* <Link to="/fun" className={`website-navlink ${pathname === "/fun" ? "active" : ""}`}>Fun stuff</Link> */}
                    <Link to="/contact" className={`website-navlink ${pathname === "/contact" ? "active" : ""}`}>Contact</Link>
                </HStack>
            </div>
        </nav>
     );
}
 
export default NavBar;