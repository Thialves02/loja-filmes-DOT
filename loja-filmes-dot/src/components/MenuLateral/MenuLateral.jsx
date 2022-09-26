import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/CtxApp'
import FilmeMinificado from '../FilmeMinificado/FilmeMinificado'
import { FilmesContainer } from '../FinalizarCompra/style'
import ValorTotal from '../ValorTotal/ValorTotal'
import { MenuLateralContainer, MenuLateralInfos } from './style'
import { useNavigate } from 'react-router-dom';

export default function MenuLateral() {
    const { setAbreMenuLateral, setPrecoTotal, filmeFav, filmeCarrinho, abreFavoritos, abreCarrinho, abreMenuLateral, filmeFavRemove, filmeCarrinhoRemove } = useContext(Context)
    const [tipo, setTipo] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        verificaTipo()
        valorTotal()
    }, [abreFavoritos, abreCarrinho, filmeCarrinho, filmeFav])

    //Função que verifica se o menuLateral aberto foi o favorito e altera o titulo
    const tituloMenuLateral = () => {
        return abreFavoritos === true ? 'Meus Favoritos' : 'Meu carrinho'
    }

    //Verifica o tipo "favoritos" ou "carrinho" que será renderizado
    const verificaTipo = () => {
        return abreFavoritos === true ? setTipo(filmeFav) : setTipo(filmeCarrinho)
    }

    //Verifica o tipo "favoritos" ou "carrinho" para limpar o LocalStorage
    const esvaziaFilmes = () => {
        return abreFavoritos === true ? filmeFavRemove() : filmeCarrinhoRemove()
    }

    //Faz o calculo do valor de todos os filmes
    const valorTotal = () => {
        setPrecoTotal(0)
        filmeCarrinho?.forEach((filme) => {
            setPrecoTotal(previusState => previusState + filme.preco)
        })
    }

    //Redireciona para a pagina de checkout e fecha o menu lateral
    const redirecionaCheckout = () => {
        navigate('/checkout')
        setAbreMenuLateral(-420)
    }

    return (
        <MenuLateralContainer right={abreMenuLateral}>
            <MenuLateralInfos>
                <h2>{tituloMenuLateral()}</h2>
                <p onClick={() => esvaziaFilmes()}>Esvaziar</p>
            </MenuLateralInfos>
            <FilmesContainer>
                {
                    tipo?.map((filme, index) =>
                        <FilmeMinificado
                            key={index}
                            index={index}
                            titulo={filme.titulo}
                            capa={filme.capa}
                            preco={filme.preco}
                            quantidade={filme.quantidade}
                            menuFav={abreFavoritos}
                        />
                    )
                }
            </FilmesContainer>
            {
                abreCarrinho === true && (
                    <ValorTotal
                        funcao={() => redirecionaCheckout()}
                        label={'Finalizar Compra'}
                        name={'finalizarCompra'}
                        className={'menuLateral'}
                    />
                )
            }

        </MenuLateralContainer>
    )
}
