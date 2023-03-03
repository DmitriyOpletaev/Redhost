import axios from "axios"
import {baseRequestsUrl} from "./constants"

export function requestsInstance(access_token: string) {
    return axios.create({
        baseURL: baseRequestsUrl,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': "bearer " + access_token,
        }
    })
}
