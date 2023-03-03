import {DrawerPosition, DrawerType} from "./types";

export function getDrawerCurrentValues(
    isOpen: boolean,
    fullWidth: number,
    position: DrawerPosition,
    compactWidth: number,
    type: DrawerType
): Return {
    switch (type) {
        case "front":
            return {
                currentWidth: fullWidth,
                currentTranslateX: isOpen ? 0 : position === 'left' ? -fullWidth : fullWidth,
                currentChildrenPadding: [0, 0]
            }
        case "front-compact":
            return {
                currentWidth: fullWidth,
                currentTranslateX: isOpen ? 0 : position === 'left' ? -fullWidth : fullWidth,
                currentChildrenPadding: position === 'left' ? [compactWidth, 0] : [0, compactWidth]
            }
        case "permanent":
            const permanentPadding = isOpen? fullWidth:compactWidth
            return {
                currentWidth: isOpen ? fullWidth : compactWidth,
                currentTranslateX: 0,
                currentChildrenPadding:
                    position === 'left' ? [permanentPadding, 0] : [0,permanentPadding]
            }
    }
}

interface Return {
    currentWidth: number
    currentTranslateX: number
    currentChildrenPadding: [number, number]
}
