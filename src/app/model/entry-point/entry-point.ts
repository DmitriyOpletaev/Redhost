import 'react-native-gesture-handler'
import {registerRootComponent} from "expo"
import {createElement} from "react"
import {Platform} from "react-native"
import {createRoot} from "react-dom/client"
import App from "../../App"


if (Platform.OS === 'web') {
    const container = document.getElementById('root') ?? document.getElementById('main')
    if (container) {
        const rootTag = createRoot(container)
        rootTag.render(createElement(App))
    } else {
        registerRootComponent(App)
    }

} else {
    registerRootComponent(App)
}
