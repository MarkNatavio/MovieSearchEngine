import './movie.css'
import React, { useState, useEffect } from "react";
import { fetchMovieDetail, fetchMovieVideos, fetchCasts, fetchSimilarMovie } from "../../service";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

export function TestPage({ match }) {

    let params = match.params;
    let genres = [];
    const [isOpen, setIsOpen] = useState(false);
    const [detail, setDetail] = useState([]);
    const [video, setVideo] = useState([]);
    const [casts, setCasts] = useState([]);
    const [similarMovie, setSimilarMovie] = useState([]);

    useEffect(() => {
        window.scroll(0, 0);
        const fetchAPI = async () => {
        setDetail(await fetchMovieDetail(params.id));
        setVideo(await fetchMovieVideos(params.id));
        setCasts(await fetchCasts(params.id));
        setSimilarMovie(await fetchSimilarMovie(params.id));
        genres = detail.genres;
        };
        
        fetchAPI();
    }, [params.id]);

    genres = detail.genres;

    if (genres === undefined) {
        return (
            <div>
                Loading
            </div>
        )
    }   

    const MoviePalyerModal = (props) => {
        const youtubeUrl = "https://www.youtube.com/watch?v=";
        return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title
                id="contained-modal-title-vcenter"
                style={{ color: "#000000", fontWeight: "bolder" }}
            >
                {detail.title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#000000" }}>
            <ReactPlayer
                className="container-fluid"
                url={youtubeUrl + video.key}
                playing
                width="100%"
            ></ReactPlayer>
            </Modal.Body>
        </Modal>
        );
    };

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

    function getPosterLink(a) {
        var divStyle = {
            backgroundImage: 'url("https://image.tmdb.org/t/p/original' + a + '")',
        };
        return divStyle;
    }

    function properFormat(b) { 
        var a = b.toString();
        var ans = "";
        var count = 0;
        for (var i = a.length; i > 0; i--) {
            if (count === 3) {
                ans = "," + ans;
                count = 0;
            }
            ans = a[i - 1] + ans;
            count++;
        }
        return ans;
    }

    function properTimeFormat(b) {
        var ans = "";
        var c = parseInt(b / 60)
        ans = c + "hr " + (b % 60) + "min";
        return ans;
    }

    function run() {
        setIsOpen(true);
    }

    return (
        <div className='body'>
            <div className='MoviePage image' style={getPosterLink(detail.backdrop_path)}>
            </div>
            <div className='arrow' style = {{width: "100%"}}>
                <svg style = {{fontSize: "2em"}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
            </div>
            <div className="MoviePageInfo d-flex justify-content-center flex-column" style = {{zIndex: "2"}}>
                <div className = "mx-5 d-flex flex-column">
                    <div className='d-flex flex-row'>
                        {
                            genres.map((genre) => {
                                return (
                                    <p className='transparentBox px-4 py-2 mr-3 text-white'>{genre.name}</p>
                                )
                            })
                        }
                    </div>
                    <MoviePalyerModal show={isOpen}
                        onHide={() => {
                            setIsOpen(false);
                        }}
                        ></MoviePalyerModal>
                    <h2 className = "text-white my-3 display-4">{detail.title}</h2>
                    <div className='Rating d-flex flex-row mt-2 align-items-center'>
                        <div className='ratingBox bg-yellow mr-2'>
                            <p className="text-dark px-2 py-1 font-weight-bold">IMDb</p>
                        </div>
                        <p className='text-white font-weight-bold'>{detail.vote_average}</p>
                    </div>
                    <div className = "d-flex flex-row align-items-center mt-5">
                        <div className = "playButton mr-3 py-2 px-2" onClick={() => run()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>
                        </div>
                        <p className = "learn text-white font-weight-bold"> Watch Trailer </p>
                    </div>
                </div>
            </div>
            <div className='px-5 pt-5 details'>
                <div className = "scrollEffect">
                    <div className='d-flex flex-row'>
                        <div className = "imagePoster mr-4 col-2 bg-primary" style={getPosterLink(detail.poster_path)}>
                        </div>
                        <div className='row'>
                            <div className='col-9'>
                                <div className='d-flex flex-row'>
                                    {
                                        genres.map((genre) => {
                                            return (
                                                <p style = {{fontSize: "0.8em"}} className='secondBox px-3 py-2 mr-2 text-white'>{genre.name}</p>
                                            )
                                        })
                                    }
                                </div>
                                <h2 className = "learn text-white my-3 display-4 font-weight-light">{detail.title}</h2>
                                <div className = "mt-4 text-secondary col-8" style={{padding: 0, fontSize: "1.1em"}}>
                                    {detail.overview}
                                </div>
                            </div>
                            <div className = "text-white mt-2 pt-5">
                                <div className = "mb-4">
                                    <p className='learn font-weight-bold '>RELEASE DATE</p>
                                    <p className='pt-1'>{detail.release_date}</p>
                                </div>
                                <div className = "mb-4">
                                    <p className='learn font-weight-bold'>RUN TIME</p>
                                    <p className='pt-1'>{properTimeFormat(detail.runtime)}</p>
                                </div>
                                <div className='mb-4'>
                                    <p className='learn font-weight-bold'>REVENUE</p>
                                    <p className='pt-1'>$ {properFormat(detail.revenue)}</p>
                                </div>
                                <div>
                                    <a href = {detail.homepage} target="_blank">
                                        <p className='font-weight-bold'>WEBSITE LINK</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className='mt-5 pt-3 text-white font-weight-light' style = {{fontSize: "1.8em"}}>Similar Movies</p>
                        <div className='d-flex flex-row scroll' style={{width: "100%"}}>
                            {
                                similarMovie.map((movie) => {
                                    return (
                                        <Link to={`/movie/${movie.id}`} className = "similarbox col-2 mr-4 d-flex flex-column justify-content-center">
                                            <div className = "px-4 text-white display-5 font-weight-bold row" style = {{height: "10vh"}}>
                                                <div className='col-8 learn d-flex flex-column justify-content-center' style = {{height: "100%"}}>
                                                    <p>{movie.title}</p>
                                                    <p className='font-weight-light' style={{fontSize: "0.85em"}}>Rating : {movie.rating}</p>
                                                </div>
                                                <div style={{backgroundImage: "url('" + movie.poster + "')"}} className='similarPoster col-4 bg-primary'>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className='mt-5 pt-3 text-white font-weight-light' style = {{fontSize: "1.8em"}}>Cast</p>
                        <div className='d-flex flex-row scroll' style={{width: "100%"}}>
                            {
                                casts.map((cast) => {
                                    return (
                                        <div className='box pb-2 px-4 col-2 mr-4 d-flex flex-column justify-content-end' style = {{backgroundImage: "url('" + cast.img + "')"}}>
                                            <p className='text-white' style= {{width: "100%", fontSize: "1.7em"}}>{cast.name}</p>
                                            <p className='text-white font-weight-bold'>{cast.character}</p>
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