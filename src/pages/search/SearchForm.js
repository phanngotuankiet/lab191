import React, { useState } from "react";
import ResultList from "./ResultList";
import styles from "./SearchForm.module.css";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  const fetchSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b42df0f22242970652b2d68a533bf5a8&language=en-US&query=${searchText}&page=1&include_adult=false`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContent(data.results);
        console.log(data.results);
      });
  };

  return (
    <div className={styles.searchForm}>
      <div className={styles.searchArea}>
        <input
          placeholder="Search movies here..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <svg
          className="svg-inline--fa fa-search fa-w-16"
          fill="#ccc"
          aria-hidden="true"
          width="25px"
          height="25px"
          data-prefix="fas"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </div>

      <div className={styles.breakline}></div>

      <div className={styles.btns}>
        <button>RESET</button>
        <button onClick={fetchSearch}>SEARCH</button>
      </div>

      <h3>Search Results</h3>
      {searchText !== "" ? (
        <div className={styles.forResultList}>
          {content.map((item) => (
            <ResultList
              backdrop_path={item.backdrop_path}
              altText={item.original_title}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
