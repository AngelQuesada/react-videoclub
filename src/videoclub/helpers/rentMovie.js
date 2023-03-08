
import { FirebaseDB } from "../../firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { fireAlert } from "../../helpers/sweetAlert";

export const rentMovie = async (movieId, uid) => {

  let title = '';

  try {
    const movieRef = doc(FirebaseDB, "movies", movieId);
    
    await updateDoc(movieRef, {rented:uid})

    const movieSnap = await getDoc(movieRef);

    title = movieSnap.data().title;

  } catch (error) {
    console.log(error);
    return false;
  }

  fireAlert( 'success', `${title} rented!`, 'You rented the movie succesfully' );

  return true;
}