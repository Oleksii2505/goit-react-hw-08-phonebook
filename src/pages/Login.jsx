import LoginForm from 'components/LoginForm/LoginForm';
import { RegisterContainer } from './Register.styled';


const Login = () => {
  return (
    <RegisterContainer>
        <h2>Sing In</h2>
        <LoginForm />
    </RegisterContainer>
  );
};

export default Login;