import React, { useEffect, useState, useRef, useMemo } from 'react'

// React.memo / React components can also be defined as functions which can be wrapped
const Child = React.memo(({ value }: any) => {
  const ref = useRef(0)
  console.log('child render', ref.current++)  // 重新渲染会增加，会在组件卸载时清空
  console.log('value', value)

  return (
    <>
      子组件
    </>
  )
})
const UseEffectWithChildExample = (): JSX.Element => {
  const [count, setCount] = useState(0)
  // const value = [1, 2, 3] 
  // 如果子组件不用React.memo还是会渲染
  const value = useMemo(() => [1, 2, 3], [])
  const handleClick = () => {
    setCount(c => c + 1)
  }
  console.log('count', count)
  console.log('parent render')
  return (
    <>
      <button onClick={handleClick}>点击{count}</button>
      <Child value={value} />
    </>
  )
}

export default UseEffectWithChildExample
