import styled from "styled-components"

export const LoadingContainer = styled.div`
    display:flex ;
    justify-content : center ;
    align-items : center;
    width:100vw ;
    height:10vh ;
    
    @keyframes loading {
        50%{
            transform:translateY(25px)
        }
    }
`
export const Ball = styled.div`
    background-color:blue ;
    height:18px ;
    width:18px;
    border-radius:50% ;
    margin:0 5px ;
    animation:2s loading ease infinite;
    animation-delay:${(props) => props.delay}s;
    background-color:#6558F5
`

