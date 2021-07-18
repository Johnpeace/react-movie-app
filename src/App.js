import React, { useState } from "react";

import "./App.css";
import { moviesList } from "./assets/mockData";
import SearchBar from "./components/search-bar/search-bar.component";
import MoviesList from "./components/movies-list/movies-list.component";

import AddMovie from './components/add-movie/add-movie.component';

function App() {
  const [movieList, setMovieList] = useState(moviesList);
  const [searchWord, setSearchWord] = useState("");
  const [ratingSearch, setRatingSearch] = useState(0);

  const addMovie = newMovie => setMovieList([...movieList, newMovie]);
  const handleSearch = (event) => setSearchWord(event.target.value);

  return (
    <div className="container">
      <SearchBar
        handleSearch={handleSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />
      <MoviesList
        moviesArray={
          searchWord
            ? movieList.filter((movie) =>
                movie.title.toLowerCase().includes(searchWord.toLowerCase())
              )
            : ratingSearch > 1
            ? movieList.filter((movie) => movie.rate >= ratingSearch)
            : movieList
        }
      />
      <AddMovie handleAdd={addMovie} />
    </div>
  );
}

export default App;