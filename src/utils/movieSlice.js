import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        popularMovies: null,
        nowPlayingMovies: null,
        trailerVideo: null,
        upcomingMovies : null,
        showMovieTrailer:true
    },
    reducers:{
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) =>{
            state.popularMovies = action.payload;
        },
        addUpcomingMovies : (state,action) =>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload;
        },
        toggleShowMovieTrailer :(state) =>{
            state.showMovieTrailer =!state.showMovieTrailer;
        }
        
    }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, toggleShowMovieTrailer } =moviesSlice.actions;

export default moviesSlice.reducer;