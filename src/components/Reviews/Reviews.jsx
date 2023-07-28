
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../Api/Api';
import css from './Reviews.module.css'

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
  
    getMovieReviews(movieId).then((data) => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <div className={css.reviewSection}>
      <h3 className={css.reviewTitle}>Reviews</h3>
      {reviews.length > 0 ? (
        <ul className={css.reviewList}>
          {reviews.map((review) => (
            <li className={css.reviewItem} key={review.id}>
              <h4>{review.author}</h4>
              <p className={css.reviewContent}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.lastReviewItem}>No reviews found.</p>
      )}
    </div>
  );
};

export default Reviews;


