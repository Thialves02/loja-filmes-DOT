import React, { useRef, useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "react-use"

const Context = createContext();

export default function CtxApp({ children }) {
    const [defaultURL] = useState("https://api.themoviedb.org/3/")
    const [API_KEY] = useState("83a924a233a6fae4e8bb3ece72e1dcd0")
    const [filmeFav, setFilmeFav, filmeFavRemove] = useLocalStorage('filmesFavs', null)
    const [filmeCarrinho, setFilmeCarrinho, filmeCarrinhoRemove] = useLocalStorage('filmesCarrinho', null)
    const [abreMenuLateral, setAbreMenuLateral] = useState(-420)
    const [abreFavoritos, setAbreFavoritos] = useState(false)
    const [abreCarrinho, setAbreCarrinho] = useState(false)
    const [precoTotal, setPrecoTotal] = useState(0)
    const finalizaCompra = useRef(null)
    const [dadosUsuario, setDadosUsuario] = useState('')
    const [pagina, setPagina] = useState(2)
    const [filmes, setFilmes] = useState([])
    const [query, setQuery] = useState('')
    const [hasMore, setHasMore] = useState(1)

    return (
        <Context.Provider
            value={{
                defaultURL, API_KEY, filmeFav, setFilmeFav, filmeFavRemove, filmeCarrinho, setFilmeCarrinho, filmeCarrinhoRemove,
                abreFavoritos, setAbreFavoritos, abreCarrinho, setAbreCarrinho, abreMenuLateral, setAbreMenuLateral, precoTotal,
                setPrecoTotal, finalizaCompra, dadosUsuario, setDadosUsuario, pagina, setPagina, filmes, setFilmes, query, setQuery,
                hasMore, setHasMore
            }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, CtxApp };
