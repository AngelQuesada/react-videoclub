import { AssignmentReturn } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startReturnMovie } from "../../store/videoclub/thunks";
import { setIsLoading } from "../../store/videoclub/videoclubSlice";

export const SidebarItem = ({id, title, rented}) => {

    const dispatch = useDispatch();

    const { uid } = useSelector( state => state.auth );

    const onClickReturnMovieButton = () => {
        dispatch( setIsLoading(true) );

        if (rented !== uid) {
            alert('You didnt rent this movie !');
            // TODO: Maybe you should show another kind of alert
            dispatch( setIsLoading(false) );
        }
      
        dispatch( startReturnMovie( id ));
    }

    return (
        <ListItem disablePadding>
            <ListItemButton >
                <Grid container>
                    <ListItemText >{title}</ListItemText>
                    <ListItemText ></ListItemText>
                </Grid>
                <ListItemIcon onClick={onClickReturnMovieButton} sx={{display:'flex', justifyContent:'end'}}>
                    <AssignmentReturn />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    )
}


