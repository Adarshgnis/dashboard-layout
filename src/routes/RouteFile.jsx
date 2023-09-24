import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Dashboard from '../pages/Dashboard/Dashboard'
import Profile from '../pages/Profile/Profile'
import Signup from '../pages/Authentication/SignUp'
import Login from '../pages/Authentication/Login'
// import PrivateRoute from './PrivateRoute'


const RouteFile = (e) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Dashboard />} />
        </Route>
      ) : (
        <Route path='/' element={<Login />} />
      )}
      <Route path='/' element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />

      </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default RouteFile