import { useState } from "react"
import {useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { decrement, increment } from "../state/counter/counterSlice"


export default function Counter(){
    const count = useSelector((state:RootState)=>state.counter.value)
     const dispatch = useDispatch()
    return (
        <div >
            <h2>{count}</h2>
            <button className="buttonStyle" onClick={()=>dispatch(increment())}>increament</button>
            <button className="buttonStyle" onClick={()=>dispatch(decrement())}>decreament</button>
        </div>
    )
}