import React from 'react';
import Header from './Header';

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from "./MainContainer";
import SecondaryConatainer from './SecondaryConatainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import MovieTrailer from './MovieTrailer';

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const showMovieTrailer = useSelector((store) =>store.movies.showMovieTrailer);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    
    <div> 
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        // <>{
        //   showMovieTrailer ? (
        //     <MovieTrailer/>
        //   ):(
            <>
            <MainContainer />
            <SecondaryConatainer />
            </>
        //   )
        // }   
        // </>
      )}
    

      {/*
        MainContainer
         - VideoBackground
         - VideoTitle
        SecondaryContainer
          - MovieList * n
          - cards * n
  */}
    </div>
  );
}

export default Browse;
