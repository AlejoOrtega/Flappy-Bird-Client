import styled from "styled-components"
//image
import world from '../../img/world.png'
//Constants
import {GAME_WIDTH} from '../../constants/constants'

const Game = styled.div`
  width: ${GAME_WIDTH}px;
  height: 890px;
  border: 3px solid black;
  overflow:hidden;
  background: url(${world});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
 
export default Game;