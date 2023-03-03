import {AuthState} from "../lib/types";

export const initialState:AuthState={
    isAppAuthorised:false,
    isUserAuthorised:false,
    isLoadingAuthorising:false,
    error:''
}
