import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {AppState} from "./types";
import store from "./store";



export type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
