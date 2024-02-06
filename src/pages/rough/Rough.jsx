import React, { useEffect, useState } from 'react'
import "./rough.scss"
import { Link } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
 export default function Rough() {
    
    const [selected, setSelected] = useState(null);
 
    // const [isScrolled, setIsScrolled] = useState(false);

    // window.onscroll = () => {
    //     setIsScrolled(window.pageYOffset === 0 ? false : true);
    //     return () => (Window.onscroll == null);
    // };
    return (
        <>
        <div className="topnavbar">
         <div className="topNavbarItems">
        <span className="email">fawad@gmail.com</span>
        <span className="number">4343434-23-2</span>
            </div>
        </div>
        <div className="mobile-navbar">
            <div className="mobile-navbar">
            {/* <div className="container">
                <div className="left">
                    <img src="https://firebasestorage.googleapis.com/v0/b/netflix-873af.appspot.com/o/products%2FConstruction.%20(7).png?alt=media&token=299edbf9-c0cd-470e-92f2-df433970c38d"alt="" />
                </div>
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
                    <Link to="/Career" className='link'>
                    <span className='navbarmainLinks'>Career</span>
                    </Link>
                    <Link to="/Contact" className='link'>
                    <span className='navbarmainLinks'>Contact Us</span>
                    </Link>
                    <button className='rightNavButton'>Get Free Quote</button>
                </div>
            </div> */}

        <div className="mobilebar">
        <div className="mobileLeft">
                    <img src="https://firebasestorage.googleapis.com/v0/b/netflix-873af.appspot.com/o/products%2FConstruction.%20(7).png?alt=media&token=299edbf9-c0cd-470e-92f2-df433970c38d"alt="" />
            </div>
        <div className="mobileRight">
           X
        </div>
        </div>
        <div className="mobileContainer">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">About</a></li>
                <li><a href="">About</a></li>
            </ul>
        </div>
                
        </div>
        </div>
        </>
    )
}


