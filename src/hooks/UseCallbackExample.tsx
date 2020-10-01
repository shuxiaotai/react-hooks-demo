import React, { memo, useCallback, useState, useRef } from 'react'

// React.memo(组件)，在组件的props改变时才会重新渲染
// 子组件会重新渲染
// <Child increment={() => setCount(count + 1)}/>
// 函数没有用useCallBack时
// <Child increment={() => handleIncrement()} />
// <Child increment={handleIncrement} />
// 用了useCallback只会渲染一次
const Child = memo(({ increment }: any) => {
  const ref = useRef(0)
  console.log('render', ref.current++)
  return (
    <>
      <button onClick={() => increment(5)}>增加</button>
    </>
  )
})

// 没有react.memo
// 子组件会重新渲染
// <Child increment={() => setCount(count + 1)}/>
// 函数没有用useCallBack时
// <Child increment={() => handleIncrement()} />
// <Child increment={handleIncrement} />
// 用了useCallback只会渲染两次

// const Child = ({ increment }: any) => {
// const ref = useRef(0)
// console.log('render', ref.current++)
// return (
// <>
// <button onClick={increment}>增加</button>
// </>
// )
// }

const UseEffectWithChildExample = (): JSX.Element => {
  const [count, setCount] = useState(0)
  const handleIncrement = useCallback((n) => {
    setCount(c => c + n)
  }, [])

  // const handleIncrement = () => {
  // setCount(count + 1)
  // }

  return (
    <>
      <Child increment={handleIncrement} />
      <div>{count}</div>
    </>
  )
}

export default UseEffectWithChildExample
