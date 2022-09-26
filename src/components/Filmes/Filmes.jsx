import React, { useContext, useEffect } from 'react'
import CardFilme from '../CardFilme/CardFilme'
import { FilmesContainer } from './style'
import InfiniteScroll from "react-infinite-scroll-component";
import { Context } from '../../context/CtxApp';
import axios from 'axios';
import Loading from '../Loading/Loading';
import MensagemInformativa from '../BuscaSemResultado/BuscaSemResultado';

export default function Filmes() {
    const { defaultURL, API_KEY, pagina, setPagina, filmes, setFilmes, query, hasMore, setHasMore } = useContext(Context)

    useEffect(() => {
        filmesPopulares()
    }, [query === ''])

    useEffect(() => {

    }, [filmes])

    //Função para buscar os filmes populares da primeira página
    const filmesPopulares = async () => {
        const response = await axios.get(`${defaultURL}movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
        setFilmes(response.data.results)
    }

    //Função para buscar os filmes populares de acordo com a pagina atual
    const paginacaoFilmesPopulares = async () => {
        const response = await axios.get(`${defaultURL}movie/popular?api_key=${API_KEY}&language=pt-BR&page=${pagina}`)
        return response.data.results
    }

    //Função para buscar os filmes pesquisados de acordo com a paginacao atual
    const paginacaoFilmesPesquisados = async () => {
        const response = await axios.get(`${defaultURL}search/movie?api_key=${API_KEY}&language=pt-BR&query='${query}'&page=${pagina}`)
        return response.data.results
    }

    //Atualiza o conteudo da pagina adicionando novos filmes vindo das requisições
    const atualizaPaginacao = async () => {
        setPagina(previusState => previusState + 1);
        const novosFilmes = query === '' ? await paginacaoFilmesPopulares() : await paginacaoFilmesPesquisados()
        setHasMore(novosFilmes.length)
        setFilmes([...filmes, ...novosFilmes]);
    };

    //Verifica se existem mais páginas
    const existeMaisPaginas = () => {
        return hasMore === 0 ? false : true
    }

    return (
        <FilmesContainer>
            <InfiniteScroll
                dataLength={filmes.length}
                next={atualizaPaginacao}
                hasMore={existeMaisPaginas()}
                loader={<Loading />}
                endMessage={
                    <MensagemInformativa
                        label={'A busca não retornou mais resultados!'}
                    />
                }
            >
                {filmes?.map((filme, index) => (
                    <CardFilme
                        key={index}
                        index={index}
                        titulo={filme.title}
                        nota={filme.vote_average}
                        data={filme.release_date}
                        generos={filme.genre_ids}
                        capa={filme.poster_path}
                        capaMinificada={filme.backdrop_path}
                    />
                ))}
            </InfiniteScroll>

        </FilmesContainer>
    )
}
