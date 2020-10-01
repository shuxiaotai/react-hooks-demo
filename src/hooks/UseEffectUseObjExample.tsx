import React, { useEffect, useState } from 'react'

const UseEffectUseObjExample = (): JSX.Element => {
  // 可以解构出来
  // const [{ left, right }, setData] = useState({ left: 1, right: 1 })
  const [data, setData] = useState({ left: 1, right: 1 })
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
  }, [data])
  useEffect(() => {
    // 第一次会渲染，后面点击右边的时候会重新渲染
    console.log('right render')
  }, [data.right])
  useEffect(() => {
    // 第一次会渲染，后面不管点击左边还是右边都会重新渲染
    console.log('left right render')
  }, [data.left, data.right])
  useEffect(() => {
    // 第一次会渲染，后面不管点击左边还是右边都会重新渲染
    console.log('data render')
  }, [data])
  const handleLeftClick = () => {
    setData(c => ({ ...c, left: c.left + 1 }))
  }
  const handleRightClick = () => {
    setData(c => ({ ...c, right: c.right + 1 }))
  }
  return (
    <>
      <div onClick={handleLeftClick}>点击左边例子用对象</div>
      <div onClick={handleRightClick} style={{ float: 'right' }}>
        点击右边例子用对象
      </div>
    </>
  )
}

export default UseEffectUseObjExample
