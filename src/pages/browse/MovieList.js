import React, { useEffect, useState } from "react";
import styles from "./MovieList.module.css";
import MovieDetail from "./MovieDetail";

export default function MovieList(props) {
  const [movieList, setMovieList] = useState([]);
  const [youtubeTrailer, setYoutubeTrailer] = useState();
  const [open, setOpen] = useState(false);
  const [selectedMovieDetail, setSelectedMovieDetail] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3${props.APIEndpoint}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setMovieList(data.results);
      });
  }, []);

  const onClickVao = (item) => {
    // ktra thử phải click phim khác không
    {
      selectedMovieDetail.id === item.id
        ? setOpen(!open)
        : setSelectedMovieDetail({
            id: item.id,
            title: item.title,
            name: item.name,
            first_air_date: item.first_air_date,
            release_date: item.release_date,
            vote_average: item.vote_average,
            overview: item.overview,
          });
    }

    // set phim hien tai
    setSelectedMovieDetail({
      id: item.id,
      title: item.title,
      name: item.name,
      first_air_date: item.first_air_date,
      release_date: item.release_date,
      vote_average: item.vote_average,
      overview: item.overview,
      backdrop_path: item.backdrop_path,
    });

    fetch(
      `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=b42df0f22242970652b2d68a533bf5a8`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setYoutubeTrailer({
          movie_id: selectedMovieDetail.id,
          key: data.results[0].key,
          keyUndefined: data.results[0],
        });
        console.log(youtubeTrailer.keyUndefined);
      });
    console.log(selectedMovieDetail.backdrop_path);
  };

  return (
    <div className={styles.movielist}>
      <div className={styles.slider}>
        {movieList.map((item) =>
          props.poster ? (
            <img
              onClick={onClickVao.bind(this, item)}
              className={styles.movie}
              src={`http://image.tmdb.org/t/p/w500` + item.poster_path}
              width="140px"
              height="auto"
            />
          ) : (
            <img
              onClick={onClickVao.bind(this, item)}
              className={styles.movie}
              src={`http://image.tmdb.org/t/p/w500` + item.backdrop_path}
              width="140px"
            />
          )
        )}
      </div>

      {open ? (
        <MovieDetail
          id={selectedMovieDetail.id}
          title={selectedMovieDetail.title}
          name={selectedMovieDetail.name}
          first_air_date={selectedMovieDetail.first_air_date}
          release_date={selectedMovieDetail.release_date}
          vote_average={selectedMovieDetail.vote_average}
          overview={selectedMovieDetail.overview}
          youtubeKey={youtubeTrailer.key}
          backdrop_path={selectedMovieDetail.backdrop_path}
        />
      ) : null}
    </div>
  );
}
