import React from 'react'
import {useTransition, animated} from 'react-spring'


export default function TransitionWrapper(props) {
    const transitions = useTransition(props.isVisible, null, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
        })
        console.log(props.isVisible)
    return transitions.map(({ item, props, key }) =>
        item && props.children
    ) 
}
