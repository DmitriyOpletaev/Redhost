import {createSlice} from "@reduxjs/toolkit";
import {AppState} from "../app/model/store/store";


export const testSlice = createSlice({
    name: 'test',
    initialState: {
        name: 'dima',
    },
    reducers: {},
    extraReducers: (builder) => {

    }
})


export const testSelectorName = (state: AppState) => state.testReducer.name
