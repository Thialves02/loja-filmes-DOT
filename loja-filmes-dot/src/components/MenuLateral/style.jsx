import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const MenuLateralContainer = styled.div`
    display:flex ;
    flex-direction:column;
    margin-top:58px;
    /* justify-content:center; */
    transition:1s ;
    position:fixed ;
    top:0px;
    padding: 0 15px;
    right:${(props) => props.right}px;
    background-color:#fff;
    height:100vh;
    width:400px;
    z-index:4;
    border: 2px solid #97bec2;

    ${media('mobile')}{
        width:100%;
    }
`

export const MenuLateralInfos = styled.div`
    display:flex;
    justify-content:space-between;
    margin:30px 0 ;

    p { 
        text-decoration:underline;
        color:#6558f5;
        cursor: pointer;
        font-size:18px ;
    }
`