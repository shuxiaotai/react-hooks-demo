import React, { useReducer } from 'react'

// use-immer
function useReducerExample() {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + action.payload.incrementNum}
      case 'decrement':
        return { ...state, count: state.count - 1 }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <>
      <button onClick={() => dispatch({ type: 'increment' , payload: { incrementNum: 5 } })}>增加</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>减少</button>
      {state.count}
    </>
  )
}

export default useReducerExample
