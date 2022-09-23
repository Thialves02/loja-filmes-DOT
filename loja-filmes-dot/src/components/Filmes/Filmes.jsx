import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api'
import CardFilme from '../CardFilme/CardFilme'
import { FilmesContainer } from './style'

export default function Filmes() {
    const [filmes, setFilmes] = useState([])
    useEffect(() => {
        getAllMovies()
    }, [])

    const getAllMovies = async () => {
        const response = await Api.getAll(`movie/popular?api_key=83a924a233a6fae4e8bb3ece72e1dcd0&language=pt-BR&page=1`)
        const body = await response.json()
        console.log(body)
        setFilmes(body.results)
    }

    return (
        <FilmesContainer>
            {filmes.map((filme, index) => (
                <CardFilme
                    key={index}
                    titulo={filme.title}
                    nota={filme.vote_average}
                    data={filme.release_date}
                    generos={filme.genre_ids}
                    capa={filme.poster_path}
                />
            ))}
        </FilmesContainer>
    )
}
