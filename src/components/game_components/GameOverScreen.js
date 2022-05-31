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
& .buttons{
  position: absolute;
  z-index: 1;
  left: calc(50% - 102px);
  width: 205px;
  text-align: center;
  color: rgb(255, 255, 74);
  font-family: 'PixelarRegularW01-Regular';
  font-weight: normal;
}
& .title {
  margin-top: -35px;
  font-size: 55px;
  top: 30%;
  color: #F9D923;
}
& .score {
  font-size: 30px;
  top: 35%;
}
& .buttons {
  top: 40%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
`

export default GameOverScreen;