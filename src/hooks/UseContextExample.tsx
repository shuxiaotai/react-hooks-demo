import React, { useRef, useContext, useState, useCallback } from 'react'
import { UserContext } from '../contexts/UserContext'

const Child1 = () => {
  const { user, setUser }: any = useContext(UserContext)
  const handleChange = useCallback(() => {
    setUser('child1')
  }, [setUser])
  return (
    <>
      <button onClick={handleChange}>child1改变user: {user}</button>
    </>
  )
}
const Child2 = () => {
  const { user, setUser }: any = useContext(UserContext)
  const handleChange = useCallback(() => {
    setUser('child2')
  }, [setUser])
  return (
    <>
      <button onClick={handleChange}>child2改变user: {user}</button>
    </>
  )
}
const UseContextExample = (): JSX.Element => {
  const [user, setUser] = useState('sxt')
  const handleChange = useCallback(() => {
    setUser('parent')
  }, [])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <button onClick={handleChange}>父组件改变user: {user}</button>
      <Child1 />
      <Child2 />
    </UserContext.Provider>
  )
}

export default UseContextExample
