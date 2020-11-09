import React from 'react';

const Movie = ({ name, price }: any) => {
return <div>
        <div>{name}</div>
        <div>{price}</div>
    </div>;
};

export default Movie;
