import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const InputsContainer = styled.div`
    display:flex ;
    flex-wrap:wrap;
    width:40vw ;
    max-width:600px;

    h1 {
        margin-bottom:30px ;
    }

    form {
        width:100%;
        display:flex ;
        flex-wrap: wrap;
        justify-content:space-between;
        align-items:center;
    }

    button {
        display:none ;
    }

    ${media('desktop')}{
        width:80vw ;
    }

    ${media('mobile')}{
        width:90vw ;
    }
`