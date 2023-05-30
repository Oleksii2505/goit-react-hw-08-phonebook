import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { RegisterContainer } from "./Register.styled";

const Register = () => {
    return (
      <RegisterContainer>
          <h2>Sing Up</h2>
          <RegisterForm />    
      </RegisterContainer>
    );
  };
  
export default Register;