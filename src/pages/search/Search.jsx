import React from "react";
import SearchForm from "./SearchForm";
import styles from "./Search.module.css";
import NavBar from "../browse/NavBar";

const Search = () => {
  return (
    <div className={styles.search}>
      <NavBar />
      <SearchForm />
    </div>
  );
};

export default Search;
