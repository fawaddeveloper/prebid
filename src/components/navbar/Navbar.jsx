import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
 export default function Navbar() {
    
    const [selected, setSelected] = useState(null);
    const [classs, setClasss] = useState("block");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleDropdown = () => {
        setClasss(prev => (prev === 'mobileContainer' ? 'block' : 'mobileContainer'));
        setIsMobileMenuOpen(prev => !prev);
    }
    
 
    // const [isScrolled, setIsScrolled] = useState(false);

    // window.onscroll = () => {
    //     setIsScrolled(window.pageYOffset === 0 ? false : true);
    //     return () => (Window.onscroll == null);
    // };
    return (
        <>
        <div className="topnavbar">
            <div className="topNavbarItems">
        <span className="email">Info@prebidestimationhouse.com</span>
        <span className="number">4343434-23-2</span>
            </div>
        </div>
        <div className="navbar">
                    <div className="navbar">
            <div className="container">
            <Link to="/" className='link'>
                <div className="left">
                    <img src="../../../topLogo.png"alt="" />
                </div>
            </Link>
                <div className="right">
                <Link to="/" className='link'>
                <span 
                onClick={() => setSelected(0)}
                className={selected === 0 ? 'navbarmainLinks active' : 'navbarmainLinks'}>
                        Home
                </span>
                </Link>
                    <Link to="/about" className='link'>
                    <span 
                    onClick={() => setSelected(1)}
                    className={selected === 1 ? 'navbarmainLinks active' : 'navbarmainLinks'}>
                        About
                </span>
                    
                    </Link>
                    <Link to="/services" className='link'>
                    <span 
                    onClick={() => setSelected(2)}
                    className={selected === 2 ? 'navbarmainLinks active' : 'navbarmainLinks'}>
                        Solutions
                </span>
                    </Link>
                    <Link to="/career" className='link'>
                    <span className='navbarmainLinks'>Career</span>
                    </Link>
                    <Link to="/contact" className='link'>
                    <span className='navbarmainLinks'>Contact Us</span>
                    </Link>
                    <Link to="/policy" className='link'>
                    <span className='navbarmainLinks'>Terms & Conditions</span>
                    </Link>
                    <Link to="/quote" className='link'>
                    <button className='rightNavButton'>Get Free Quote</button>
                    </Link>
                </div>
            </div>
            
        </div>
        </div>

        <div className="mobile-navbar">
        <div className="mobilebar">
        <div className="mobileLeft">
                    <img className='mobile-img' src="../../../topLogo.png"alt="" />
            </div>
        <div className="mobileRight" onClick={handleDropdown}>
        {isMobileMenuOpen ? <CloseIcon className='mobileRightIcon' /> : <ReorderIcon className='mobileRightIcon' />}
        </div>
        </div>
        <div className={classs}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/Career">Career</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Policy">Terms & Conditions</a></li>
            </ul>
        </div>
        </div>       
        </>
    )
}


