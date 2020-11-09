import React, { useContext } from 'react';
import { MovieContext } from './MovieContext'

const Nav = () => {
const [movies, setMovies] = useContext(MovieContext);

  return (
    <div style={{color: "green"}}>
      this is from Nav start ----
      <h1>dev ed</h1>
      <h2>Movies size: {movies.length}</h2>
      end Nav ----
    </div>
  );
};

export default Nav;
