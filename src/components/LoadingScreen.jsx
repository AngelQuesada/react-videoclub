import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
import { PulseLoader } from "react-spinners"

export const LoadingScreen = () => {

  const { isLoading } = useSelector( state => state.videoclub);
  const { status } = useSelector( state => state.auth);

  return (
    <>
      {
        isLoading || status === 'checking'
        ? <Grid sx={{
          width: '100%',
          position: 'fixed',
          height: '100%',
          opacity: '0.8',
          zIndex: '100',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        	<PulseLoader size='75px' color='#ffffff' />
        </Grid>
        : <></>
      }

    </>
  )
}
