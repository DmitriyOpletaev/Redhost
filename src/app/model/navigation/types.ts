import {CompositeScreenProps, NavigatorScreenParams} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}

export type RootStackParamList = {
    BottomTabs: NavigatorScreenParams<BottomTabsParamList>
    CommentsScreen: { postId: string, communityName: string }
    SettingsScreen: undefined
    SearchScreen: undefined
}
export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>


export type BottomTabsParamList = {
    Home: undefined
    Subscriptions: undefined
    Messages: undefined
    UserProfile: undefined
}
export type BottomTabsScreenProps<T extends keyof BottomTabsParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<BottomTabsParamList, T>,
        RootStackScreenProps<'BottomTabs'>>
