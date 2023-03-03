import * as WebBrowser from "expo-web-browser"
import {baseAuthUrl} from "../instance/constants"
import {AuthSessionParams, Scope} from "./types"


export async function openAuthSession(authSessionParams: AuthSessionParams) {
    console.log(makeRedditAuthUrl(authSessionParams))
    return WebBrowser.openAuthSessionAsync(
        makeRedditAuthUrl(authSessionParams),
        authSessionParams.redirectUri,
    ).then(res => res)
}

 function makeRedditAuthUrl(urlParams: AuthSessionParams) {
    const {compact, clientId, redirectUri, state, duration} = urlParams
    const scope = scopeToString(urlParams.scope)

    return`${baseAuthUrl}authorize${compact ? '.compact' : ''}?client_id=${clientId}&response_type=code&state=${state}&redirect_uri=${redirectUri}&duration=${duration}&scope=${scope}`
}

function scopeToString(scope: Scope) {
    if (scope === 'all') return '*'
    return scope.toString().replace(',', ' ')
}
