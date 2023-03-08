import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    isLoading: false
}

export const videoclubSlice = createSlice({
    name: 'videoclub',
    initialState,
    reducers: {
        setMovies: ( state, { payload } ) => {
            state.movies = payload
            state.isLoading = false;
        },
        setMovieAsRented: ( state, {payload} ) => {
            state.isLoading = true;

            const movieId = payload.movieId;
            const uid = payload.uid;

            const allMovies = state.movies.map(movie => {
                if (movie.id === movieId) {
                    movie.rented = uid;
                }

                return movie;
            })

            state.movies = allMovies;
            
            state.isLoading = false;
        },
        setMovieAsAvailable: ( state, {payload} ) => {
            state.isLoading = true;

            const movieId = payload.movieId;

            const allMovies = state.movies.map(movie => {
                if (movie.id === movieId) {
                    movie.rented = false;
                }

                return movie;
            })

            state.movies = allMovies;
            
            state.isLoading = false;
        },
        setIsLoading: ( state, { payload } ) => {
            state.isLoading = payload;
        }

    }
});

export const { 
    setMovies, 
    setMovieAsRented, 
    setIsLoading,
    setMovieAsAvailable
} = videoclubSlice.actions;