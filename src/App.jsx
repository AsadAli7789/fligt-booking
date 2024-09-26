import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/footer'
import Navbar from './component/nav-bar'
import Example from './component/nav-bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Example/> 
    </>
  )
}

export default App
