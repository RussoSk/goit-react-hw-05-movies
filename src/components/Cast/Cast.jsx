
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../Api/Api';
import css from './Cast.module.css'
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
 
    getMovieCredits(movieId).then((data) => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <div className={css.castContainer}>
    <h3 className={css.castTitle}>Cast</h3>
    <ul className={css.actorList}>
      {cast.map((actor) => (
        <li key={actor.id} className={css.actorCard}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
            className={css.actorImage}
          />
          <p className={css.actorName}>{actor.name}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Cast;






