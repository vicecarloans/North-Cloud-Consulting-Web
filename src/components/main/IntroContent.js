import React, {useContext} from 'react'
import { IntroContentContainer, IntroTitle, IntroSubTitle } from './Main.styles'
import { Button } from 'antd'
import { ModalContext } from 'utils/modal-context'
export default function IntroContent({data}) {
    const {toggleModal} = useContext(ModalContext)

    return (
        <IntroContentContainer>
            <IntroTitle style={{color: "#fff"}}>{data.title}</IntroTitle>
            <IntroSubTitle style={{color: "#fff"}} level={3}>{data.subTitle}</IntroSubTitle>
            <Button style={{width: 300, height: 60, fontSize: 18}} type="primary" onClick={toggleModal}>Request a Quote</Button>
        </IntroContentContainer>
    )
}
