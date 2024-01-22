import React from 'react'
import HomePage from './home/index.js'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Intro from './intro/Intro.js'
const Index = () => {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<HomePage/>} />
        <Route index path='/home-page' element={<HomePage/>} />
        <Route index path='/introduction' element={<Intro/>} />
      </Routes>

    </div>
  )
}

export default Index
