
import './navbar.css'
import React, { useState, useEffect } from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function NavBar() {
    const [navBarClicked, setClicked] = useState(false);

    function openNav() {
        setClicked(true);
        console.log("opened");
    }

    function closeNav() {
        setClicked(false);
        console.log("closed");
    }

    function closeNavLink() {
        setClicked(false);
        window.scroll(0,0);
    }

    return (
        <div className='px-5 pt-4 container-fluid navbar' style={{position: "absolute", zIndex: "5"}}>
            <div className='row container-fluid'>
                <div className='col'>
                    <Link to={''} style={{textDecoration: "none"}}>
                        <div className='logo'>
                            <p className='check'>M</p>
                            <p className='bigO'>x</p>
                            <p className='check'>N</p>
                        </div>
                    </Link>
                </div>
                <div onClick={navBarClicked ? closeNav : openNav} className = {navBarClicked ? "col d-flex justify-content-end menuActive" : "col d-flex justify-content-end menu"}>
                    <div className='navigation'>
                        <div className='d-flex flex-column bar py-2'>
                            <div className='line mb-1 mt-2'></div>
                            <div className='line mb-2'></div>
                        </div>
                    </div>
                </div>

                <div className={navBarClicked ? "mainMain" : ""}>
                    <div className={navBarClicked ? "sidenav" : "sidenavNone"}>
                        <div>
                            <p className = "text">Menu</p>
                            <Link to = '/' style={{textDecoration: "none"}} onClick = {closeNavLink}>
                                <div className = "marque">
                                    <p className = "links">Home<br></br> Home</p>
                                </div>
                            </Link>
                            <Link to = '/about' style={{textDecoration: "none"}} onClick = {closeNavLink}>
                                <div className = "marque">
                                    <p className = "links">About Me<br></br> About Me</p>
                                </div>
                            </Link>
                            <Link to = '/projects' style={{textDecoration: "none"}} onClick = {closeNavLink}>
                                <div className = "marque">
                                    <p className = "links">Projects<br></br> Projects</p>
                                </div>
                            </Link>
                            <Link to = '/contactme' style={{textDecoration: "none"}} onClick = {closeNavLink}>
                                <div className = "marque">
                                    <p className = "links">Contact Me<br></br> Contact Me</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}