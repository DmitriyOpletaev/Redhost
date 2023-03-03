import React, {useState} from "react"
import {IndexProvider} from "./model/providers/IndexProvider"
import {IndexNavigation} from "./model/navigation/IndexNavigation"
import * as WebBrowser from "expo-web-browser";
import {Button} from "react-native-paper";
import {Linking, Text, View} from "react-native";
import {openRedditAuthorisePage} from "../entities/auth/model/slice";


WebBrowser.maybeCompleteAuthSession()



export default function App() {

    return (
            <IndexProvider>
                <IndexNavigation/>
            </IndexProvider>
    )
}


