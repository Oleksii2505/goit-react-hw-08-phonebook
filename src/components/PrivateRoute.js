import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({children}) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    if (!isLoggedIn && !isRefreshing) {
        return <Navigate to="/"/>
    }
   return children;
}
