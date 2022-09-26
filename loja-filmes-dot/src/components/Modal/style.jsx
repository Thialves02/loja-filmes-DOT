import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const ModalContainer = styled.div`
    position: fixed;
    top:0 ;
    display:flex ;
    justify-content :center;
    align-items :center;
    width:100vw;
    height:100vh;
    background-color:#6161619e;
    z-index:10;
`

export const ModalConteudo = styled.div`
    display:flex ;
    flex-direction:column;
    justify-content:space-around ;
    align-items:center;
    position:fixed;
    background-color:#fff;
    width:400px;
    height:200px;
    border: 2px solid #97bec2;
    padding:10px ;

    ${media('mobile')}{
        width:80%;
    }

    h2 {
        text-align:center;
    }
`