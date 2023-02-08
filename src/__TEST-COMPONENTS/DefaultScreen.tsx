import {FC} from "react"
import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import {testSelectorName} from "./test-reducer";

export const DefaultScreen: FC<DefaultScreenProps> = ({route}) => {
    const someName = useSelector(testSelectorName)
    return (
        <View style={{
            flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(119,119,119,0.28)'
        }}>
            <Text>{someName}</Text>
            <Text>{route && route.name}</Text>
        </View>
    )
}

type DefaultScreenProps = {
    route?:any
}
