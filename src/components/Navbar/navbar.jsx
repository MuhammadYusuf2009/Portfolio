import React, { useState } from 'react'
import Logo from '../../Img/logo.png'
import burger from '../../Img/burger.png'
import x from '../../Img/x.png'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className='Navbar'>
            <div className="container">
                <nav className='nav'>
                    <div className='logo'>
                        <span><img src={Logo} alt="Logo" /></span>
                        <h4>VeXoN</h4>
                    </div>

                    <div className='Link'>
                        <ul className={`ul__list ${menuOpen ? 'show' : ''}`}>
                            <Link style={{ textDecoration: "none" }} to="/home"><li className={`ul__li ${currentPath === '/home' ? 'active' : ''}`}><span>#</span>home</li></Link>
                            <Link style={{ textDecoration: "none" }} to="/project"><li className={`ul__li ${currentPath === '/project' ? 'active' : ''}`}><span>#</span>works</li></Link>
                            <Link style={{ textDecoration: "none" }} to="/about-me"><li className={`ul__li ${currentPath === '/about-me' ? 'active' : ''}`}><span>#</span>about-me</li></Link>
                            <Link style={{ textDecoration: "none" }} to="/contact"><li className={`ul__li ${currentPath === '/contact' ? 'active' : ''}`}><span>#</span>contact</li></Link>
                        </ul>

                        <img
                            className='burger'
                            src={menuOpen ? x : burger}
                            alt="Menu Toggle"
                            onClick={toggleMenu}
                        />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
