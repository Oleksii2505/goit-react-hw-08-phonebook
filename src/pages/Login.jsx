import LoginForm from 'components/LoginForm/LoginForm';
import { RegTitle, RegisterContainer } from './Register.styled';


const Login = () => {
  return (
    <RegisterContainer>
        <RegTitle>Sing In</RegTitle>
        <LoginForm />
    </RegisterContainer>
  );
};

export default Login;