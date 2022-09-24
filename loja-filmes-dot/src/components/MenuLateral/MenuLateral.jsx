import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/CtxApp'
import Button from '../Button/Button'
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

    const teste = () => {
        return abreFavoritos == true ? 'Meus Favoritos' : 'Meu carrinho'
    }

    const verificaTipo = () => {
        return abreFavoritos == true ? setTipo(filmeFav) : setTipo(filmeCarrinho)
    }

    const esvaziaFilmes = () => {
        return abreFavoritos == true ? filmeFavRemove() : filmeCarrinhoRemove()
    }

    const valorTotal = () => {
        setPrecoTotal(0)
        filmeCarrinho?.forEach((filme) => {
            setPrecoTotal(previusState => previusState + filme.preco)
        })
    }

    const redirecionaCheckout = () => {
        navigate('/checkout')
        setAbreMenuLateral(-420)
    }

    return (
        <MenuLateralContainer right={abreMenuLateral}>
            <MenuLateralInfos>
                <h2>{teste()}</h2>
                <p onClick={() => esvaziaFilmes()}>Esvaziar</p>
            </MenuLateralInfos>
            <FilmesContainer>
                {
                    tipo?.map((filme, index) =>
                        <FilmeMinificado
                            index={index}
                            titulo={filme.titulo}
                            capa={filme.capa}
                            preco={filme.preco}
                            menuFav={abreFavoritos}
                        />
                    )
                }
            </FilmesContainer>
            {
                abreCarrinho == true && (
                    <ValorTotal
                        funcao={() => redirecionaCheckout()}
                        label={'Finalizar Compra'}
                        name={'finalizarCompra'}
                    />
                )
            }

        </MenuLateralContainer>
    )
}
