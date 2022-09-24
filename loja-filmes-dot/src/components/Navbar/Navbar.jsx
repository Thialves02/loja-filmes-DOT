import React, { useContext, useState } from 'react'
import { CartContainer, IconsContainer, InputContainer, NavbarContainer } from './style'
import logo from '../../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../context/CtxApp'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const { setAbreCarrinho, setAbreFavoritos, abreMenuLateral, setAbreMenuLateral, filmeCarrinho } = useContext(Context)
    const [iconSelecionado, setIconSelecionado] = useState('')
    const navigate = useNavigate();

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

    return (
        <NavbarContainer>
            <img src={logo} alt="logo" onClick={() => navigate('/')} />
            <InputContainer>
                <input type='text' placeholder='Pesquisa' />
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
