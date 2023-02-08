import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {testSlice} from "../../../__TEST-COMPONENTS/test-reducer";

const store = configureStore({
    reducer: combineReducers({
            testReducer: testSlice.reducer
        }),
    devTools:true
})

export default store
export type AppState = ReturnType<typeof store.getState>

