import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies} from "../utils/movieSlice";

const usePopularMovies = () =>{
    //Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getPopularMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    //when we console, object appears two times. why?
    // because of strict mode in index.js. React does extra rendering to check inconsistany between your call. it only happen in developing mode not in build mode. 
    dispatch(addPopularMovies(json.results));
  };

  useEffect(()=>{
    getPopularMovies();
  },[])
}

export default usePopularMovies;
