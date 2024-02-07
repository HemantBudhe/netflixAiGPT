import React from 'react';
import {toggleShowMovieTrailer} from "../utils/movieSlice";
import { useDispatch } from 'react-redux';

const VideoTitle = ({title, overview}) => {

  const dispatch =useDispatch();
  const handleshowMovieTrailer = ()=>{
    dispatch(toggleShowMovieTrailer());
    
  }
  return (
    <div className="w-[100%] aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="inline-block py-6 text-3xl w-1/2">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80"
        onClick={handleshowMovieTrailer}>
           Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
