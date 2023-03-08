import { useDispatch, useSelector } from "react-redux";
import { startRentMovie, startReturnMovie } from "../../store/videoclub/thunks";
import { setIsLoading } from "../../store/videoclub/videoclubSlice";

export const useMovie = ({id, poster_path, rented}) => {
  const dispatch = useDispatch();

  const { uid } = useSelector( state => state.auth );
  
  const onClickRentMovieButton = () => {
    dispatch( setIsLoading(true) );
    dispatch( startRentMovie( id, uid ))
  }

  const onClickReturnMovieButton = () => {

    dispatch( setIsLoading(true) );
    
    if (rented !== uid) {
      alert('You didnt rent this movie !');
      dispatch( setIsLoading(false) );
      // TODO: Maybe you should show another kind of alert
    }

    dispatch( startReturnMovie( id ))
  }
  
  const getButtonProperties = () => {
  
    switch (true) {
      case rented === uid:
        return {
          onClick:onClickReturnMovieButton,
          buttonName: 'Return it',
          color: "secondary",
          disabled: false
        }
      case rented !== false:
        return {
          onClick: null,
          buttonName: 'Rented',
          color: "primary",
          disabled: true
        }
      default:
        return {
          onClick:onClickRentMovieButton,
          buttonName: 'Rent it',
          color: "primary",
          disabled: false
        }
    }
  }
  
  const buttonProperties = getButtonProperties();
    
  const posterUrl = `${process.env.REACT_APP_THEMOVIEDB_BASE_URL}${poster_path}`;

  return {
    posterUrl,
    buttonProperties
  }
}

