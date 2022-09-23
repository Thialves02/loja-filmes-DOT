import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button/Button'
import { CardContainer, ImageContainer, InfosContainer, RatingContainer } from './style'
import moment from 'moment'
import 'moment/locale/pt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../context/CtxApp'

export default function CardFilme({ titulo, data, generos, nota, capa, key }) {
    const { filmeFav, setFilmeFav, filmeFavRemove, filmeCarrinho, setFilmeCarrinho, filmeCarrinhoRemove } = useContext(Context)
    const [dataFormatada, setDataFormatada] = useState('')
    const [preco, setPreco] = useState('')
    const [generoTraduzido, setGeneroTraduzido] = useState('')

    useEffect(() => {
        formataData()
        precoAleatorio()
        converterGeneros()
    }, [])

    const formataData = () => {
        const formattedDate = moment(data).locale('pt').format("DD [de] MMMM, YYYY");
        setDataFormatada(formattedDate)
    }

    const precoAleatorio = () => {
        const valorAleatorio = Math.floor(Math.random() * (30 + 1) + 20);
        setPreco(valorAleatorio)
    }

    const converterGeneros = () => {
        const generosTraduzidos = {
            28: "Ação",
            12: "Aventura",
            16: "Animação",
            35: "Comédia",
            80: "Crime",
            99: "Documentário",
            18: "Drama",
            10751: "Família",
            14: "Fantasia",
            36: "História",
            27: "Terror",
            10402: "Musica",
            9648: "Mistério",
            10749: "Romance",
            878: "Ficção Científica",
            10770: "Filme de TV",
            53: "Suspense",
            10752: "Guerra",
            37: "Faroeste"
        }
        setGeneroTraduzido(generosTraduzidos[generos[0]])
    }

    const adicionaFilme = (tipo) => {
        let filmes = []

        if (tipo == 'filmesFav') {
            if (filmeFav) {
                filmes = filmeFav
            }
        } else {
            if (filmeCarrinho) {
                filmes = filmeCarrinho
            }
        }

        filmes.push({
            'titulo': titulo,
            'capa': capa,
            'preco': preco,
            'id': key
        })

        return tipo == 'filmesFav' ? setFilmeFav(filmes) : setFilmeCarrinho(filmes)
    }

    return (
        <CardContainer key={key}>
            <ImageContainer>
                <img src={`https://image.tmdb.org/t/p/w300${capa}`} alt={titulo} />
                <FontAwesomeIcon icon={faHeart} onClick={() => adicionaFilme('filmesFav')} />
                <figcaption>{dataFormatada}</figcaption>
            </ImageContainer>
            <h2>{titulo}</h2>
            <InfosContainer>
                <RatingContainer>
                    <FontAwesomeIcon icon={faStar} />
                    <p>{nota}</p>
                </RatingContainer>
                <p>{generoTraduzido}</p>
            </InfosContainer>

            <p>R$ {preco},99</p>
            <Button
                type={'text'}
                name={'adicionaFilme'}
                label={'Adicionar'}
                onClick={() => adicionaFilme('filmesCarrinho')}
            />
        </CardContainer>
    )
}
