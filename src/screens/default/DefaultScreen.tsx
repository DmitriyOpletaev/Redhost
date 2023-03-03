import {FC, useState} from "react"
import {ScrollView, Text} from "react-native"
import {useNavigation, useRoute} from "@react-navigation/native"
import {Button} from "react-native-paper";
import {useDrawer} from "features/drawer/model/drawer-context"
import {useDispatch, useSelector} from "react-redux";
import {
    loginApp,
    loginUser,
    selectAuthError,
    selectIsAppAuthorise,
    selectIsLoadingAuthorising,
    selectIsUserAuthorised
} from "entities/auth"
import {useAppDispatch} from "../../entities/store/typed-hooks";
import {getCred, setCred} from "../../shared/api/keychain-store/setCredentials";

export const DefaultScreen: FC<DefaultScreenProps> = () => {
    const routeUseRoute = useRoute()
    const [visible, setVisible] = useState(true)
    const {toggleDrawer, closeDrawer, isDrawerOpen, openDrawer} = useDrawer()

    const dispatch = useAppDispatch()
    const isLoadingAppAuthorising = useSelector(selectIsLoadingAuthorising)
    const isAppAuthorise = useSelector(selectIsAppAuthorise)
    const error = useSelector(selectAuthError)
    const isUserAuthorise = useSelector(selectIsUserAuthorised)
    function login(){
        dispatch(loginUser())
    }

    const {getState} = useNavigation()


    async function setPass(){
        await setCred('dima','666')
    }
    async function getPass(){
        const data = await getCred()
        console.log(data)
    }

    return (
        <ScrollView
            contentContainerStyle={[{
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }]}
        >
            <Text style={{borderStyle: 'solid', borderWidth: 2, fontSize: 25}}>screen : {routeUseRoute?.name}</Text>

            <Button mode={'contained-tonal'} onPress={toggleDrawer}>
                {isDrawerOpen ? 'now open' : 'now closed'}
            </Button>

            <Button mode={'contained'} onPress={login} loading={isLoadingAppAuthorising}>
                {isAppAuthorise ? 'logout':'login'}
            </Button>
            <Button mode={'contained'} onPress={setPass} loading={isLoadingAppAuthorising}>
                setPass
            </Button>
            <Button mode={'contained'} onPress={getPass} loading={isLoadingAppAuthorising}>
                getPass
            </Button>
            <Text>ERROR: {error}</Text>
            <Text>isLoading: {isLoadingAppAuthorising ? 'true':'false'}</Text>
            <Text>isAppAuthorise: {isAppAuthorise ? 'true':'false'}</Text>
            <Text>isUserAuthorise: {isUserAuthorise ? 'true':'false'}</Text>

        </ScrollView>
    )
}

type DefaultScreenProps = {
    route?: any
}
