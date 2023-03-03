import Animated, {WithTimingConfig} from "react-native-reanimated"
import {ComponentProps} from "react"

export interface FadeAnimationConfig extends WithTimingConfig {
    delayMS?: number
    mode?: 'entering' | 'exiting' | 'entering-exiting'
    animationOnFirstRender?:boolean
    translateIn?: [number,number]
    translateOut?: [number,number]
}
export interface AnimationInitialConfig extends Required<FadeAnimationConfig>{}

export interface FadeViewProps extends ComponentProps<typeof Animated.View>{
    visible:boolean
    animationConfig?:FadeAnimationConfig
}
