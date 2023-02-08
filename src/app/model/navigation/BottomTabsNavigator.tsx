import {FC} from "react"
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {DefaultScreen} from "../../../__TEST-COMPONENTS/DefaultScreen";

const Stack = createMaterialBottomTabNavigator()
export const BottomTabsNavigator: FC<BottomTabsNavigatorProps> = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'home'} component={DefaultScreen}/>
            <Stack.Screen name={'subscriptions'} component={DefaultScreen}/>
        </Stack.Navigator>
    )
}

type BottomTabsNavigatorProps = {}
