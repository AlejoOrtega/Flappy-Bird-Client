import styled from "styled-components"

const Button = styled.button`
    width: 205px;
    text-align: center;
    color: rgb(255, 255, 74);
    font-family: 'PixelarRegularW01-Regular';
    font-weight: normal;    
    font-size: 24px;
    color: ${props => props.textColor};
    background-color: ${props => props.color};
    padding: 5px 25px;
    cursor: pointer;
    border: 0;
  `

export default Button;