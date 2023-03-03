import {AppState} from "entities/store"

export const selectIsAppAuthorise = (state:AppState)=>state.auth.isAppAuthorised
export const selectIsLoadingAuthorising = (state:AppState)=>state.auth.isLoadingAuthorising
export const selectIsUserAuthorised = (state:AppState)=>state.auth.isUserAuthorised
export const selectAuthError = (state:AppState)=>state.auth.error
