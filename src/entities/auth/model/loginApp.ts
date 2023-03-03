import {createAsyncThunk} from "@reduxjs/toolkit"
import {Platform} from "react-native"

import {authApi} from 'shared/api/reddit-api'
import {credentialsMobileApp,credentialsWebApp} from 'shared/config/reddit-api-credentials'


export const loginApp = createAsyncThunk(
    'auth/loginApp',
    async ()=>{
        const {clientId,clientSecret} = Platform.OS === 'web' ? credentialsWebApp : credentialsMobileApp
        const {access_token} = await authApi.getAppAccessToken(clientId,clientSecret)
        return access_token
    }
)
