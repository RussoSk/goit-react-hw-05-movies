
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { searchMovies } from '../../Api/Api';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Виконання пошуку фільмів за ключовим словом (searchQuery)
      const results = await searchMovies(searchQuery);

      
      setSearchResults(results.results);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Відображення списку фільмів  */}
      {isSubmitted && searchResults.length > 0 && (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
              </Link>
            </li>
          ))}
          <Outlet />
        </ul>
      )}
    </div>
  );
};

export default Movies;







