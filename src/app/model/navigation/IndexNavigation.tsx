import {FC} from "react"
import {RootNavigation} from "./RootNavigation"
import {NavigationContainer} from "@react-navigation/native";

export const IndexNavigation: FC = () => {
    return (
        <NavigationContainer>
            <RootNavigation/>
        </NavigationContainer>
    )
}


