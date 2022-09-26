import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const CheckoutContainer = styled.div`
    margin-top:100px;
    display:flex ;
    /* width:80%; */
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;

    ${media('desktop')}{
        flex-direction:column;
    }
`