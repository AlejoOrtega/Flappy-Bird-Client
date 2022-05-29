import styled from "styled-components"
//image
import block from '../../img/blockbg.jpg'
//Constants
import {BLOCK_WIDTH, HOLE} from '../../constants/constants'

const BottomBlock = styled.div.attrs(props => ({
  style:{
    width: BLOCK_WIDTH + 'px',
    height: '100%',

    position: 'relative',
    top: HOLE + 'px',
    left: props.position + 'px',

    background: `url(${block})`,
    backgroundSize: 'contain',
  }
}))``;

export default BottomBlock;