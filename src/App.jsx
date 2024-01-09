import { useState } from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import './App.css'

function App() {

  return (
    <div className='main-container'>
      <Navbar></Navbar>
      <Slider></Slider>
    </div>
  )
}

export default App
