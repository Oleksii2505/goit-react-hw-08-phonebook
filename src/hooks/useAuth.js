import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from 'components/Redux/Auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
  
    return {
      isLoggedIn,
      isRefreshing,
      user,
    };
  };