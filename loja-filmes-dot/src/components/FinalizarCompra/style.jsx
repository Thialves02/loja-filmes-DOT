import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const FinalizarCompraContainer = styled.div`
    padding-top:70px;
    max-width:600px;
    width:40vw ;
    height:60vh ;

    ${media('desktop')}{
        width:80vw ;
        max-width:600px;

        button { 
            margin-bottom:50px ;
        }
    }

    ${media('mobile')}{
        width:90vw ;
        margin-bottom:100px; 
    }
`

export const InfosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin-right:15px ;
    margin-left:10px ;
    width:100%;

    p {
        font-weight:bold ;
    }

    p:nth-child(3){
        margin-left:20px ;
    }

    ${media('mobile')}{
        p:nth-child(2){
            margin-left:10px ;
        }

        p:nth-child(3),p:nth-child(4){
            text-align:center
        }
    }
    
`

export const FilmesContainer = styled.div`
    min-height:300px;
    max-height:60%;
    overflow-y:auto;

    h2 {
        text-align:center;
        /* padding-top:150px ; */
    }
`