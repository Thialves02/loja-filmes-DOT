import React, { useContext } from 'react'
import { Context } from '../../context/CtxApp'
import Button from '../Button/Button'
import FilmeMinificado from '../FilmeMinificado/FilmeMinificado'
import ValorTotal from '../ValorTotal/ValorTotal'
import { FilmesContainer, FinalizarCompraContainer } from './style'

export default function FinalizarCompra() {
    const { filmeCarrinho, finalizaCompra, dadosUsuario, setDadosUsuario } = useContext(Context)

    const finalizaCompras = () => {
        finalizaCompra.current.click()
    }

    return (
        <FinalizarCompraContainer>
            <FilmesContainer>
                {
                    filmeCarrinho ?
                        filmeCarrinho.map((filme, index) =>
                            <>
                                <FilmeMinificado
                                    index={index}
                                    titulo={filme.titulo}
                                    capa={filme.capa}
                                    preco={filme.preco}
                                    menuFav={false}
                                />
                            </>
                        )

                        : (
                            <h2>Você nao possui filmes no carrinho</h2>
                        )
                }
            </FilmesContainer>
            <ValorTotal
                funcao={() => finalizaCompras()}
                label={'Finalizar'}
                name={'finalizar'}
            />
        </FinalizarCompraContainer>
    )
}
