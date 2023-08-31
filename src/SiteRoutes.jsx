import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotesWithoutPagination from './NotesWithoutPagination'
import Home from './Home'


const SiteRoutes = () => {
  return (
      <Routes>
          <Route path='/home' element={ <Home/>} />
          <Route path='/' element={ <Home/>} />          
          <Route path='/notes-with-no-paginator' element={ <NotesWithoutPagination/>} />          
      </Routes>
  )
}

export default SiteRoutes