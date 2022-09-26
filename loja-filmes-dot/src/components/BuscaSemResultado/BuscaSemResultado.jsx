import React from 'react'
import { MensagemInformativaContainer } from './style'

export default function MensagemInformativa({ label }) {
    return (
        <MensagemInformativaContainer>
            <p>{label}</p>
        </MensagemInformativaContainer>
    )
}
