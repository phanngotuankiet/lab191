import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import MovieList from "./MovieList";
import styles from "./Browse.module.css";

const themoviedbAPI =
  "https://api.themoviedb.org/3/movie/550?api_key=b42df0f22242970652b2d68a533bf5a8";
const API_KEY = "b42df0f22242970652b2d68a533bf5a8";
const linkToFetch = `https://api.themoviedb.org/3`;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

function Browse() {
  return (
    <div className={styles.browse}>

      <NavBar />
      <Banner />
      <h4>Original</h4>
      <MovieList APIEndpoint={requests.fetchNetflixOriginals} poster={true} />
      <h4>Trending</h4>
      <MovieList APIEndpoint={requests.fetchTrending} poster={false} />
      <h4>Top Rated</h4>
      <MovieList APIEndpoint={requests.fetchTopRated} poster={false} />
      <h4>Action</h4>
      <MovieList APIEndpoint={requests.fetchActionMovies} poster={false} />
      <h4>Comedy</h4>
      <MovieList APIEndpoint={requests.fetchComedyMovies} poster={false} />
      <h4>Horror</h4>
      <MovieList APIEndpoint={requests.fetchHorrorMovies} poster={false} />
      <h4>Romance</h4>
      <MovieList APIEndpoint={requests.fetchRomanceMovies} poster={false} />
      <h4>Documentary</h4>
      <MovieList APIEndpoint={requests.fetchDocumentaries} poster={false} />
    </div>
  );
}

export default Browse;
