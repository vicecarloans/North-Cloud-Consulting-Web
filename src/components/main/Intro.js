import React from 'react'
import { BackgroundImage, BackgroundImageOverlay } from './Main.styles'

export default function Intro({data, children}) {
    return (
        <>
            <BackgroundImage alt={data.title} fluid={data.backgroundImage.fluid} />
            <img class="cloud sml" src="/assets/cloud.png" alt="cloud" />
            <img class="cloud med" src="/assets/cloud.png" alt="cloud" />
            <img class="cloud lrg" src="/assets/cloud.png" alt="cloud" />
            <BackgroundImageOverlay />
            {children}
        </>
    )
}
