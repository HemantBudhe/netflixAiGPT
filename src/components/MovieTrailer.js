import React from 'react';
import { useSelector } from 'react-redux';

const MovieTrailer = () => {

    const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  return (
    <div>
    <iframe
      className="w-[100%] aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?&autoplay=1&mute=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
    </div>
  );
}

export default MovieTrailer;
