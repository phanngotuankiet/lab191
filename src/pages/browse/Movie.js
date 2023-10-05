import React from "react";
import styles from "./Movie.module.css";

export default function Movie(props) {
  return <img className={styles.movie} src={props.moviesData} width="140px" />;
}
