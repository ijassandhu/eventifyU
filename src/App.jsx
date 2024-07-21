import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './assets/components/navbar'
import Footer from './assets/components/footer'
import './App.css'
import './index.css'
import Body from './assets/components/body'

function App() {
 

  return (
    <>
     <Navbar/> 
     <Body/>
      <Footer/>
    </>
  )
}

export default App
