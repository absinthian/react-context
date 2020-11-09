import React, { createContext, useState } from 'react';

export const MovieContext = createContext({});

export const MovieProvider = (props: any) => {
    const [movies, setMovies] = useState([
        {
          name: 'HP',
          price: 10,
          id: 23124,
        },
        {
          name: 'GT',
          price: 10,
          id: 876541,
        },
        {
          name: 'GBU',
          price: 10,
          id: 56442,
        },
      ]);
    
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}

