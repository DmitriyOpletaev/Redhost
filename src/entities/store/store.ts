import {combineReducers, configureStore} from "@reduxjs/toolkit"

import {authReducer} from "entities/auth"

const store = configureStore({
    reducer: combineReducers({
            auth:authReducer
        }),
    devTools:{
        latency:0,
    }
})

export default store



