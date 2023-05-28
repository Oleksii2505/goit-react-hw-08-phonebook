import { useDispatch } from 'react-redux';
import { logOut } from 'components/Redux/Auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, LogOutButton, UserMes } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
  
    return (
      <Wrapper>
        <UserMes>Welcome, {user.name}</UserMes>
        <LogOutButton type="button" onClick={() => dispatch(logOut())}>Logout</LogOutButton>
      </Wrapper>
    );
  };