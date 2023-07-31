
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const location = useLocation();
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => handleMovieClick(movie)}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
      {selectedMovie && (
        <div>
          <h4>Selected Movie Details:</h4>
          <p>Title: {selectedMovie.title}</p>
          <p>Release Date: {selectedMovie.release_date}</p>
          <p>Overview: {selectedMovie.overview}</p>
         
        </div>
      )}
    </div>
  );
};

export default MoviesList;


