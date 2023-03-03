import {DrawerOptions} from "../lib/types"
import {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated"
import {useEffect} from "react"
import {useToggle} from "shared/model/hooks/useToggle"
import {getDrawerCurrentValues} from "../lib/getDrawerCurrentValues"

export function useDrawerAnimation(drawerOptions: DrawerOptions) {
    const {position, width, type, animationType, animationDuration, compactWidth, initialOpen} = drawerOptions


    const {on, off, toggle, isActive} = useToggle(initialOpen)

    const {
        currentTranslateX,
        currentWidth,
        currentChildrenPadding
    } = getDrawerCurrentValues(isActive, width, position, compactWidth, type)

    const sharedWidth = useSharedValue(currentWidth)
    const sharedTranslate = useSharedValue(currentTranslateX)


    const drawerAnimatedStyle = useAnimatedStyle(() => {
        return {
            width: sharedWidth.value,
            top: 0,
            bottom: 0,
            transform: [{
                translateX: sharedTranslate.value
            }]
        }
    })

    const sharedPaddings = useSharedValue<[number,number]>(currentChildrenPadding)
    const childrenWrapperAnimatedStyle = useAnimatedStyle(() => {
        return {
            paddingLeft:sharedPaddings.value[0],
            paddingRight:sharedPaddings.value[1]
        }
    })

    const animConfig = {
        duration: animationDuration,
        easing: animationType
    }

    useEffect(() => {
        sharedTranslate.value =
            withTiming(
                currentTranslateX,
                animConfig
            )
        sharedWidth.value =
            withTiming(
                currentWidth,
                animConfig
            )
        sharedPaddings.value =
            withTiming(
                currentChildrenPadding,
                animConfig
            )
    }, [isActive])


    useEffect(() => {
        sharedWidth.value = currentWidth
        sharedTranslate.value = currentTranslateX
        sharedPaddings.value = currentChildrenPadding
    }, [position, type])

    return {
        drawerAnimatedStyle,
        childrenWrapperAnimatedStyle,
        openDrawer: on,
        closeDrawer: off,
        toggleDrawer: toggle,
        isDrawerOpen: isActive,
    }
}
