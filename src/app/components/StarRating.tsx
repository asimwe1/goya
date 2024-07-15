"use client"; // Mark this file as a client component

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="flex my-2 cursor-pointer">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <FontAwesomeIcon
            key={index}
            icon={ratingValue <= (hover || rating) ? solidStar : regularStar}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
            className="text-blue-800 transition-all duration-200"
            style={{ marginRight: '0.5rem' }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
