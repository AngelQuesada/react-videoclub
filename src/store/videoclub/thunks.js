import { getAllMovies  } from "../../videoclub/helpers/getAllMovies";
import { rentMovie } from "../../videoclub/helpers/rentMovie";
import { returnMovie } from "../../videoclub/helpers/returnMovie";
import { setMovies, setMovieAsRented, setIsLoading, setMovieAsAvailable } from "./videoclubSlice"

export const startSetMovies = () => {
    
    return async( dispatch ) => {
        // dispatch( checkingCredentials() );

        const result = await getAllMovies();

        if (!result.ok) {
            // TODO: Stablish an error
        }

        dispatch( setMovies( result ) );
    }
}

export const startRentMovie = (movieId, uid) => {

    return async( dispatch ) => {

        const result = await rentMovie(movieId, uid);
        
        if (!result) {
            console.log('Trying to rent a movie failed');
            return;
        }

        dispatch( setMovieAsRented({movieId, uid}) );

    }
}

export const startReturnMovie = (movieId) => {

    return async( dispatch ) => {

        const result = await returnMovie(movieId);
        
        if (!result) {
            console.log('Trying to set a movie as available failed');
            return;
        }
        
        dispatch( setMovieAsAvailable({movieId}) );

    }
}