import styled from '@emotion/styled';
import { NavLink } from "react-router-dom"; 

export const Header = styled.header`
width: 1200px;
margin: 0 auto;
display: flex;
justify-content: space-between;
padding: 15px 25px;
background-color: #5df0eb;
box-shadow: 10px -15px 110px -9px rgba(0,0,0,0.75);
margin-bottom: 12px;
`;

export const Link = styled(NavLink)`
cursor: pointer;
font-size: 25px;
line-height: 2;
font-weight: 500;
color: inherit;
text-decoration: none;
&.active {
    color: #4321b0;
}
:hover,
:focus {
    color: #4321b0;
}   
`;