import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const FilmeMinContainer = styled.div`
    display:flex ;
    align-items:center;
    justify-content:space-between;
    margin:10px 0 ;
    overflow:hidden;
    padding:0 10px ;

    h2{
        padding:5px 0;
        font-size:18px;
        text-align: center;
        max-width:100px;
        min-width:100px;
        max-height:50px;
    }

    img{
        width:50px;
        height:50px;
    }

    svg {
        cursor:pointer;
        height:20px;
    }
`