import styled from "styled-components"

export const NavbarContainer = styled.header`
    position:fixed ;
    top: 0;
    width:100vw ;
    display:flex ;
    background-color:#8dd7cf;
    align-items:center;
    justify-content:space-between;
    height:60px;
    padding:0 20px ;
    z-index:5;

    img{
        height:80px;
        cursor: pointer;
    }

    svg {
        height:25px ;
        color: #ffff;
    }
`
export const InputContainer = styled.div`
    position: relative;
    width:50%;
    input {
        height:30px;
        width:100%;
        border-radius:5px;
        border: 2px solid #97bec2;
        padding:0 10px;
    }

    svg {
        position: absolute;
        top:7px;
        right: 10px;
        color:#4b5c6b;
        height:15px;
    }
`

export const IconsContainer = styled.div`
    display:flex;
    justify-content:space-around ;
    width:80px;

    svg {
        cursor:pointer;
    }
`

export const CartContainer = styled.div`
    position: relative;
    p {
        display: flex;
        justify-content:center;
        align-items:center;
        background-color:#fbe192;
        border-radius:50%;
        height:20px;
        width:20px;
        top: -10px;
        right: -10px;
        position:absolute ;
    }
`