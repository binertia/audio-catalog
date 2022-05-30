import React from 'react'
import { Routes, Route } from '../node_modules/react-router-dom/index'
import Layout from './pages/Layout'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import Home from './pages/Home'

const MainRoutes = () => {
  return (

      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/headphones' element={<Headphones/>} /> 
          <Route path='/speakers' element ={<Speakers/>} />
          <Route path='/earphones' element ={<Earphones/>} />
        </Route>
      </Routes>
  )
}

export default MainRoutes
