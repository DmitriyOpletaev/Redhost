import {FC} from "react"
import {DefaultScreen} from "../../../__TEST-COMPONENTS/DefaultScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {BottomTabsNavigator} from "./BottomTabsNavigator";

const Stack = createNativeStackNavigator()
export const RootNavigation: FC<RootNavigationProps> = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'bottom-tabs'} component={BottomTabsNavigator}/>
        </Stack.Navigator>
    )
}

type RootNavigationProps = {}
