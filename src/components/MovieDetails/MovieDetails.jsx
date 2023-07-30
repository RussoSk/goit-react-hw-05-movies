

import React, { useEffect, useRef, useState  } from 'react';
import { useParams, Outlet, useLocation,  Link } from 'react-router-dom';
import { StyledLink } from './StyledComponents';
import { getMovieDetails } from '../Api/Api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  console.log(location);
  console.log(backLinkHref);


  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovieDetails(data);
    });
  }, [movieId]);
  


  return (
    <div className={css.container}>
      <Link to={backLinkHref.current}  className={css.goBackButton}>
          GO BACK
        </Link>
      <div className={css.oneSection}>
      <div className={css.imageSection}>
        {movieDetails && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className={css.movieImage}
          />
        )}
      </div>

      <div className={css.infoSection}>
        {movieDetails && (
          <>
            <h2 className={css.movieTitle}>{movieDetails.title}</h2>
            <p className={css.movieRating}>
              Rating: {movieDetails.vote_average}
            </p>
            <p className={css.movieOverview}>{movieDetails.overview}</p>
            {movieDetails.genres && (
              <p className={css.movieGenres}>
                Genres:{' '}
                {movieDetails.genres.map(genre => genre.name).join(', ')}
              </p>
            )}
          </>
        )}
             <div className={css.buttonsSection}>
          <StyledLink to={`/movies/${movieId}/cast`} className={css.castButton}>
            Cast
          </StyledLink>
          <StyledLink
            to={`/movies/${movieId}/reviews`}
            className={css.reviewsButton}
          >
            Reviews
          </StyledLink>
        </div>
      </div>
 
      </div>
      <div className={css.tooSection}>
        

        <div className={css.contentSection}>
          <div className={css.castReviewsSection}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate, Outlet } from 'react-router-dom';
// import { StyledLink } from './StyledComponents';
// import { getMovieDetails } from '../Api/Api';
// import css from './MovieDetails.module.css';

// const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getMovieDetails(movieId).then(data => {
//       setMovieDetails(data);
//     });
//   }, [movieId]);

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div className={css.container}>
//       <button className={css.goBackButton} onClick={handleGoBack}>
//         Go Back
//       </button>
//       <div className={css.oneSection}>
//       <div className={css.imageSection}>
//         {movieDetails && (
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
//             alt={movieDetails.title}
//             className={css.movieImage}
//           />
//         )}
//       </div>

//       <div className={css.infoSection}>
//         {movieDetails && (
//           <>
//             <h2 className={css.movieTitle}>{movieDetails.title}</h2>
//             <p className={css.movieRating}>
//               Rating: {movieDetails.vote_average}
//             </p>
//             <p className={css.movieOverview}>{movieDetails.overview}</p>
//             {movieDetails.genres && (
//               <p className={css.movieGenres}>
//                 Genres:{' '}
//                 {movieDetails.genres.map(genre => genre.name).join(', ')}
//               </p>
//             )}
//           </>
//         )}
//              <div className={css.buttonsSection}>
//           <StyledLink to={`/movies/${movieId}/cast`} className={css.castButton}>
//             Cast
//           </StyledLink>
//           <StyledLink
//             to={`/movies/${movieId}/reviews`}
//             className={css.reviewsButton}
//           >
//             Reviews
//           </StyledLink>
//         </div>
//       </div>
 
//       </div>
//       <div className={css.tooSection}>
        

//         <div className={css.contentSection}>
//           <div className={css.castReviewsSection}>
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;
