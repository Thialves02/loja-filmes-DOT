import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const FilmesContainer = styled.main`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    width:80%;

    ${media('mobile')}{
        width:100%;
        justify-content:center;
    }
`