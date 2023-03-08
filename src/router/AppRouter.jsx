import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRouters";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { LoadingScreen } from '../components/LoadingScreen'
import { VideoclubRoutes } from "../videoclub/routes/VideoclubRouters";

export const AppRouter = () => {

    const { status } = useCheckAuth();
    
    if ( status === 'checking' ) {
        return <LoadingScreen />
    }

    return (
        <Routes>

            {
                (status === 'authenticated')
                ?   <Route path="/*" element={ <VideoclubRoutes /> }/>
                :   <Route path="/auth/*" element={ <AuthRoutes /> }/>
            }

            <Route path='/*' element={ <Navigate to='/auth/login' /> }/> 

        </Routes>
    )
}

