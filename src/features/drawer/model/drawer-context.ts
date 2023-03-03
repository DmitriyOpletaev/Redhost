import {createContext, useContext} from "react"
import {DrawerContextT} from "../lib/types"
import {drawerInitialOptions} from "../config/drawer-initial-options";


const defaultValue:DrawerContextT = {
    isDrawerOpen:false,
    toggleDrawer:()=>{},
    closeDrawer:()=>{},
    openDrawer:()=>{},
    drawerOptions:drawerInitialOptions
}

export const DrawerContext = createContext<DrawerContextT>(defaultValue)

export function useDrawer (){
    return useContext(DrawerContext)
}
