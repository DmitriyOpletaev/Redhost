import {DrawerOptions} from "../lib/types"
import {Easing} from "react-native-reanimated"

export const drawerInitialOptions:DrawerOptions = {
    type:'front',
    width:250,
    compactWidth:100,
    position:'left',
    initialOpen:false,
    animationDuration:400,
    animationType:Easing.linear
}

export const initialDrawerBackgroundColor = '#ffffff'
