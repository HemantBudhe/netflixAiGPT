import React, { useEffect } from 'react';
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const Browse = () => {

  //Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    //when we console, object appears two times. why?
    // because of strict mode in index.js. React does extra rendering to check inconsistany between your call. it only happen in developing mode not in build mode. 
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
  return (
    <div>
      <Header/>j
    </div>
  );
}

export default Browse;
