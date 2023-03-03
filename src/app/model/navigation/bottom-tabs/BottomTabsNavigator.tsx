import React, {FC} from "react"
import {DefaultScreen} from "screens/default/DefaultScreen"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {BottomTabsParamList} from "../types"
import {Drawer} from "features/drawer"

const Stack = createBottomTabNavigator<BottomTabsParamList>()

export const BottomTabsNavigator = () => {

    return (
        <Drawer
            drawerOptions={{
                position: 'left',
                type: 'permanent',
                initialOpen: true,
                width: 250,
                animationDuration:250
            }}
        >
            <Stack.Navigator
                screenOptions={{
                    tabBarShowLabel: true,
                    tabBarIconStyle: {
                      //  marginTop: 0 //for web
                    },

                }}
            >
                <Stack.Screen name="Home"
                              component={DefaultScreen}
                />
                <Stack.Screen name="Subscriptions"
                              component={DefaultScreen}
                />
                <Stack.Screen name="Messages"
                              component={DefaultScreen}
                />
                <Stack.Screen name="UserProfile"
                              component={DefaultScreen}

                />
            </Stack.Navigator>
        </Drawer>

    )
}



