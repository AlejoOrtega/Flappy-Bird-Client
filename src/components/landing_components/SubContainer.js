import styled from "styled-components"
import {GAME_WIDTH} from '../../constants/constants'

const SubContainer = styled.div`
width: ${GAME_WIDTH}px;
height: 50%;
overflow:hidden;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

background: rgb(0,0,0, .7);
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`
 
export default SubContainer;