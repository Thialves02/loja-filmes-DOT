import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FilmeMinContainer } from './style'
import { Context } from '../../context/CtxApp'

export default function FilmeMinificado({ capa, titulo, preco, menuFav, quantidade, index, ...rest }) {
    const { filmeCarrinho, filmeFav, setFilmeFav, setFilmeCarrinho } = useContext(Context)

    //Remove o filme selecionado
    const removeFilme = (index) => {
        var filmes
        menuFav === false ? filmes = filmeCarrinho : filmes = filmeFav
        filmes.splice(index, 1);
        menuFav === false ? setFilmeCarrinho(filmes) : setFilmeFav(filmes)
    };

    const adicionaFilme = () => {
        let filmes = []

        //Preenche variavel com valor do LocalStorage caso ele exista
        if (filmeCarrinho) {
            filmes = filmeCarrinho
        }

        //Adiciona um filme no LocalStorage do carrinho
        if (filmeArmazenado(filmes) === undefined) {
            filmes.push({
                'titulo': titulo,
                'capa': capa,
                'preco': preco,
                'id': index,
                'quantidade': 1
            })
            setFilmeCarrinho(filmes)
        }
        //Valida se o filme ja estava no carrinho, entao soma 1 na quantidade
        else if (filmeArmazenado(filmes) === true) {
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

    return (
        <FilmeMinContainer {...rest} key={index}>
            <img src={`https://image.tmdb.org/t/p/w300${capa}`} alt={titulo} />
            <h2>{titulo}</h2>
            {
                menuFav === false && (
                    <p>{quantidade}</p>
                )
            }
            <p>R$ {preco},00</p>
            {
                menuFav === true && (
                    <FontAwesomeIcon icon={faCartShopping} className={'carrinho'} onClick={() => adicionaFilme()} />
                )
            }
            <FontAwesomeIcon icon={faTrash} onClick={() => removeFilme(index)} />
        </FilmeMinContainer>
    )
}
