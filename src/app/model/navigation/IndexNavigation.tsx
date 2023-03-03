import {FC} from "react"
import {RootNavigation} from "./root/RootNavigation"
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native"
import {linking} from "./linking"

export const IndexNavigation: FC = () => {
    return (
        <NavigationContainer linking={linking} theme={{
            ...DefaultTheme,

        }}>
            <RootNavigation/>
        </NavigationContainer>
    )
}


