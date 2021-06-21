import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.PNG';
import 'font-awesome/css/font-awesome.min.css';
import './navbar.css'

function Navbar() {
    const [click , setClick] = useState(false)
    const [button, setButton]  = useState(true)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    const showButton =() => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton)

    return (
        <>
        <nav className = "navbar">
            <div className = "navbar-container">
                <Link to = "/" className = "navbar-logo">
                    <img src={logo} />
                </Link>
                <div className = 'menu-icon' onClick = {handleClick}>
                    <i className={click ? 'fa fa-times': 'fa fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to= '/' className = 'nav-links' onClick={closeMenu}>
                            Services
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to= '/' className = 'nav-links' onClick={closeMenu}>
                            Product
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to= '/' className = 'nav-links' onClick={closeMenu}>
                            Technology
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to= '/' className = 'nav-links' onClick={closeMenu}>
                            About
                            <i id="i"className = " fa fa-angle-down" />
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to= '/' className = 'nav-links' onClick={closeMenu}>
                            Client
                            <i id="i" className = " fa fa-angle-down" />
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to= '/' className = 'nav-links' onClick={closeMenu}>
                            Partner
                        </Link>
                    </li>
                </ul>
                <i id="icon" className = " fa fa-home" />
                <i id="icon" className = " fa fa-envelope" />
                <i id="icon" className = " fa fa-angle-down" />
            </div>
        </nav>
    
        </>
    )
}

export default Navbar
