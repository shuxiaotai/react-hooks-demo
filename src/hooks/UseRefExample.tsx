import React, { useRef, useEffect } from 'react'

function UseRefExample() {
  // inputRef是不会变的
  const inputRef = useRef(null)
  useEffect(() => {
    console.log(inputRef.current)
  }, [])

  return <input ref={inputRef}></input>
}

export default UseRefExample
