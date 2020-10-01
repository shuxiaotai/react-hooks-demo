import React, { useLayoutEffect, useRef, useState } from 'react'

function UseLayoutEffectExample() {
  const [text, setText] = useState('init')
  const divRef: any = useRef()
  // 在大多数情况下，我们都可以使用useEffect处理副作用，但是，如果副作用是跟DOM相关的，就需要使用useLayoutEffect。useLayoutEffect中的副作用会在DOM更新之后同步执行
  useLayoutEffect(() => {
    // 不管在useEffect前面还是后面，都是useLayoutEffect先打印
    console.log('layout effect')
    console.log(divRef.current.getBoundingClientRect())
  }, [text])

  const handleClick = () => {
    setText(text + 'sss')
  }
  return (
    <span ref={divRef} onClick={handleClick}>
      {text}
    </span>
  )
}

export default UseLayoutEffectExample
