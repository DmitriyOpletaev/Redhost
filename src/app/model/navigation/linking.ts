import {LinkingOptions} from "@react-navigation/native";
import {RootStackParamList} from "./types";

export const linking: LinkingOptions<RootStackParamList> = {
    prefixes:[''],
    config:{
        screens:{
            SearchScreen:'search',
            CommentsScreen:'comments',
            SettingsScreen:'settings',
            BottomTabs:{
                screens:{
                    Home:'',
                    UserProfile:'user',
                    Messages:'messages',
                    Subscriptions:'subscriptions',
                }
            }
        }
    }
}
