import {createAsyncThunk} from "@reduxjs/toolkit"
import {Platform} from "react-native"

import {authApi} from "shared/api/reddit-api"
import {credentialsMobileApp, credentialsWebApp} from "shared/config/reddit-api-credentials"
import {parseUrlSearchParam} from "shared/lib/parseUrlSearchParam"
import {AuthRedirectResponse} from "../lib/types"
import {generateRandomString} from "../../../shared/lib/generateRandomString"
import {Errors} from "../lib/errors"

export const loginUser = createAsyncThunk<string, void>(
    'auth/loginUser',
    async () => {

        const credentials = Platform.OS === 'web' ? credentialsWebApp : credentialsMobileApp
        const requestState = generateRandomString()
        const redirectResponse = await authApi.openAuthSession({
            clientId: credentials.clientId,
            redirectUri: credentials.redirectUri,
            state: requestState,
            duration: 'permanent',
            scope: 'all',
            compact: false
        })
        if (redirectResponse.type === 'success') {
            const {
                state: responseState,
                code
            } = parseUrlSearchParam(redirectResponse.url) as AuthRedirectResponse
            if (code && responseState === requestState) {
                try {
                    const {access_token} = await authApi.getUserAccessToken(code, credentials)
                    return access_token
                } catch (error) {
                    throw Errors.BaseError
                }

            }
            throw Errors.BaseError
        }
        throw Errors.BaseError
    }
)


