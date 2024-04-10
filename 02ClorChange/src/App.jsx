import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
     <Card username="Jagadeesh" post="Principal Engg" />
     <Card username="Ramesh" post="software Engg"/>
     <Card />
     <Card />
    </>
  )
}

export default App
