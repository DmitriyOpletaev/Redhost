import {DrawerPosition, DrawerType} from "./types";

export function getChildrenWrapperPaddings(
    type: DrawerType,
    position: DrawerPosition,
    compactWidth: number
):Return {
    switch (type) {
        case "permanent":
            return {
                paddingRight: position === 'right' ? 'sharedWidth'  : 0,
                paddingLeft :position === 'left' ? 'sharedWidth' : 0
            }
        case "front":
            return {
                paddingRight : 0,
                paddingLeft : 0
            }
        case "front-compact":
            return {
                paddingLeft : position === 'left' ? compactWidth:0,
                paddingRight :position === 'right' ? compactWidth:0
            }

    }
}

interface Return  {
    paddingRight : number | 'sharedWidth',
    paddingLeft :  Return['paddingRight']
}
