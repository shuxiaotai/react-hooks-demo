import React, { useEffect, useState } from 'react'

const UseEffectExample = (): JSX.Element => {
  const [left, setLeft] = useState(1)
  const [right, setRight] = useState(1)
  useEffect(() => {
    // 只是第一次会渲染，后面不管点击左边还是右边都不会重新渲染
    console.log('only first render')
  }, [])
  useEffect(() => {
    // 第一次会渲染，后面不管点击左边还是右边都会重新渲染
    console.log('all render')
  })
  useEffect(() => {
    // 第一次会渲染，后面点击左边的时候会重新渲染
    console.log('left render')
  }, [left])
  useEffect(() => {
    // 第一次会渲染，后面点击右边的时候会重新渲染
    console.log('right render')
  }, [right])
  useEffect(() => {
    // 第一次会渲染，后面不管点击左边还是右边都会重新渲染
    console.log('left right render')
  }, [left, right])
  const handleLeftClick = () => {
    setLeft(c => c + 1)
  }
  const handleRightClick = () => {
    setRight(c => c + 1)
  }
  return <>
    <div onClick={handleLeftClick}>点击左边</div>
    <div onClick={handleRightClick} style={{ float: 'right'}}>点击右边</div>
    </>
}

export default UseEffectExample
