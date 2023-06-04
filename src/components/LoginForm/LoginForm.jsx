import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/Auth/operations';
import {RegContainer, RegForm, Button, Input} from 'components/RegisterForm/RegisterForm.styled';


const LoginForm = () => {
 
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegContainer>
      <RegForm onSubmit={handleSubmit} autoComplete="off">
      <label>
        <Input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        <Input
          type='password'name="password" placeholder="Password" /> 
      </label>
        <Button type="submit">Login</Button>
      </RegForm>
    </RegContainer>
    
  );
};

export default LoginForm;