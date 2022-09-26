import React, { useContext } from 'react'
import { Context } from '../../context/CtxApp'
import Button from '../Button/Button'
import { PrecoContainer, ValorTotalContainer } from './style'

export default function ValorTotal({ name, label, type, funcao, disabled, ...rest }) {
    const { precoTotal } = useContext(Context)
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
                disabled={disabled}
            />
        </ValorTotalContainer>
    )
}
