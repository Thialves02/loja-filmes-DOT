import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const ModalContainer = styled.div`
    display:flex ;
    flex-direction:column;
    justify-content:space-around ;
    align-items:center;
    position:fixed;
    background-color:#fff;
    width:400px;
    height:200px;
    z-index:10 ;
    border: 2px solid #97bec2;

    h2 {
        text-align:center;
    }
`

export const FilmesContainer = styled.div`
    max-height:60%;
    overflow-y:scroll;
`