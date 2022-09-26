import React from 'react'
import { ButtonContainer } from './style'

export default function Button({ label, name, type, ...rest }) {
    return (
        <ButtonContainer type={type} name={name} {...rest}>{label}</ButtonContainer>
    )
}
