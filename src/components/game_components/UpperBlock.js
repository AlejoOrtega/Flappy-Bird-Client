import styled from "styled-components"
//image
import block from '../../img/blockbg.jpg'
//Constants
import {BLOCK_WIDTH} from '../../constants/constants'

const UpperBlock = styled.div`
width: ${BLOCK_WIDTH}px;  
height: ${props => props.height}px;    

position: relative;
left: ${props => props.position}px;

background: url(${block});
background-size: contain;
`
 
export default UpperBlock;