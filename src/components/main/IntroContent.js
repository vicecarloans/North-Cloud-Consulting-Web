import React from 'react'
import { IntroContentContainer, IntroTitle, IntroSubTitle } from './Main.styles'
import { Button } from 'antd'

export default function IntroContent({data, handleQuoteClick}) {
    return (
        <IntroContentContainer>
            <IntroTitle style={{color: "#fff"}}>{data.title}</IntroTitle>
            <IntroSubTitle level={3} style={{color: "#fff"}}>{data.subTitle}</IntroSubTitle>
            <Button style={{width: 300, height: 60, fontSize: 18}} type="primary" onClick={handleQuoteClick}>Request a Quote</Button>
        </IntroContentContainer>
    )
}
