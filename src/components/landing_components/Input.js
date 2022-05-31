import styled from "styled-components";

const Input = styled.input`
font-size: 18px;
color: ${props => props.color};
padding: ${props => props.padding};
margin: ${props => props.margin};
background: ${props => props.backgroundColor};
border: none;
border-radius: 3px;
width: ${props => props.width};

::placeholder {
  color: ${props => props.placeholderColor};
}
`;

Input.defaultProps = {
  color: "white",
  backgroundColor: "#4E944F",
  placeholderColor: "white",
  padding: '10px',
  margin: '10px',
}

export default Input;