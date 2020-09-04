import React from 'react'
import { BackgroundImage, BackgroundImageOverlay } from './Main.styles'

export default function Intro({data, children}) {
    return (
        <>
            <BackgroundImage alt={data.title} fluid={data.backgroundImage.fluid} />
            <BackgroundImageOverlay />
            {children}
        </>
    )
}
