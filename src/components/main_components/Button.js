import styled from "styled-components"

const Button = styled.button`
    width: 100px;
    font-family: 'PixelarRegularW01-Regular';
    font-weight: normal;    
    font-size: 18px;
    color: ${props => props.textColor};
    background-color: ${props => props.color};
    padding: 5px 5px;
    cursor: pointer;
    border: 0;
  `

export default Button;