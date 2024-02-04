import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <img 
      className='w-48 flex-shrink-0'
      alt="Movie card"
      src={IMG_CDN_URL+ posterPath}
      />
    </div>
  );
}

export default MovieCard;
