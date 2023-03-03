import {ComponentProps, ReactNode} from "react"
import Animated from "react-native-reanimated"
import {ViewStyle} from "react-native"
import {TouchableRipple} from "react-native-paper"

export interface DrawerContextT {
    isDrawerOpen: boolean
    openDrawer: () => void
    closeDrawer: () => void
    toggleDrawer: () => void
    drawerOptions: DrawerOptions
}

export type DrawerType = 'front' | 'permanent' | 'front-compact'
export type DrawerPosition = 'left' | 'right'


export interface DrawerOptions {
    animationDuration:number
    animationType: Animated.EasingFunction
    compactWidth:number
    initialOpen:boolean
    position:DrawerPosition
    type:DrawerType
    width:number
}


export interface DrawerProps {
    children: ReactNode
    childrenContainerStyle?: ViewStyle
    drawerContent?: ReactNode
    drawerStyle?: ViewStyle
    drawerOptions?: Partial<DrawerOptions>
    compactDrawerContent?:ReactNode
    compactDrawerStyle?:ViewStyle
    touchableRippleProps?: Partial<ComponentProps<typeof TouchableRipple>>
    wrapperStyle?: ViewStyle
}
