
import React, { useState, useEffect } from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useAuth } from '../../service/authContext';
import './userProfile.css';
import { fetchMovieDetail } from '../../service/index';

export function UserProfile() {

    const { userName, userFavorites } = useAuth();
    const [movieDetail, setMovieDetail] = useState([]);
    const posterUrl = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        const fetchAPI = async () => {
            var data = [];
            for (var i = 0; i < userFavorites.length; i++) {
                data.push(await fetchMovieDetail(userFavorites[i]));
            }
            setMovieDetail(data);
        }
        fetchAPI();
    }, [userFavorites]);

    return (
        <div className="container mainuser">
            <h1 className="text-center">Hello, {userName}</h1>
            <h3 className="mt-5 pt-5">Favorite Movie's</h3>    
            <div className="row mt-3">
                {
                    movieDetail.map((item, index) => {
                        return (
                            <div className="col-md-3 col-sm-6 mb-4" key={index}>
                                <Link to={`/movie/${item.id}`}>
                                <div  style={{position: "relative"}}>
                                    <img className="img-fluid image-poster" src={posterUrl + item.poster_path} alt={item.title}></img>
                                    <div className="movieData">
                                    <div>
                                        <p className="okay" style={{ fontWeight: "500"}}>{item.title}</p>
                                        <p className="okay" style = {{fontSize: "0.9rem"}}>Rated: {item.rating}</p>
                                    </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )  
                    })
                }
            </div>
        </div>    
    )
}