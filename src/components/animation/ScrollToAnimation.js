import React from 'react'
import VisibilitySensor from "react-visibility-sensor";
import TransitionWrapper from './Transition'


export default function ScrollToAnimation(props) {
    return (
        <VisibilitySensor>
            {({isVisible}) => (
                <TransitionWrapper isVisible={isVisible}>{props.children}</TransitionWrapper>
            )}
        </VisibilitySensor>
    )
}
