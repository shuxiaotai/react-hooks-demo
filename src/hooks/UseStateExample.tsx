import React, { useEffect, useState } from 'react'

function UseStateExample() {
  const getCount = () => 1
  const [count, setCount] = useState(() => getCount())
  const [data, setData] = useState({ name: 'sxt', age: 1 })
  useEffect(() => {
    console.log('render', count)
    console.log(data)
  }, [count, data])
  const handleClick = () => {
    setCount(count + 1)
    setData(currentVal => ({ ...currentVal, age: currentVal.age++ }))
  }
  return <div onClick={handleClick}>useState</div>
}

export default UseStateExample
