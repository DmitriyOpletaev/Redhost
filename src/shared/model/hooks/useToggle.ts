import {useCallback, useState} from "react"

export function useToggle(initialState:boolean=false){
    const [isActive,setIsActive]=useState(initialState)
    const on = useCallback(()=>{
        setIsActive(true)
    },[])
    const off = useCallback(()=>{
        setIsActive(false)
    },[])
    const toggle = useCallback(()=>{
        setIsActive((isActive)=>!isActive)
    },[isActive])
    return{
        isActive,on,off,toggle
    }
}

