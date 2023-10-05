import React from "react";
import styles from "./ResultList.module.css";

export default function ResultList(props) {
  return (
    <div className={styles.resultList}>
      <img
        src={`http://image.tmdb.org/t/p/w500` + props.backdrop_path}
        width="126px"
        height="164px"
      />
      {props.backdrop_path === null ? <p>Movie name: {props.altText}</p> : null}
    </div>
  );
}
