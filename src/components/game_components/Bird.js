import styled from "styled-components"
//image
import character from '../../img/bird.png'

const Bird = styled.div.attrs(props => ({
  style:{
    width: '40px',
    height: '30px',
    position: 'absolute',
    top: props.position + 'px',
    borderRadius: '50%',
    background: `url(${character})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }
}))``;

export default Bird;