import {openAuthSession} from './auth-session'
import {getUserAccessToken} from './user-access-token'
import {getAppAccessToken} from './app-access-tokens'

export const authApi = {
    getUserAccessToken,getAppAccessToken,openAuthSession
}
