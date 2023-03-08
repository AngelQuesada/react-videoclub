import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = ( {drawerWidth = 240} ) => {

  const { displayName, uid } = useSelector(status => status.auth);

  const { movies } = useSelector(status => status.videoclub);
  
  const getRentedMovies = () => {
    if (movies.length) {
      return movies.filter( movie => (
        movie.rented === uid
      ))
    } 
    return [];
  }

  const rentedMovies = getRentedMovies();

  return (
    <Box 
      component='nav'
      sx={{ 
          width: {
            sm: drawerWidth 
          },
          flexShrink: { 
            sm: 0 
          }
        }}>
      <Drawer 
        variant='permanent'
        open
        sx={{
          display: { 
            xs: 'block' 
          },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            { displayName }
          </Typography>
        </Toolbar>

        <Divider />
        <List>
          {   
            rentedMovies.length
            ? rentedMovies.map(rentedMovie => (
              <SidebarItem key={rentedMovie.id} {...rentedMovie} />
            ))
            : <Typography align="center" variant="h6">You dont have any movie rented !</Typography>

          }
        </List>
      </Drawer>
    </Box>
  )
}
