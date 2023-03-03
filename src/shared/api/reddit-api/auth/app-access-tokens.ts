import {authInstance} from "../instance/auth-instance"
import {AppAuthResponse} from "./types"

export function getAppAccessToken(clientId:string, clientSecret:string) {
    return  authInstance(clientId,clientSecret).post<AppAuthResponse>(
        'access_token',
        `grant_type=client_credentials`,
    ).then(res=>res.data)
}
