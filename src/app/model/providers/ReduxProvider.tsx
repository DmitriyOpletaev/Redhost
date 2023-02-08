import {FC, ReactNode} from "react"
import {Provider} from "react-redux"
import store from "../store/store"


export const ReduxProvider:FC<ReduxProviderProps> = ({children}) =>{

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

interface ReduxProviderProps {
    children:ReactNode
}
