
import './navbar.css'
import React, { useState, useEffect } from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useAuth } from '../../service/authContext';

export function NavBar() {
    const [navBarClicked, setClicked] = useState(false);

    const { userName, loggedIn, handleLogout } = useAuth();

    function openNav() {
        setClicked(true);
        var a = document.getElementsByClassName("learn");
        a[0].style.display = "none";
        console.log("opened");
    }

    function closeNav() {
        setClicked(false);
        var a = document.getElementsByClassName("learn");
        a[0].style.display = "block";
        console.log("closed");
    }

    function closeNavLink() {
        setClicked(false);
        var a = document.getElementsByClassName("learn");
        a[0].style.display = "block";
        window.scroll(0,0);
    }

    async function logOut(e) {
        e.preventDefault();
        await handleLogout()
        alert("Logged out successfully!")
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

                
                <div style = {{width: "100%"}} className = {navBarClicked ? "col d-flex justify-content-end menuActive" : "col d-flex justify-content-end menu"}>
                    <div className='navigation'>
                        {loggedIn &&
                            <div className='learn' style={{textAlign: "right", marginRight: "12%", cursor: "pointer"}}>
                                <button class="dropbtn">Hello, {userName}</button>
                                <div class="dropdown-content">
                                    <Link to="/userProfile">
                                        User Profile
                                    </Link>
                                    <a style = {{color: "black"}} onClick={(e) => logOut(e)}>Logout</a>
                                </div>
                            </div>
                        }
                        <div className='d-flex flex-column bar py-2' onClick={navBarClicked ? closeNav : openNav}>
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
                            {!loggedIn &&
                            <Link to = '/signin' style={{textDecoration: "none"}} onClick = {closeNavLink}>
                                <div className = "marque">
                                    <p className = "links">Log In<br></br> Log In</p>
                                </div>
                            </Link>}
                            {!loggedIn &&
                            <Link to = '/signup' style={{textDecoration: "none"}} onClick = {closeNavLink}>
                                <div className = "marque">
                                    <p className = "links">Sign Up<br></br> Sign Up</p>
                                </div>
                            </Link>}
                            <Link to = '/about' style={{textDecoration: "none"}} onClick = {closeNavLink}>
                                <div className = "marque">
                                    <p className = "links">About<br></br> About</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}