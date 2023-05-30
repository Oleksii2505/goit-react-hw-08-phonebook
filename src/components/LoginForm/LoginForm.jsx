import { useDispatch } from 'react-redux';
import { logIn } from 'components/Redux/Auth/operations';

import {RegForm} from 'components/RegisterForm/RegisterForm.styled';
import { Button } from 'components/RegisterForm/RegisterForm.styled'; 

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
    <RegForm onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        <input
          type='password'name="password" placeholder="Password" /> 
      </label>
      <Button type="submit">Login</Button>
    </RegForm>
  );
};

export default LoginForm;