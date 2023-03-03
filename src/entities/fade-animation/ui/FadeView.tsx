import React, {FC} from "react"
import Animated, {} from 'react-native-reanimated'
import {FadeViewProps} from "../lib/types"
import {useAnimate} from "../model/useAnimate"


export const FadeView: FC<FadeViewProps> = (props) => {

    const {visible,animationConfig} = props
    const {animatedStyle,isShow} = useAnimate(visible, animationConfig)

    if (!isShow) return null
    return (
        <Animated.View
            {...props}
            style={[props.style,animatedStyle]}
        />

    )
}
