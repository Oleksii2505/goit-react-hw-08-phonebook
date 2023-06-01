import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

// export const RestrictedRoute = ({children}) => {
//     const { isLoggedIn } = useAuth();
//     if (isLoggedIn) {
//         return <Navigate to="/contacts"/>
//     }
//    return children;
// }

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useAuth();
  
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  };