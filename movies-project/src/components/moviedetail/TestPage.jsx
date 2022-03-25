import './movie.css'
import React, { useState, useEffect } from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export function TestPage() {

    window.onscroll = function () { myFunction() };
    function myFunction() {
        const element = document.getElementsByClassName("body")[0];
        if (document.documentElement.scrollTop > (element.scrollHeight / 50)) {
            document.getElementsByClassName("scrollEffect")[0].style.opacity = "1";
            var top = document.documentElement.scrollTop - (element.scrollHeight / 50);
            document.getElementsByClassName("scrollEffect")[0].style.top = Math.max(0, (200 - top)) + "px";
            
            console.log(Math.max(0, (200 - (top))));
        } else {
            document.getElementsByClassName('scrollEffect')[0].style.opacity = "0";
            document.getElementsByClassName('scrollEffect')[0].style.top = "200px";
        }
    }

    var genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime'];
    var rating = 8.2;

    var cast = [['Tom', 'Spiderman'], ['Tom', 'Spiderman'], ['Tom', 'Spiderman'], ['Tom', 'Spiderman'], ['Tom', 'Spiderman'],  ['Tom', 'Spiderman'],  ['Tom', 'Spiderman'], ['Tom', 'Spiderman'],  ['Tom', 'Spiderman'], ['Tom', 'Spiderman'], ['Tom', 'Spiderman'], ['Tom', 'Spiderman'], ['Tom', 'Spiderman']];

    return (
        <div className='body'>
            <div className='MoviePage image' style={{backgroundImage: "url('https://wallpaperaccess.com/full/254892.jpg')"}}>
            </div>
            <div className="MoviePage d-flex justify-content-center flex-column">
                <div className = "mx-5 d-flex flex-column">
                    <div className='d-flex flex-row'>
                        {
                            genres.map((genre) => {
                                return (
                                    <p className='transparentBox px-4 py-2 mr-3 text-white'>{genre}</p>
                                )
                            })
                        }
                    </div>
                    <h2 className = "text-white my-3 display-4">The Shawshank Redemption</h2>
                    <div className='Rating d-flex flex-row mt-2 align-items-center'>
                        <div className='ratingBox bg-yellow mr-2'>
                            <p className="text-dark px-2 py-1 font-weight-bold">IMDb</p>
                        </div>
                        <p className='text-white font-weight-bold'>{rating}</p>
                    </div>
                    <div className = "d-flex flex-row align-items-center mt-5">
                        <div className = "playButton mr-3 py-2 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>
                        </div>
                        <p className = "learn text-white font-weight-bold"> Watch Trailer </p>
                    </div>
                </div>
                <div className='arrow' style = {{width: "100%"}}>
                    <svg style = {{fontSize: "2em"}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                </div>
            </div>
            <div className='px-5 pt-5 details'>
                <div className = "scrollEffect">
                    <div className='d-flex flex-row'>
                        <div className = "imagePoster mr-4 col-2 bg-primary" style={{backgroundImage: "url('https://townsquare.media/site/442/files/2019/03/spider-man-far-poster-2.jpg')"}}>
                        </div>
                        <div>
                            <div className='d-flex flex-row'>
                                {
                                    genres.map((genre) => {
                                        return (
                                            <p style = {{fontSize: "0.8em"}} className='secondBox px-3 py-2 mr-2 text-white'>{genre}</p>
                                        )
                                    })
                                }
                            </div>
                            <h2 className = "learn text-white my-3 display-4 font-weight-light">The Shawshank Redemption</h2>
                            <div className = "mt-4 text-secondary col-6" style={{padding: 0, fontSize: "1.1em"}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione obcaecati temporibus quisquam eligendi? Beatae hic quisquam dolores quis ratione eius temporibus totam eveniet itaque autem et facilis, officiis consequuntur alias.
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className='mt-5 pt-3 text-white font-weight-light' style = {{fontSize: "1.8em"}}>Cast</p>
                        <div className='d-flex flex-row scroll' style={{width: "100%"}}>
                            {
                                cast.map((value) => {
                                    return (
                                        <div className='box pb-2 px-4 col-2 mr-4 d-flex flex-column justify-content-end' style = {{backgroundImage: "url('https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"}}>
                                            <p className='text-white' style= {{width: "100%", fontSize: "1.7em"}}>{cast[0]} Donene Donene</p>
                                            <p className='text-white font-weight-bold'>{cast[1]}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}