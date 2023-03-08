import { Button, Grid, Paper, Typography } from "@mui/material"
import { useMovie } from "../hooks/useMovie"



export const Movie = ({id, title, poster_path, rented}) => {

  const {posterUrl, buttonProperties} = useMovie({id, poster_path, rented});

  return (
  <Grid item>
    <Paper sx={{padding: 3, width: '250px', height: '500px'}} elevation={3}>
			<Typography 
				sx={{
					height:'75px', 
					display:'flex',
					alignItems:'center',
					justifyContent:'center',
					fontWeight:'bold'
					}} variant="body1">{title}
			</Typography>
      <hr/>
			<img style={{width:'200px', height: '300px'}} src={posterUrl} alt={title} />
			<Grid>
				<Button 
				onClick={buttonProperties.onClick}
				disabled={buttonProperties.disabled}
				color={buttonProperties.color}
				variant='contained'
				fullWidth
				type='submit'
				>
				{buttonProperties.buttonName}
				</Button>
			</Grid>
    </Paper>
  </Grid>
  )
}
// ? <Button 
// onClick={onClickRentMovieButton}
// variant='contained' 
// fullWidth
// type='submit'
// >