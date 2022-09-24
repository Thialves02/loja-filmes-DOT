import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const MenuLateralContainer = styled.div`
    display:flex ;
    flex-direction:column;
    justify-content:center;
    transition:1s ;
    position:fixed ;
    top:0px;
    padding: 0 10px;
    right:${(props) => props.right}px;
    background-color:#8dd7cf;
    height:100vh;
    width:400px;
    z-index:4;

    svg {
        height:25px ;
        color: #ffff;
    }

    ${media('mobile')}{
        width:100%;
    }
`

export const MenuLateralInfos = styled.div`
    display:flex;
    justify-content:space-between;
`