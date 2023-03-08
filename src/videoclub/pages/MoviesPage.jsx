import { Grid } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startSetMovies } from "../../store/videoclub/thunks"
import { Movie } from "../components/Movie"
import { VideoclubLayout } from "../layout/VideoclubLayout"

export const MoviesPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startSetMovies());
  }, [])

  const movies = useSelector(state => state.videoclub.movies);
  
  return (
    <>
      <VideoclubLayout>
        <Grid container sx={{display:'flex', justifyContent:'center'}} spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            movies.length
            ? movies.map( movie => {
                return (
                  <Movie key={movie.id} {...movie} />
                )
              })
            : <h3>No hay películas que mostrar</h3>

          }
        </Grid>
      </VideoclubLayout>
    </>
  )
}
