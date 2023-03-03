import {Credentials, UserAuthResponse} from "./types"
import {authInstance} from "../instance/auth-instance"


export async function getUserAccessToken(authCode: string, credentials: Credentials) {
    const {clientId, clientSecret, redirectUri} = credentials
    return authInstance(clientId, clientSecret).post<UserAuthResponse>(
        'access_token',
        `grant_type=authorization_code&code=${authCode}&redirect_uri=${redirectUri}`
    ).then(res => res.data)
}
