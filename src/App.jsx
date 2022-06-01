import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { MainLayout } from './layout/MainLoyut'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container ' >    
         <BrowserRouter>
        <MainLayout>
        </MainLayout>
         </BrowserRouter>

    </div>
  )
}

export default App
