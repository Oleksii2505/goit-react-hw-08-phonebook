import { AuthNavContainer } from './AuthNav.styled';
import { Link } from 'components/AppBar/AppBar.styled';

const AuthNav = () => {
  return (
    <AuthNavContainer>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </AuthNavContainer>
  );
};

export default AuthNav;