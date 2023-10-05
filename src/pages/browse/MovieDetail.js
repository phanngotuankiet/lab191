import React from "react";
import styles from "./MovieDetail.module.css";

export default function MovieDetail(props) {

  console.log(props.youtubeKey)
  console.log(props.backdrop_path)

  return (
    <div className={styles.movieDetail}>
      <div className={styles.description}>
        <h2>
          {props.title}
          {props.name}
        </h2>

        <hr />

        <h4>
          Release Date: {props.first_air_date} {props.release_date}
        </h4>
        <h4>Vote: {props.vote_average}/10</h4>

        <p>{props.overview}</p>
      </div>

      {props.youtubeKey !== undefined ? (
        <iframe
          src={`https://www.youtube.com/embed/${props.youtubeKey}`}
        ></iframe>
      ) : null}

      {props.youtubeKey === undefined && (
        <img src={`http://image.tmdb.org/t/p/w500` + props.backdrop_path} />
      )}
    </div>
  );
}
