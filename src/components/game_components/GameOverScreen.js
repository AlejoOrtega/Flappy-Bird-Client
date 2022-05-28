import styled from "styled-components"

const GameOverScreen = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;  

& .backdrop {
  background: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
}
& .title, 
& .score,
& button {
  position: absolute;
  z-index: 1;
  left: calc(50% - 102px);
  top: 40%;
  width: 205px;
  text-align: center;
  color: rgb(255, 255, 74);
  font-family: 'PixelarRegularW01-Regular';
  font-weight: normal;
}
& .title {
  margin-top: -65px;
  font-size: 55px;
}
& .score {
  font-size: 30px;
}
& button {
  margin-top: 50px;
  font-size: 24px;
  color: black;
  padding: 5px 25px;
  cursor: pointer;
  border: 0;
}
`

export default GameOverScreen;