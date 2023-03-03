import axios from "axios"
import {Buffer} from "buffer"
import {baseAuthUrl} from "./constants"
import {Credentials} from "../auth/types"

export const authInstance = (clientId:Credentials['clientId'],clientSecret:Credentials['clientSecret']) => {
    return axios.create({
        baseURL: baseAuthUrl,
        headers: {
            'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
}
