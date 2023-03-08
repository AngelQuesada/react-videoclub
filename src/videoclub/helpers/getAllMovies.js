import { collection, getDocs } from "firebase/firestore/lite";

import { FirebaseDB } from "../../firebase/config";

export const getAllMovies = async () => {

  const collectionRef = collection(FirebaseDB, `movies`);

  const docs = await getDocs(collectionRef);

  const movies = [];

  docs.forEach( doc => {
    const movie = doc.data();
    movie.id = doc.id;

    movies.push(movie);
  })
  
  return movies;
}