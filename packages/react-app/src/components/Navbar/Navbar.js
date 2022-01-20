import React from 'react'
import { useState } from "react";
import logo from '../../logo.png'
import "./Navbar.css";

const Navbar = () => {

    const [isMobile,setIsMobile] = useState(false);
    return (
        <nav className='navbar'>
           
            <img  src={logo} alt="Logo" width="350px" />
            

            <ul 
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onChange={()=> setIsMobile(false)}
            >

                    <li>
                        <a  className='twitter' href="https://twitter.com/WaltsWorldDAO" target="_blank">Twitter</a>
                    </li>
                

               
                    <li>
                        <a  className='twitter' href="https://github.com/WaltsWorldDAO" target="_blank">Github</a>
                    </li>
              

                
                    <li>
                        <a  className='twitter' href="https://t.me/MoonFarmersChat" target="_blank">Telegram</a>
                    </li>
               

                
                {/* <Link to="/about" className='about'>
                    <li>About</li>
                </Link>
                <Link to="/skills" className='skills'>
                    <li>Skills</li>
                </Link>
                <Link to="/contact" className='contact'>
                    <li>Contact</li>
                </Link>
                <Link to="/signup" className='signup'>
                    <li>Sign Up</li>
                </Link> */}
            </ul>

            <button className='mobile-menu-icon' onClick={()=> {setIsMobile(!isMobile)} }>
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i> }
            </button>

        </nav>
    )
}

export default Navbar
