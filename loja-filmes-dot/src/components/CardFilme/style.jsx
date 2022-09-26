import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const CardContainer = styled.div`
    /* position: relative; */
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    width:200px;
    background-color:#ffff;
    border:1px solid #c3cfd9 ;
    margin:20px ;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    h2 {
        text-align:center;
        font-size:22px;
        padding:0 10px ;
        margin-top:10px ;
    }

    p {
        font-weight:bold ;
    }

    button {
        margin-top:10px;
    }

    ${media('mobile')}{
        width:250px;

        button {
            width:100%;
        }
    }
`

export const ImageContainer = styled.figure`
    position: relative;
    img {
        width:100%;
        height:100%;
    }

    svg {
        height:25px ;
        position: absolute;
        top:10px ;
        right:15px ;
        color: #4b5c6b;
        cursor: pointer;
        transition: all ease .3s ;

        @keyframes adcFilmeFavorito {
            50%{
                transform:scale(1.3)
            }

            100%{
                transform:scale(1)
            }
        }

        :hover{
            color: red;
        }

        &.favoritado {
            color: red;
            animation:1.5s adcFilmeFavorito ease;

            
            :hover{
                color: #4b5c6b;
            }

            ${media('mobile')}{
                :hover{
                    color: red;
                }
            }
        }
    }

    figcaption {
        color:#fff ;
        bottom: 10px;
        position:absolute;
        background-color:#151313b3;
        width:100%;
        padding:5px 0 ;
        /* font-weight:bold ; */
        text-align: center;
    }
`

export const InfosContainer = styled.div`
    display:flex ;
    align-items:center;
    justify-content:space-around ;
    width:70%;
    flex-wrap:wrap;
`

export const RatingContainer = styled.div`
    display:flex ;
    align-items:center;
    margin:10px 0 ;

    svg {
        height:20px ;
        color: #4b5c6b;
        margin-right:5px;
    }

    p {
        font-size:20px;
        font-weight:bold;
    }
`