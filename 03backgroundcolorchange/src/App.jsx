import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('blue')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>React with TailWind</div>
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-white' onClick={() => setColor('red') }>Red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-white' onClick={() => setColor('green') }>Green</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-white' onClick={() => setColor('yellow') }>Yellow</button>    
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-white' onClick={() => setColor('pink') }>pink</button>    
         </div>
        </div>
    </>
  )
}

export default App
