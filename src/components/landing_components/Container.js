import styled from "styled-components"
import backGround from '../../img/landing-image.png'

const Container = styled.div`
    width: 100%;
    height: 890px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${backGround});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
export default Container;