import React from 'react'
import { Ball, LoadingContainer } from './style'

export default function Loading() {
    return (
        <LoadingContainer>
            <Ball
                delay={0}
            />
            <Ball
                delay={.25}
            />
            <Ball
                delay={.5}
            />
            <Ball
                delay={.75}
            />
        </LoadingContainer>
    )
}
