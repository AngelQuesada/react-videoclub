
import { FirebaseDB } from "../../firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { fireAlert } from "../../helpers/sweetAlert";

export const returnMovie = async (movieId) => {

    let title = '';

    try {
        const movieRef = doc(FirebaseDB, "movies", movieId);
        
        await updateDoc(movieRef, {rented:false});

        const movieSnap = await getDoc(movieRef);

        title = movieSnap.data().title;

    } catch (error) {
        fireAlert( 'error', `Error!`, error );
        return false;
    }

    fireAlert( 'success', `${title} returned!`, 'You returned the movie succesfully' );

    return true;
}