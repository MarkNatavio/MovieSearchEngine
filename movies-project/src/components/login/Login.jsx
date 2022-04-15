import './login.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import React from "react";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <div className='container-fluid d-flex p-0'>
            <div className='container height ml-5 pl-5'>
                <div className='container-fluid'>
                    <h2 className='text-white mb-3'>Welcome back!</h2>
                    <p className='text-white mb-4'>Please enter your details</p>
                    <p className='text-white label mb-2'>Email</p>
                    <input type="text" placeholder='Enter email'></input>
                    <p className='text-white label mt-4 mb-2'>Password</p>
                    <input type="password" placeholder='Enter password'></input>
                    <p className='mt-3'>Don't have an account?  
                        <Link to="/signup" style={{textDecoration: "none"}}>
                            <span style = {{color: "#604E9E", fontWeight: "bolder", marginLeft: "0.5%"}}>
                                Sign Up
                            </span>
                        </Link>
                    </p>
                    <div className='mt-4 pt-3'>
                        <button className='button'>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
            <div className='container height'>
                <div className='logoTwo'>
                    <p className='checktwo'>M</p>
                    <p className='bigOtwo'>x</p>
                    <p className='checktwo'>N</p>
                </div>
                <div className='transparency'>
                </div>
            </div>
        </div>
    );
}