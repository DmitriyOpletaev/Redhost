import {FC} from "react"
import {View} from "react-native"
import {DrawerContext} from "../model/drawer-context"
import Animated from "react-native-reanimated"
import {DrawerContextT, DrawerProps} from "../lib/types"
import {drawerInitialOptions} from "../config/drawer-initial-options"
import {useDrawerAnimation} from "../model/useDrawerAnimation"
import {TouchableRipple} from "react-native-paper"
import {FadeView} from "entities/fade-animation"
import {styles} from "./Drawer.styles"


export const Drawer: FC<DrawerProps> = (props) => {

    const drawerOptions = {...drawerInitialOptions, ...props.drawerOptions}
    const {position, animationDuration, type, animationType, compactWidth} = drawerOptions

    const {
        isDrawerOpen,
        toggleDrawer,
        closeDrawer,
        openDrawer,
        drawerAnimatedStyle,
        childrenWrapperAnimatedStyle
    } = useDrawerAnimation(drawerOptions)

    const contextValue: DrawerContextT = {
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        drawerOptions
    }

    const visibleTouchableRipple = isDrawerOpen && type !== 'permanent'
    const wrapperFlexDirection = position === 'left' ? 'row' : 'row-reverse'

    return (
        <DrawerContext.Provider value={contextValue}>
            <View
                style={[
                    styles.wrapper,
                    props.wrapperStyle,
                    {flexDirection: wrapperFlexDirection}
                ]}
            >
                <Animated.View
                    children={props.drawerContent}
                    style={[
                        styles.drawer,
                        styles.shadowProps,
                        props.drawerStyle,
                        drawerAnimatedStyle
                    ]}
                />

                {type === 'front-compact' &&
                    <View
                        children={props.compactDrawerContent}
                        style={[
                            styles.compact_drawer,
                            styles.shadowProps,
                            props.compactDrawerStyle,
                            {width: compactWidth}
                        ]}

                    />
                }


                <FadeView
                    visible={visibleTouchableRipple}
                    animationConfig={{
                        duration: animationDuration,
                        easing: animationType
                    }}
                    style={styles.touchableRipple__container}
                >
                    <TouchableRipple
                        onPress={closeDrawer}
                        {...props.touchableRippleProps}
                        children={props.touchableRippleProps?.children || <></>}
                        style={[
                            styles.touchableRipple,
                            props.touchableRippleProps?.style
                        ]}
                    />
                </FadeView>

                <Animated.View
                    children={props.children}
                    style={[
                        styles.children__container,
                        props.childrenContainerStyle,
                        childrenWrapperAnimatedStyle
                    ]}
                />

            </View>
        </DrawerContext.Provider>

    )
}





