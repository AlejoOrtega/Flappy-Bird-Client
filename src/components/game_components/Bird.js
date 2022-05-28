import styled from "styled-components"
//image
import character from '../../img/bird.png'

const Bird = styled.div`
  width: 40px;
  height: 30px;

  position: absolute;
  top:${props=> props.position}px;
  
  border-radius: 50%;
  background: url(${character});
  background-size: contain;
  background-repeat: no-repeat;
`

export default Bird;