import React, {useContext} from 'react'
import { IntroContentContainer, IntroTitle, IntroSubTitle } from './Main.styles'
import { Button } from 'antd'
import { ModalContext } from 'utils/modal-context'
import { SendOutlined } from '@ant-design/icons'

export default function IntroContent({data}) {
    const {toggleModal} = useContext(ModalContext)

    return (
        <IntroContentContainer>
            <IntroTitle style={{color: "#fff"}}>{data.title}</IntroTitle>
            <IntroSubTitle style={{color: "#fff"}} level={3}>{data.subTitle}</IntroSubTitle>
            <Button icon={<SendOutlined />} style={{width: 300, height: 60, fontSize: 18}} type="primary" onClick={toggleModal}>Talk To Us!</Button>
        </IntroContentContainer>
    )
}
