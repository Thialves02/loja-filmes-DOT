import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const FilmesContainer = styled.section`
    width:80%;

    div:first-child{
        display:flex;
        flex-wrap:wrap ;
        justify-content:center ;

        ${media('mobile')}{
            /* width:100%; */
            justify-content:center;
        }
    }
`