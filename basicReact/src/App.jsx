import { useEffect, useRef } from 'react'
import { useState } from 'react'
import './App.css'
import Component1 from './components/componentOne'

function App() {
  const [count, setCount] = useState(1)
 // const [value, setValue] = useState(1)
  const [calculation, setCalculation] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const counter = useRef(0);


 let value = count * 10

  const MultiplyByTen = () => {
   //setValue(count * 10)
   setCount(count+1)
  }

  // This useeffect will run each sec  

  // useEffect(()=> {
  //   setTimeout(()=> {
  //     setCount(count + 1)
  //   }, 1000)
  // })

// This will run only once after page loads because we are pass empty array []
  useEffect(()=> {
    setTimeout(()=> {
      setCount(count + 1)
    }, 1000)
  }, [])   // empty []

  // another way 
   
  // useEffect(() => {
  //   //Runs on the first render
  //   //And any time any dependency value changes
  // }, [prop, state]);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here


  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <>
    <h1>Hello</h1>
     <p>Hello React Count:  {count}</p>
     <button onClick={MultiplyByTen}>Multiply By 10</button>
     <p>Multiplied Value : {value}</p>
     <p>Calculation Value : {calculation}</p>
     <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {counter.current}</h1>
     <Component1 />
    </>
  )
}

export default App
