import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Blog from './pages/Blog'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path="*" element={<h1>Page NotFound 404</h1>}/>

    </Routes>
  )
}

export default App
