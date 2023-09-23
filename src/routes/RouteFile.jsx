import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Dashboard from '../pages/Dashboard/Dashboard'
import Profile from '../pages/Profile/Profile'

const RouteFile = () => {
  return (
    <Routes>
        <Route path='/' element = {<Layout/>}>
            <Route path='/' element = {<Dashboard/>}/>
            <Route path='/profile' element = {<Profile/>} />
        </Route>
    </Routes>
  )
}

export default RouteFile