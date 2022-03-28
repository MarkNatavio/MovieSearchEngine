
import './navbar.css'
import React, { useState, useEffect } from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function NavBar() {
    return (
        <div className='px-5 pt-4 container-fluid navbar' style={{position: "absolute", zIndex: "5"}}>
            <div className='row container-fluid'>
                <div className='col'>
                    <div className='logo'>
                        <p className='check'>M</p>
                        <p className='bigO'>x</p>
                        <p className='check'>N</p>
                    </div>
                </div>
                <div className='col d-flex justify-content-end'>
                    <div className='navigation'>
                        <div className='mr-5 searchbar col-3'>
                            <i className="bi bi-search mr-2 font-weight-bold search"></i>
                            <input type='text' className='ml-1 learn info' style={{fontSize: "0.85em"}} placeholder='Search' />
                        </div>
                        <div className='d-flex flex-column bar py-2'>
                            <div className='line mb-1 mt-2'></div>
                            <div className='line mb-2'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}