import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const InputsContainer = styled.div`
    display:flex ;
    flex-wrap:wrap;
    width:40vw ;

    h1 {
        margin-bottom:20px ;
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
        width:70vw ;
    }
`