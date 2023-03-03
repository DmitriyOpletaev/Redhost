import {FC} from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {BottomTabsNavigator} from "../bottom-tabs/BottomTabsNavigator"
import {RootStackParamList} from "../types"
import {DefaultScreen} from "../../../../screens/default/DefaultScreen"

const Stack = createNativeStackNavigator<RootStackParamList>()
export const RootNavigation: FC<RootNavigationProps> = () => {

    return (
            <Stack.Navigator
                initialRouteName={'BottomTabs'}
                screenOptions={{
                    orientation:'all'
                }}
            >
                <Stack.Screen
                    name={'BottomTabs'}
                    component={BottomTabsNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'SearchScreen'}
                    component={DefaultScreen}
                />
            </Stack.Navigator>
    )
}

type RootNavigationProps = {}
