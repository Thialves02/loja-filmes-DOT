import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/CtxApp'
import Button from '../Button/Button'
import { PrecoContainer, ValorTotalContainer } from './style'

export default function ValorTotal({ name, label, type, funcao, disabled, ...rest }) {
    const { filmeCarrinho, precoTotal, carrinhoVazio, setCarrinhoVazio } = useContext(Context)

    useEffect(() => { verificaCarrinho() }, [filmeCarrinho])

    //Verifica se existem filmes no carrinho
    const verificaCarrinho = () => {
        return filmeCarrinho?.length === 0 || filmeCarrinho === undefined || filmeCarrinho === null ? setCarrinhoVazio(true) : setCarrinhoVazio(false)
    }

    return (
        <ValorTotalContainer {...rest}>
            <PrecoContainer>
                <p>Total:</p>
                <h2>R$ {precoTotal},00</h2>
            </PrecoContainer>
            <Button
                name={name}
                label={label}
                type={type}
                onClick={funcao}
                className={'grande'}
                disabled={carrinhoVazio}
            />
        </ValorTotalContainer>
    )
}
