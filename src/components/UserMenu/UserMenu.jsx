import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/operations';
import { useAuth } from 'hooks';
import { UserWrapper, LogOutButton, UserMes } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
  
    return (
      <UserWrapper>
        <UserMes>Welcome, {user.name}</UserMes>
        <LogOutButton type="button" onClick={() => dispatch(logOut())}>Logout</LogOutButton>
      </UserWrapper>
    );
  };