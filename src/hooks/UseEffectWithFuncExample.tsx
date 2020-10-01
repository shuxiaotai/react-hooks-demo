import React, { useEffect, useState, useCallback } from 'react'

const UseEffectWithFuncExample = (): JSX.Element => {
  // setLeft每次都是同一个函数
  const [left, setLeft] = useState(1)
  // 会重新render
  const handleLeftClick = () => {
    setLeft(c => c + 1)
  }
  
  // 不会重新render

  // const handleLeftClick = useCallback(() => {
    // setLeft(c => c + 1)
  // }, [])
  useEffect(() => {
    console.log('render')
  }, [handleLeftClick])
  return (
    <>
      <div onClick={handleLeftClick}>点击左边</div>
    </>
  )
}

export default UseEffectWithFuncExample
