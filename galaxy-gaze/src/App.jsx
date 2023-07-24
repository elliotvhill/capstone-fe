import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>Galaxy Gaze</h1>
      <h2>An astronomy app</h2>
    </div>
  )
}

export default App
