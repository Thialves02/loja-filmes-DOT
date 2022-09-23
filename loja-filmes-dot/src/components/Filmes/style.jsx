import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const FilmesContainer = styled.main`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    transition:10s;
    background-color: #b44848;
    width:80%;

    ${media('tablet')}{
        font-size:13px ;
    }

    ${media('mobile')}{
        font-size:12px ;
    }
`