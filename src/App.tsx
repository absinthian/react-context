import * as React from 'react';
import { MovieContext } from './MovieContext';
import MovieList from './MovieList';
import Nav from './Nav';

const App = () => {
const [movies, setMovies] = React.useContext(MovieContext);

  return (
      <div style={{color: "red"}}>
        Moveies length from App compoenent: {movies.length}
        <Nav />
        <MovieList />
      </div>
  );
};

export default App;
