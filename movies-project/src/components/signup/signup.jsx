import './signup.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import React from "react";
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useAuth } from '../../service/authContext';

export function SignUp() {

    const { signUp } = useAuth();

    const name = useRef("");
    const email = useRef("");
    const password = useRef("");

    async function signUP(e) {
        e.preventDefault();
        if (name.current.value === "" || email.current.value === "" || password.current.value === "") {
            document.getElementsByClassName("error")[0].innerHTML = "Please fill all the fields";
        } else {
            var returnValue = await signUp(name.current.value, email.current.value, password.current.value);
            if (returnValue === 1) {
                alert("SignUp Successful");
                document.getElementsByClassName("error")[0].innerHTML = "";
            } else {
                document.getElementsByClassName("error")[0].innerHTML = returnValue;
            }
        }
    }

    return (
        <div className='container-fluid d-flex p-0'>
            <div className='container height ml-5 pl-5'>
                <div className='container-fluid'>
                    <h2 className='text-white mb-3'>Sign Up</h2>
                    <p className='text-white mb-4'>Please provide the details below</p>
                    
                    <p className='text-white label mt-4 mb-2'>Name</p>
                    <input type="text" placeholder='Enter name' ref = {name}></input>
                    <p className='text-white label mt-4 mb-2'>Email</p>
                    <input type="text" placeholder='Enter email' ref = {email}></input>
                    <p className='text-white label mt-4 mb-2'>Password</p>
                    <input type="password" placeholder='Enter password' ref = {password}></input>

                    <p className='mt-3'>Already have an account?  
                        <Link to="/signin" style={{textDecoration: "none"}}>
                            <span style = {{color: "#604E9E", fontWeight: "bolder", marginLeft: "0.5%"}}>
                                Log In
                            </span>
                        </Link>
                    </p>

                    <p className="mt-4 error" style = {{color: "yellow"}}></p>

                    <div className='mt-4 pt-3'>
                        <button className='button' onClick={(e) => signUP(e)}>
                            Sign Up
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