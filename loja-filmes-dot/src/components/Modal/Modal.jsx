import React, { useContext, useEffect } from 'react'
import { Context } from '../../context/CtxApp'
import Button from '../Button/Button'
import { ModalContainer } from './style'
import { useNavigate } from 'react-router-dom';

export default function Modal() {
    const { dadosUsuario, setDadosUsuario, filmeCarrinhoRemove } = useContext(Context)
    const navigate = useNavigate();
    useEffect(() => { console.log(dadosUsuario) }, [dadosUsuario])

    const finalizaCompra = () => {
        setDadosUsuario('')
        filmeCarrinhoRemove()
        navigate('/')
    }
    return (
        <>
            {
                dadosUsuario && (
                    <ModalContainer>
                        <h2>Obrigado {dadosUsuario}!</h2>
                        <p>Sua compra foi finalizada com sucesso!</p>
                        <Button
                            label={"Ir para loja"}
                            name={"loja"}
                            type={"button"}
                            onClick={() => finalizaCompra()}
                        />
                    </ModalContainer>
                )
            }
        </>

    )
}
