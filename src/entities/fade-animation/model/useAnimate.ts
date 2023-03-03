import {useEffect, useState} from "react";
import {runOnJS, useAnimatedStyle, useSharedValue, withDelay, withTiming} from "react-native-reanimated";
import {FadeAnimationConfig} from "../lib/types";
import {animationInitialConfig} from "../config/initial-values";

export function useAnimate(visible:boolean,config?: FadeAnimationConfig) {
    const {animationOnFirstRender, mode, translateIn, translateOut, easing, delayMS, duration}
        = {...animationInitialConfig,...config}

    const [isShow, setIsShow] = useState(animationOnFirstRender)

    const sharedOpacity = useSharedValue(visible && animationOnFirstRender ? 0 : 1)
    const sharedTranslate = useSharedValue(!animationOnFirstRender ? [0, 0] : visible ? translateIn : translateOut)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: sharedOpacity.value,
            transform: [{
                translateX: sharedTranslate.value[0]
            }, {
                translateY: sharedTranslate.value[1]
            }]
        }
    })

    useEffect(() => {
        if (mode === 'entering' && !visible) {
            sharedOpacity.value = 0
            sharedTranslate.value = translateIn
            setIsShow(false)
        } else if (mode === 'exiting' && visible) {
            sharedOpacity.value = 1
            sharedTranslate.value = [0, 0]
            setIsShow(true)
        } else {
            visible && setIsShow(true)
            sharedOpacity.value =
                withDelay(
                    delayMS,
                    withTiming(
                        visible ? 1 : 0,
                        {duration, easing},
                        finished => {
                            finished && !visible && runOnJS(setIsShow)(false)
                        }
                    )
                )
            sharedTranslate.value =
                withDelay(
                    delayMS,
                    withTiming(
                        visible ? [0, 0] : translateOut,
                        {duration, easing},
                        finished => {
                            if (finished && !visible) {
                                sharedTranslate.value = translateIn
                            }
                        }
                    )
                )
        }
    }, [visible])


    return {animatedStyle,isShow}
}
