import React, { useContext, useCallback, useReducer } from 'react'
import { StoreContext } from '../contexts/StoreContext'
import { mainReducer, initValues } from '../reducers/CombineReducer'

const Child1 = () => {
  const { state, dispatch }: any = useContext(StoreContext)
  const handleChange = useCallback(() => {
    dispatch({
      type: 'increment',
      payload: { incrementNum: 5 },
    })
  }, [dispatch])
  const handleChangeName = useCallback(() => {
    dispatch({
      type: 'add-name',
    })
  }, [dispatch])
  return (
    <div>
      <button onClick={handleChange}>
        child1的count: {state.combineCountInitValues.count}
      </button>
      <button onClick={handleChangeName}>
        child1的name: {state.combineNameInitValues.name}
      </button>
    </div>
  )
}
const Child2 = () => {
  const { state, dispatch }: any = useContext(StoreContext)
  const handleChange = useCallback(() => {
    dispatch({ type: 'decrement' })
  }, [dispatch])
  const handleChangeName = useCallback(() => {
    dispatch({
      type: 'cut-name',
    })
  }, [dispatch])
  return (
    <div>
      <button onClick={handleChange}>
        child2的count: {state.combineCountInitValues.count}
      </button>
      <button onClick={handleChangeName}>
        child2的count: {state.combineNameInitValues.name}
      </button>
    </div>
  )
}
const CombineStoreReducerExample = (): JSX.Element => {
  const [state, dispatch] = useReducer(mainReducer, initValues)
  const handleChange = useCallback(() => {
    dispatch({ type: 'reset' })
  }, [dispatch])
  const handleChangeName = useCallback(() => {
    dispatch({ type: 'reset-name' })
  }, [dispatch])
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div>
        <button onClick={handleChange}>
          父组件改变count: {state.combineCountInitValues.count}
        </button>
        <button onClick={handleChangeName}>
          父组件改变name: {state.combineNameInitValues.name}
        </button>
      </div>
      <Child1 />
      <Child2 />
    </StoreContext.Provider>
  )
}

export default CombineStoreReducerExample
