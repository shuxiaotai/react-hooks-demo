import React, { useContext, useCallback, useReducer } from 'react'
import { CountContext } from '../contexts/CountContext'
import { countReducer, countInitValues } from '../reducers/CountReducer'

const Child1 = () => {
  const { state, dispatch }: any = useContext(CountContext)
  const handleChange = useCallback(() => {
    dispatch({ type: 'increment', payload: { incrementNum: 5 } })
  }, [dispatch])
  return (
    <>
      <button onClick={handleChange}>child1改变: {state.count}</button>
    </>
  )
}
const Child2 = () => {
  const { state, dispatch }: any = useContext(CountContext)
  const handleChange = useCallback(() => {
    dispatch({ type: 'decrement' })
  }, [dispatch])
  return (
    <>
      <button onClick={handleChange}>child2改变: {state.count}</button>
    </>
  )
}
const UseContextAndReducerExample = (): JSX.Element => {
  const [state, dispatch] = useReducer(countReducer, countInitValues)
  const handleChange = useCallback(() => {
    dispatch({ type: 'reset' })
  }, [])
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      <button onClick={handleChange}>父组件改变: {state.count}</button>
      <Child1 />
      <Child2 />
    </CountContext.Provider>
  )
}

export default UseContextAndReducerExample
