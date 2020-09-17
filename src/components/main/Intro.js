import React from 'react'
import { BackgroundImage, BackgroundImageOverlay } from './Main.styles'

export default function Intro({data, children}) {
    return (
        <>
            <BackgroundImage alt={data.title} fluid={data.backgroundImage.fluid} />
            <img className="cloud sml" src="/assets/cloud.png" alt="cloud" />
            <img className="cloud med" src="/assets/cloud.png" alt="cloud" />
            <img className="cloud lrg" src="/assets/cloud.png" alt="cloud" />
            <img className="cloudOnce" src="/assets/cloud.png" alt="cloud"/>
            <BackgroundImageOverlay />
            {children}
        </>
    )
}
