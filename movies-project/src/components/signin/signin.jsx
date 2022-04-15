import './signin.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import React from "react";

export function Signin() {
    return (
        <div className='container-fluid d-flex p-0'>
            <div className='container height ml-5 pl-5'>
                <div className='container-fluid'>
                    <h2 className='text-white mb-3'>Sign In</h2>
                    <p className='text-white mb-4'>Please provide the details below</p>
                    <p className='text-white label mb-2'>Email</p>
                    <input type="text" placeholder='Enter email'></input>
                    <p className='text-white label mt-4 mb-2'>Password</p>
                    <input type="password" placeholder='Enter password'></input>
                    <p className='text-white label mt-4 mb-2'>Password (Confirm)</p>
                    <input type="password" placeholder='Conffirm password'></input>

                    <div className='mt-5 pt-3'>
                        <button className='button'>
                            Sign In
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