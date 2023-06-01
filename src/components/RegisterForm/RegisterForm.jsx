import { useDispatch } from 'react-redux';
import { register } from 'components/Redux/Auth/operations';
import { RegContainer, RegForm, Button, Input } from './RegisterForm.styled';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegContainer>
      <RegForm onSubmit={onFormSubmit} autoComplete="off">
      <label>
        <Input type="text" name="name" placeholder="Name" />
      </label>
      <label>
        <Input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        <Input type="password" name="password" placeholder="Password" />
      </label>
      
        <Button type="submit">Register</Button>
      </RegForm>
    </RegContainer>
    
  );
};