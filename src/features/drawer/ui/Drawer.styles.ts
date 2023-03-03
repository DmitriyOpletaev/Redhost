import {StyleSheet} from "react-native"
import {initialDrawerBackgroundColor} from "../config/drawer-initial-options"

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        overflow: 'hidden',
        position: 'relative'
    },

    drawer: {
        zIndex: 3,
        backgroundColor: initialDrawerBackgroundColor,
    },
    compact_drawer: {
        zIndex: 2,
        backgroundColor: initialDrawerBackgroundColor,
        position:'absolute',
        height:'100%'
    },
    shadowProps:{
        shadowColor: "#000",
        shadowOpacity: 0.35,
        shadowRadius: 8.30,
        shadowOffset: {
            width: 1,
            height: 0
        },
        elevation: 5,
    },

    touchableRipple__container: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
    },
    touchableRipple: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.51)'
    },

    children__container: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
})
