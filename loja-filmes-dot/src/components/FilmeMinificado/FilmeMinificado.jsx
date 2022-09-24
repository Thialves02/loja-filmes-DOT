import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FilmeMinContainer } from './style'
import { Context } from '../../context/CtxApp'

export default function FilmeMinificado({ capa, titulo, preco, menuFav, index }) {
    const { filmeCarrinho, filmeFav, setFilmeFav, setFilmeCarrinho } = useContext(Context)

    const removeFilme = (index) => {
        console.log('clicado')
        var filmes
        menuFav == false ? filmes = filmeCarrinho : filmes = filmeFav
        filmes.splice(index, 1);
        menuFav == false ? setFilmeCarrinho(filmes) : setFilmeFav(filmes)
    };

    const adicionaFilme = (menuFav) => {
        let filmes = []

        if (menuFav == false) {
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
            'id': index
        })

        return menuFav == false ? setFilmeFav(filmes) : setFilmeCarrinho(filmes)
    }

    useEffect(() => { }, [filmeCarrinho]);
    return (
        <FilmeMinContainer>
            <img src={`https://image.tmdb.org/t/p/w300${capa}`} alt={titulo} />
            <h2>{titulo}</h2>
            <p>1</p>
            <p>R$ {preco},00</p>
            {
                menuFav == true && (
                    <FontAwesomeIcon icon={faCartShopping} onClick={() => adicionaFilme(menuFav)} />
                )
            }
            <FontAwesomeIcon icon={faTrash} onClick={() => removeFilme(index)} />
        </FilmeMinContainer>
    )
}
