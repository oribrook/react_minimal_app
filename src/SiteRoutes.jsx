import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotesWithoutPagination from './NotesWithoutPagination'
import MyInfinitScroll from './MyInfiniteScroll'
import Notes from './Notes'
import Home from './Home'
import PageNumServer from './PageNumServer'
import PageNumNoServer from './PageNumNoServer'
import Test from './Test'

const SiteRoutes = () => {
  return (
      <Routes>
          <Route path='/home' element={ <Home/>} />
          <Route path='/' element={ <Home/>} />          
          <Route path='/notes-with-no-paginator' element={ <NotesWithoutPagination/>} />
          <Route path='/no-server-infinite-example' element={ <MyInfinitScroll/>} />
          <Route path='/infinite-full-example' element={ <Notes/>} />
          <Route path='/paging-paginator' element={ <PageNumNoServer/>} />
          <Route path='/paging-server' element={ <PageNumServer/>} />
          <Route path='/another-example' element={ <Test/>} />
      </Routes>
  )
}

export default SiteRoutes