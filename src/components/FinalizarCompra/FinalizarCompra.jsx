import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/CtxApp'
import MensagemInformativa from '../BuscaSemResultado/BuscaSemResultado'
import FilmeMinificado from '../FilmeMinificado/FilmeMinificado'
import ValorTotal from '../ValorTotal/ValorTotal'
import { FilmesContainer, FinalizarCompraContainer, InfosContainer } from './style'

export default function FinalizarCompra() {
    const { filmeCarrinho, finalizaCompra } = useContext(Context)
    const [carrinhoVazio, setCarrinhoVazio] = useState()

    useEffect(() => { verificaCarrinho() }, [filmeCarrinho])

    //Validação para bloquear compra caso não exista itens no carrinho
    const verificaCarrinho = () => {
        return filmeCarrinho?.length === 0 || filmeCarrinho === null ? setCarrinhoVazio(true) : setCarrinhoVazio(false)
    }

    //Faz o submit do form
    const finalizaCompras = () => {
        finalizaCompra.current.click()
    }

    return (
        <FinalizarCompraContainer>
            <InfosContainer>
                <p>Imagem</p>
                <p>Nome</p>
                <p>Qtd</p>
                <p>Preço</p>
            </InfosContainer>
            <FilmesContainer>
                {
                    !carrinhoVazio ?
                        filmeCarrinho?.map((filme, index) =>
                            <FilmeMinificado
                                key={index}
                                index={index}
                                titulo={filme.titulo}
                                capa={filme.capa}
                                preco={filme.preco}
                                quantidade={filme.quantidade}
                                menuFav={false}
                                className={'grande'}
                            />
                        )
                        : (
                            <MensagemInformativa
                                label={'Você nao possui itens no carrinho!'}
                            />
                        )
                }
            </FilmesContainer>
            <ValorTotal
                funcao={() => finalizaCompras()}
                label={'Finalizar'}
                name={'finalizar'}
                disabled={carrinhoVazio}
            />
        </FinalizarCompraContainer>
    )
}
