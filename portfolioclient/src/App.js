import React from 'react'
import './App.css'

import AllWorks from './all-works-page/allMyWorks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './Homepage'
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/AllWorks" element={<AllWorks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App