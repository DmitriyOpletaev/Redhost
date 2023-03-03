import {FC, ReactNode} from "react"

export const NativeBaseProvider: FC<NativeBaseProviderProps> = ({children}) => {

    return (
        <NativeBaseProvider>
            {children}
        </NativeBaseProvider>
    )
}

type NativeBaseProviderProps = {
    children:ReactNode
}
