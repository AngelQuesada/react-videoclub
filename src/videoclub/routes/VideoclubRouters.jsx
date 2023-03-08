import { Navigate, Route, Routes } from "react-router-dom"
import { MoviePage } from "../pages/MoviePage"
import { MoviesPage } from "../pages/MoviesPage"


export const VideoclubRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <MoviesPage /> }/>
      <Route path="movie" element={ <MoviePage /> }/>

      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}

