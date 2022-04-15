import React, { useState, useEffect } from "react";
import { fetchGenre, fetchMovieByGenre, movieSearch } from "../../service/index";
import Footer from '../Footer'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import './home.css'

export function Home() {

  let inputText = '';

  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [movieTitle, setSearchTitle] = useState([]);

  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(0));
      setSearchTitle(await movieSearch("$"));
    };

    fetchAPI();
  }, []);

  // Searching movies of specific genre
  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
    setSearchTitle(await movieSearch("$"));
    setSelectedGenre(genre_id);
  };

  // Searching movies based on keyword
  const handleMovieSearch = async () => {
    if (inputText.length >= 1){
      setSearchTitle(await movieSearch(inputText));
      setMovieByGenre(await fetchMovieByGenre(0));
    }
  }

  const handleNewKeyword = (event) => {
    inputText = event.target.value;
  }
  
  const moviesSearched = movieTitle.map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6 mb-4" key={index}>
        <Link to={`/movie/${item.id}`}>
          <div  style={{position: "relative"}}>
            <img className="img-fluid image-poster" src={item.poster} alt={item.title}></img>
            <div className="movieData">
              <div>
                <p className="okay" style={{ fontWeight: "500"}}>{item.title}</p>
                <p className="okay" style = {{fontSize: "0.9rem"}}>Rated: {item.rating}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  function handle(e){
    if(e.key === "Enter"){
      var input = document.getElementsByClassName("search");
      input[0].click();
    }
    return false;
  } 

  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        {(selectedGenre !== item.id) &&
          <button
            type="button"
            style={{color:'white', fontWeight: "300", border: "none"}}
            className="btn btn-outline-info"
            onClick={() => {
              handleGenreClick(item.id);
            }}
          >
            {item.name}
          </button>
        }
        {
          (selectedGenre === item.id) &&
          <button
            type="button"
            style={{color:'white', fontWeight: "300", border: "none", backgroundColor: "#3A3A3A"}}
            className="btn btn-outline-info"
            onClick={() => {
              handleGenreClick(item.id);
            }}
          >
            {item.name}
          </button>
        }
      </li>
    );
  });

  const movieList = movieByGenre.map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6 mb-4" key={index}>
        <Link to={`/movie/${item.id}`}>
          <div  style={{position: "relative"}}>
            <img className="img-fluid image-poster" src={item.poster} alt={item.title}></img>
            <div className="movieData">
              <div>
                <p className="okay" style={{ fontWeight: "500"}}>{item.title}</p>
                <p className="okay" style = {{fontSize: "0.9rem"}}>Rated: {item.rating}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="mainContainer">
      <div className="container mainContainer mt-5">
        <div className='mr-5 searchbar col-12' style={{height: "37px"}}>
          <i className="bi bi-search mr-2 font-weight-bold search" onClick={ handleMovieSearch } />
          <input type='text' onKeyPress={handle} className='ml-1 learn info' style={{fontSize: "0.85em", overflow: "overlay", width: "90%"}} placeholder='Search' onChange={handleNewKeyword}/>
        </div>

        <div className="row mt-2">
          <div className="col mt-3">
            <ul className="list-inline">{genreList}</ul>
          </div>
        </div>

        <h3 style={{color: 'white'}} className = "mt-5">{"Movies"}</h3>

        <div className="row mt-3">{moviesSearched}</div>
        <div className="row mt-3">{movieList} </div>
        <div className='footer' style= {{backgroundColor: 'black', height: '225px'}}>
          <hr style={{borderTop: "1px solid #5a606b", marginTop: "0px", marginBottom: "20px"}}></hr>
          <Footer />
        </div>
      </div>
    </div>
  );
}
