import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

// export const PrivateRoute = ({children}) => {
//     const { isLoggedIn, isRefreshing } = useAuth();
//     if (!isLoggedIn && !isRefreshing) {
//         return <Navigate to="/"/>
//     }
//    return children;
// }

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useAuth();
    const isRefreshing = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;
  
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };