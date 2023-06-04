import LoginForm from 'components/LoginForm/LoginForm';
import { RegTitle, RegisterContainer } from '../Register/Register.styled';


const Login = () => {
  return (
    <RegisterContainer>
        <RegTitle>Sign In</RegTitle>
        <LoginForm />
    </RegisterContainer>
  );
};

export default Login;