import {FC, ReactNode} from "react"
import {ReduxProvider} from "./ReduxProvider"

export const IndexProvider: FC<Props> = ({children}) => {
    return (
        <ReduxProvider>
                {children}
        </ReduxProvider>
    )
}

interface Props  {
    children:ReactNode
}
