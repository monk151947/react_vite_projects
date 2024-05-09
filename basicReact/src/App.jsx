import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
 // const [value, setValue] = useState(1)
let value = count * 10

  const MultiplyByTen = () => {
   //setValue(count * 10)
   setCount(count+1)
  }

  return (
    <>
    <h1>Hello</h1>
     <p>Hello React Count:  {count}</p>
     <button onClick={MultiplyByTen}>Multiply By 10</button>
     <p>Multiplied Value : {value}</p>
    </>
  )
}

export default App
