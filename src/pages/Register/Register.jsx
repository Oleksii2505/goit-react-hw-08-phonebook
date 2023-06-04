import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { RegisterContainer, RegTitle } from "./Register.styled";

const Register = () => {
    return (
      <RegisterContainer>
          <RegTitle>Sign Up</RegTitle>
          <RegisterForm />    
      </RegisterContainer>
    );
};
  
export default Register;