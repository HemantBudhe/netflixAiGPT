import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () =>{
    //Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    //when we console, object appears two times. why?
    // because of strict mode in index.js. React does extra rendering to check inconsistany between your call. it only happen in developing mode not in build mode. 
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=>{
    //Memoization
    !nowPlayingMovies && getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;
