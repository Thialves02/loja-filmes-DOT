import styled from "styled-components"

export const ButtonContainer = styled.button`
    width:200px;
    height:40px;
    border-radius:5px ;
    background-color:#6558F5;
    border:none ;
    color: #ffff;
    cursor: pointer;
    font-size:17px;
    font-weight:bold;
    transition: all ease .5s ;

    &.grande{
        width:100%;
    }

    :hover {
        background-color: #3c3497;
    }

    :disabled {
	    background-color: #2b2660;
        cursor: default;
    }
`