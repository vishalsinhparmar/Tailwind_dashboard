import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './Layout'
import Add_Food from './Add_Food'
import Mange_food from './Mange_food'
import MyEditpage from './MyEditpage'
import PagenotFound from './PagenotFound'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Router>
        <Routes>
        <Route index path='/' element={<Layout/>}/>
          <Route  path='/addfood' element={<Add_Food/>}/>
          <Route  path='/managefood' element={<Mange_food/>}/>
          <Route  path='/edit/:id' element={<MyEditpage/>}/>
          <Route  path='*' element={<PagenotFound/>}/>



        </Routes>
  </Router>

  </React.StrictMode>,
)
