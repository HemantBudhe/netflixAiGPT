import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

function SecondaryConatainer() {
  const movies = useSelector((store) =>store.movies);
  
  if (!movies) {
    // Render a loading indicator or return null
    return null;
  }
  
  return (
    <div className='  bg-black'> 
    <div className=' -mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
    </div>
      {
        /*
        MovieCards * n
        MovieList - Popular
                  - NowPlaying
                  - Trending
                  - Horror
                  
         */
      }
    </div>
  );
}

export default SecondaryConatainer;
