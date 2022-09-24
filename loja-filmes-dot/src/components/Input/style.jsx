import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const InputContainer = styled.div`
    margin-top:100px;
    position:relative;
    /* background-color:red; */
    z-index:10;
    height:30px ;
    input {
        position:absolute;
        padding:0 10px ;
        top:0;
        left:0; 
        height:37px;
        outline:none;
        border-radius:5px;
        border: 2px solid #97bec2;
        transition: .3s;
        z-index:2;
        background-color:transparent;

        &:focus ~ label{
            color:#6558f5 ;
        }

        &:focus ~ label, &:valid ~ label{
            top:-.7rem;
            left:.5rem;
            font-size:17px;
            background-color:#fff ;
            font-weight:bold;
            z-index:2
        }

        &:focus{
            border: 2px solid #6558f5;
        }
    }

    input.grande {
        width:100%;
    }

    input.medio {
        width:40%;
    }

    input.pequeno {
        width:25%;
    }

    label{
        font-size:20px;
        position:absolute;
        left:1rem ;
        top:.4rem ;
        padding:0 .25rem;
        z-index:1;
        color:#97bec2 ;
        transition: .3s;
    }

    span {
        position:absolute;
        top:40px ;
        color:red;
    }
`