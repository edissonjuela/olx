import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Registro } from './componentes/registro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>    
      
      <Registro></Registro>
    </div>
  )
}

export default App
