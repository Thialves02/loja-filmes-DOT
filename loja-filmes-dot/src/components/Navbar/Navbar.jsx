import React, { useContext, useState } from 'react'
import { CartContainer, IconsContainer, InputContainer, NavbarContainer } from './style'
import logo from '../../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../context/CtxApp'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRef } from 'react'

export default function Navbar() {
    const { defaultURL, API_KEY, setQuery, setHasMore, setPagina, setAbreCarrinho, setAbreFavoritos, setAbreMenuLateral, filmeCarrinho, setFilmes } = useContext(Context)
    const [iconSelecionado, setIconSelecionado] = useState('')
    const navigate = useNavigate();
    const inputPesquisa = useRef(null)

    //Funçao para abrie e fechar o menu lateral
    //Menu lateral é fechado ao clicar novamente no icon em que foi clicado anteriormente
    //Ao trocar favoritos e carrinho o menu se mantem aberto trocando apenas o conteudo
    const menuLateral = (tipo) => {
        if (tipo == 'favoritos') {
            setAbreFavoritos(true)
            setAbreCarrinho(false)
        } else {
            setAbreCarrinho(true)
            setAbreFavoritos(false)
        }
        if (iconSelecionado == '') {
            setAbreMenuLateral(0)
        } else {
            if (tipo == iconSelecionado) {
                setAbreMenuLateral(-420)

                return setIconSelecionado('')
            } else {
                setAbreMenuLateral(0)
            }
        }
        setIconSelecionado(tipo)
    }

    const qntdCarrinho = () => {
        return filmeCarrinho != null ? filmeCarrinho.length : 0
    }

    const voltaHome = () => {
        setHasMore(1)
        /* setPagina(2) */
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        navigate('/')
        setQuery('')
        setAbreMenuLateral(-420)
        inputPesquisa.current.value = ''
    }

    let cancelToken
    const buscaFilme = async (value) => {
        console.log(value.target.value)
        setPagina(2)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        if (cancelToken) {
            cancelToken.cancel("cancelado")
        }
        cancelToken = axios.CancelToken.source()
        let results
        try {
            results = await axios.get(`${defaultURL}search/movie?api_key=${API_KEY}&language=pt-BR&query='${value.target.value}'&page=1`, {
                cancelToken: cancelToken.token
            })
            setQuery(value.target.value)
        } catch (e) {
            if (axios.isCancel(e)) return
        }
        console.log(results.data)
        setFilmes(results.data.results)
    }

    return (
        <NavbarContainer>
            <img src={logo} alt="logo" onClick={() => voltaHome()} />
            <InputContainer>
                <input type='text' placeholder='Pesquisa' onChange={buscaFilme} ref={inputPesquisa} />
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => console.log()} />
            </InputContainer>
            <IconsContainer>
                <FontAwesomeIcon icon={faHeart} onClick={() => menuLateral('favoritos')} />
                <CartContainer>
                    <FontAwesomeIcon icon={faCartShopping} onClick={() => menuLateral('carrinho')} />
                    <p>{qntdCarrinho()}</p>
                </CartContainer>
            </IconsContainer>
        </NavbarContainer>
    )
}
