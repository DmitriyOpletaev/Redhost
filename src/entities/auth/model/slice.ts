import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "../config/initial-state"
import {loginApp} from "./loginApp"
import {loginUser} from "./loginUser";

export const {actions, reducer} = createSlice({
        name: 'auth',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(loginApp.pending, (state) => {
                state.isLoadingAuthorising = true
            })
            builder.addCase(loginApp.rejected, (state) => {
                state.isLoadingAuthorising = false
            })
            builder.addCase(loginApp.fulfilled, (state) => {
                state.isLoadingAuthorising = false
                state.isAppAuthorised = true
            })


            builder.addCase(loginUser.pending, (state) => {
                state.isLoadingAuthorising = true
            })
            builder.addCase(loginUser.rejected, (state, {error}) => {
                state.isLoadingAuthorising = false
                if (error.message) state.error = error.message
            })
            builder.addCase(loginUser.fulfilled, (state) => {
                state.isLoadingAuthorising = false
                state.isUserAuthorised = true
            })
        }
    }
)


