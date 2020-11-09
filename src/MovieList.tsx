import React, { useContext, useState } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div style={{color: "blue"}}>
      <br/>
      items from movie list compoenent:
      {movies.map((movie: any) => (
        <Movie name={movie.name} price={movie.price} key={movie.id}/>
      ))}
      end movie list
    </div>
  );
};

export default MovieList;
