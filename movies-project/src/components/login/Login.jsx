import './login.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../service/authContext';

export function Login() {

    const email = useRef("");
    const password = useRef("");

    const { login } = useAuth();

    const history = useHistory();

    async function signin(e) {
        e.preventDefault();
        if (email.current.value === "" || password.current.value === "") {
            document.getElementsByClassName("errorLoginIn")[0].innerHTML = "Please fill all the fields";
            return;
        } else {
            var returnValue = await login(email.current.value, password.current.value);
            if (returnValue === 1) {
                document.getElementsByClassName("errorLoginIn")[0].innerHTML = "";
                history.push("/");
            } else {
                document.getElementsByClassName("errorLoginIn")[0].innerHTML = returnValue;
            }
        }
    }

    return (
        <div className='container-fluid d-flex p-0'>
            <div className='container height ml-5 pl-5'>
                <div className='container-fluid'>
                    <h2 className='text-white mb-3'>Welcome!</h2>
                    <p className='text-white mb-4'>Please provide the details below</p>
                    <p className='text-white label mb-2'>Email</p>
                    <input type="text" placeholder='Enter email' ref = {email}></input>
                    <p className='text-white label mt-4 mb-2'>Password</p>
                    <input type="password" placeholder='Enter password' ref = {password}></input>
                    <p className='mt-3'>Don't have an account?  
                        <Link to="/signup" style={{textDecoration: "none"}}>
                            <span style = {{color: "#604E9E", fontWeight: "bolder", marginLeft: "0.5%"}}>
                                Sign Up
                            </span>
                        </Link>
                    </p>
                    
                    <p className="mt-4 errorLoginIn" style = {{color: "yellow"}}></p>

                    <div className='mt-4 pt-3'>
                        <button className='button' onClick={(e) => signin(e)}>
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