import React from 'react'
import HomePage from './home/index.js'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
const Index = () => {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<HomePage/>} />
        <Route index path='/home-page' element={<HomePage/>} />
      </Routes>

    </div>
  )
}

export default Index
