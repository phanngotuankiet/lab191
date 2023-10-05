import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";

const API_KEY = "b42df0f22242970652b2d68a533bf5a8";
const linkToFetch = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123;`;

export default function Banner(props) {
  const [bannerImage, setBannerImage] = useState(fetchBanner);
  const [name, setName] = useState(fetchName);
  const [overview, setOverview] = useState(fetchOverview);

  function fetchBanner() {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=b42df0f22242970652b2d68a533bf5a8&with_network=123`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBannerImage(
          `http://image.tmdb.org/t/p/w500${
            data.results[Math.floor(Math.random() * data.results.length - 1)]
              .backdrop_path
          }`
        );
      });
  }

  function fetchName() {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=b42df0f22242970652b2d68a533bf5a8&with_network=123`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.results.map((moviesData) => setName(`${moviesData.name}`));
      });
  }

  function fetchOverview() {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=b42df0f22242970652b2d68a533bf5a8&with_network=123`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.results.map((moviesData) => setOverview(`${moviesData.overview}`));
      });
  }

  return (
    <div className={styles.banner}>
      <img src={bannerImage} width="100%" />
      <h2 className={styles.name}>{name}</h2>

      <div className={styles.bannerButtons}>
        <button>Play</button>
        <button>My List</button>
      </div>

      <p className={styles.overview}>{overview}</p>
    </div>
  );
}
