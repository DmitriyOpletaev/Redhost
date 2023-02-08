import {FC, ReactNode} from "react"
import {ReduxProvider} from "./ReduxProvider"
import {PaperProvider} from "./PaperProvider"

export const IndexProvider: FC<Props> = ({children}) => {
    return (
        <ReduxProvider>
            <PaperProvider>
                {children}
            </PaperProvider>
        </ReduxProvider>
    )
}

interface Props  {
    children:ReactNode
}
