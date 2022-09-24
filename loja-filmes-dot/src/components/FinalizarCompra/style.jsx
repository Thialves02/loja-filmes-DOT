import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const FinalizarCompraContainer = styled.div`
    padding-top:70px;
    max-width:500px;
    width:40vw ;
    height:60vh ;

    ${media('desktop')}{
        width:80vw ;
    }
`

export const FilmesContainer = styled.div`
    min-height:300px;
    max-height:60%;
    overflow-y:auto;

    h2{
        text-align:center;
    }
`