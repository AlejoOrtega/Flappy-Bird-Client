import styled from "styled-components"
//image
import block from '../../img/blockbg.jpg'
//Constants
import {BLOCK_WIDTH} from '../../constants/constants'

const UpperBlock = styled.div.attrs(props => ({
    style:{
      width: BLOCK_WIDTH + 'px',
      height: props.height + 'px',
  
      position: 'relative',
      left: props.position + 'px',
  
      background: `url(${block})`,
      backgroundSize: 'contain',
    }
  }))``;
 
export default UpperBlock;