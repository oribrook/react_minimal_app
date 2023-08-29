import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Notes from './Notes'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'


const SiteRoutes = () => {
  return (
      <Routes>
          <Route path='/home' element={ <Home/>} />
          <Route path='/' element={ <Home/>} />                    
          <Route path='/login' element={ <Login/>} />
          <Route path='/signup' element={ <Signup/>} />
          <Route path='/infinite-full-example' element={ <Notes/>} />          
      </Routes>
  )
}

export default SiteRoutes