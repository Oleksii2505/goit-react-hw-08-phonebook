import styled from '@emotion/styled';

export const RegContainer = styled.div`
min-height: calc(20vh - 100px);
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
margin-left: auto;
margin-right: auto;
padding: 20px;
box-shadow: 10px -15px 110px -9px rgba(242,247,247,1);
`;

export const RegForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
width: 450px;
`;

export const Input = styled.input`
padding: 10px;
font-size: 16px;
border: none;
border-radius: 4px;
width: 400px;
`;

export const Button = styled.button`
appearance: none;
cursor: pointer;
border: 0;
border-radius: 4px;
background: #04c7a3;
color: #fff;
padding: 10px;
font-size: 20px;
text-transform: capitalize;
:hover,
:focus {
    background: #039177;
}
`;