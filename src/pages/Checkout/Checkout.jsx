import React from 'react'
import { CheckoutContainer } from './style'
import DadosUsuario from '../../components/DadosUsuario/DadosUsuario';
import FinalizarCompra from '../../components/FinalizarCompra/FinalizarCompra';
import Modal from '../../components/Modal/Modal';

export default function Checkout() {
    return (
        <CheckoutContainer>
            <DadosUsuario />
            <FinalizarCompra />
            <Modal />
        </CheckoutContainer>
    )
}
