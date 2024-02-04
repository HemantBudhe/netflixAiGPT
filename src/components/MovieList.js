import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    // console.log(movies);
  return (
    <div className='px-6'>
      <div>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
          <div className='flex overflow-x-auto w-full no-scrollbar'>
              {movies?.map((movie) => (
                 <div key={movie.id} className='flex-none pr-4'>
                  <MovieCard posterPath={movie.poster_path}/>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default MovieList;
