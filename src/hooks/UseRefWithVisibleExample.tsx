import React, { useRef, useState, useEffect } from 'react'

function UseRefWithVisibleExample() {
  const [visible, setVisible] = useState(false)
  // inputRef是不会变的
  const inputRef = useRef(null)
  useEffect(() => {
    if (visible) {
      console.log(inputRef.current)
    }
  }, [visible])

  const handleClick = () => {
    setVisible(!visible)
  }
  return (
    <>
      {visible && <input ref={inputRef}></input>}
      <button onClick={handleClick}>点击</button>
    </>
  )
}

export default UseRefWithVisibleExample
