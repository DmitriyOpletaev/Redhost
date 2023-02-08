import {FC, ReactNode} from "react"
import {MD3LightTheme, Provider} from "react-native-paper"

export const PaperProvider:FC<Props> = ({children}) =>{
    return (
        <Provider theme={MD3LightTheme}>
            {children}
        </Provider>
    )
}

interface Props {
    children:ReactNode
}
