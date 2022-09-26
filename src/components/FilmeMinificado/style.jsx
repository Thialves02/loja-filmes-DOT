import styled from "styled-components"

export const FilmeMinContainer = styled.div`
    display:flex ;
    align-items:center;
    justify-content:space-between;
    margin:10px 0 ;
    overflow:hidden;
    padding:0 10px ;

    &.grande{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        text-align:center;
        align-content:center ;
        padding:10px ;
        border-bottom: 2px solid #9EADBA;
        margin:0 ;

        :last-child{
            border:none ;
        }

        img{
            width:70px;
            height:70px;
        }

        svg {
            width:100% ;
            cursor:pointer;
            height:22px;
        }
    }

    h2{
        padding:5px 10px;
        font-size:18px;
        text-align: center;
        max-width:100px;
        min-width:100px;
        max-height:50px;
        overflow:hidden;
    }

    img{
        width:50px;
        height:50px;
    }

    svg {
        cursor:pointer;
        height:20px;

        &.carrinho{
            color:#1AAE9F
        }
    }
`