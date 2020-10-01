import React, { useRef } from 'react'

function UseRefStoreFuncExample() {
  // useRef 可以存储函数
  const ref = useRef(() => console.log('xxx'))
  const handleClick = () => {
    ref.current()
  }
  return <button onClick={handleClick}>点击</button>
}

export default UseRefStoreFuncExample
