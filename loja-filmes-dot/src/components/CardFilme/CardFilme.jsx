import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button/Button'
import { CardContainer, ImageContainer, InfosContainer, RatingContainer } from './style'
import moment from 'moment'
import 'moment/locale/pt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../context/CtxApp'
import Erro404 from '../../assets/images/404.svg'

export default function CardFilme({ titulo, data, generos, nota, capa, index, capaMinificada }) {
    const { filmeFav, setFilmeFav, filmeCarrinho, setFilmeCarrinho } = useContext(Context)
    const [dataFormatada, setDataFormatada] = useState('')
    const [preco, setPreco] = useState('')
    const [generoTraduzido, setGeneroTraduzido] = useState('')
    const [filmeFavoritado, setFilmeFavoritado] = useState('')

    useEffect(() => {
        formataData()
        precoAleatorio()
        converterGeneros()
    }, [])

    useEffect(() => {
        AdcFilmeFavoritado()
    }, [filmeFav])

    //Formata a data para dia, mes extenso e ano
    const formataData = () => {
        const formattedDate = moment(data).locale('pt').format("DD [de] MMMM, YYYY");
        setDataFormatada(formattedDate)
    }

    //Seta um valor aleatório para cada filme
    const precoAleatorio = () => {
        const valorAleatorio = Math.floor(Math.random() * (30 + 1) + 20);
        setPreco(valorAleatorio)
    }

    //Converte os ids de generos em nomes
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

        //Preenche variavel com valor do LocalStorage caso ele exista
        if (tipo === 'filmesFav') {
            if (filmeFav) {
                filmes = filmeFav
            }
        } else {
            if (filmeCarrinho) {
                filmes = filmeCarrinho
            }
        }

        //Adiciona um filme no LocalStorage dos favoritos ou carrinho, variando de acordo com o parametro "tipo"
        if (filmeArmazenado(filmes) === undefined) {
            filmes.push({
                'titulo': titulo,
                'capa': capaMinificada,
                'preco': preco,
                'id': index,
                'quantidade': 1
            })

            return tipo === 'filmesFav' ? setFilmeFav(filmes) : setFilmeCarrinho(filmes)
        }
        //Valida se o filme já estava favoritado e envia mensagem de erro
        else if (filmeArmazenado(filmeFav) === true && tipo === 'filmesFav') {
            alert('teste')
        }
        //Valida se o filme ja estava no carrinho, entao soma 1 na quantidade
        else if (filmeArmazenado(filmeCarrinho) === true) {
            filmes = filmeCarrinho
            filmes?.forEach(filme => {
                if (filme.titulo === titulo) {
                    filme.quantidade = filme.quantidade + 1
                    filme.preco += filme.preco
                }
            })
            setFilmeCarrinho(filmes)
        }
    }

    //Função que valida se o filme está no LocalStorage do tipo selecionado, "favorito" ou "carrinho"
    const filmeArmazenado = (tipo) => {
        var armazenado
        tipo?.forEach(filme => {
            if (filme.titulo === titulo) {
                return armazenado = true
            }
        })
        return armazenado
    }

    //Adiciona estilizacao para filmes que estejam na sessão de favoritos
    const AdcFilmeFavoritado = () => {
        return filmeArmazenado(filmeFav) === true ? setFilmeFavoritado('favoritado') : setFilmeFavoritado('')
    }

    //Função para evitar imagens quebradas
    function imgError(image) {
        image.target.src = Erro404
    }

    return (
        <CardContainer key={index}>
            <ImageContainer>
                <img src={`https://image.tmdb.org/t/p/w300${capa}`} alt={titulo} onError={imgError} />
                <FontAwesomeIcon icon={faHeart} className={filmeFavoritado} onClick={() => adicionaFilme('filmesFav')} />
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
            <p>R$ {preco},00</p>
            <Button
                type={'text'}
                name={'adicionaFilme'}
                label={'Adicionar'}
                onClick={() => adicionaFilme('filmesCarrinho')}
            />
        </CardContainer>
    )
}
