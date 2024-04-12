import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h2>React Project for Context API</h2>
      <Login />
      <Profile />
     </UserContextProvider>
  )
}

export default App
