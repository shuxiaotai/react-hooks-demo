import React, { useEffect, useState, useRef } from 'react'

const Child = () => {
  const [left, setLeft] = useState(1)
  const [right, setRight] = useState(1)
  const ref = useRef(0)
  useEffect(() => {
    // 只是第一次会渲染，后面不管点击左边还是右边都不会重新渲染
    console.log('only first render')
    return () => {
      console.log('only first unmount')
    }
  }, [])
  useEffect(() => {
    // 第一次会渲染，后面不管点击左边还是右边都会重新渲染
    console.log('all render')
    return () => {
      console.log('all unmount')
    }
  })
  useEffect(() => {
    // 第一次会渲染，后面点击左边的时候会重新渲染
    console.log('left render')
    return () => {
      console.log('left unmount')
    }
  }, [left])
  useEffect(() => {
    // 第一次会渲染，后面点击右边的时候会重新渲染
    console.log('right render')
    return () => {
      console.log('right unmount')
    }
  }, [right])
  useEffect(() => {
    // 第一次会渲染，后面不管点击左边还是右边都会重新渲染
    console.log('left right render')
    return () => {
      console.log('left right unmount')
    }
  }, [left, right])

  console.log('render', ref.current++)  // 重新渲染会增加，会在组件卸载时清空

  const handleLeftClick = () => {
    setLeft(c => c + 1)
  }
  const handleRightClick = () => {
    setRight(c => c + 1)
  }
  console.log('---')
  return (
    <>
      <div onClick={handleLeftClick}>点击左边</div>
      <div onClick={handleRightClick} style={{ float: 'right' }}>
        点击右边
      </div>
    </>
  )
}
const UseEffectWithChildExample = (): JSX.Element => {
  const [visible, setVisible] = useState(true)
  const handleClick = () => {
    setVisible(!visible)
  }
  return (
    <>
      <button onClick={handleClick}>点击</button>
      {visible && <Child />}
    </>
  )
}

export default UseEffectWithChildExample
