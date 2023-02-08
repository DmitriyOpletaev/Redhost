import React from "react"
import {IndexProvider} from "./model/providers/IndexProvider"
import {IndexNavigation} from "./model/navigation/IndexNavigation";



export default function App() {

    return (
        <IndexProvider>
            <IndexNavigation/>
        </IndexProvider>
    )
}


