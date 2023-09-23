import React, { Fragment, useReducer } from 'react'
import reducer from "./Red";

const ReducerHook = () => {
  const initial_value  = 10;
  const [count, dispatch] = useReducer(Reducer, initial_value)
  return (
   <Fragment>
   <button onClick={()=> dispatch({type:"INCREMENT"})}>{count}</button>
   <button onClick={()=> dispatch({type:"DECREMENT"})}>{count}</button>
   </Fragment>
  )
}

export default ReducerHook;