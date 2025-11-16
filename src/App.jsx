import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Services from './pages/Services'
import Investments from './pages/Investments'
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import FourOFour from './pages/FourOFour'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={
        <PublicRoute>
          <Landingpage/>
        </PublicRoute>
      }></Route>
      <Route path='/home' element={<Navigate to='/' replace/>}></Route>
      <Route path='/index' element={<Navigate to='/' replace/>}></Route>

      <Route path='/services' element={<PublicRoute><Services/></PublicRoute>}></Route>
      <Route path='/service' element={<Navigate to='/services' replace/>}></Route>
  
      <Route path='/investments' element={<PublicRoute><Investments/></PublicRoute>}></Route>
      <Route path='/investment' element={<Navigate to='/investments' replace/>}></Route>
  
      <Route path='/about' element={<PublicRoute><About/></PublicRoute>}></Route>
      <Route path='/abouts' element={<Navigate to='/about' replace/>}></Route>
  
      <Route path='/contact' element={<PublicRoute><Contact/></PublicRoute>}></Route>
      <Route path='/contacts' element={<Navigate to='/contact' replace/>}></Route>

      <Route path='/signup' element={
        <PublicRoute>
          <Signup/>
        </PublicRoute>
      }></Route>
      <Route path='/register' element={<Navigate to='/signup' replace/>}></Route>
      <Route path='/sign-up' element={<Navigate to='/signup' replace/>}></Route>

      <Route path='/signin' element={
        <PublicRoute>
          <Signin/>
        </PublicRoute>
      }></Route>
      <Route path='/login' element={<Navigate to='/signin' replace/>}></Route>
      <Route path='/log-in' element={<Navigate to='/signin' replace/>}></Route>
      <Route path='/sign-in' element={<Navigate to='/signin' replace/>}></Route>

      <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      }></Route>
      <Route path='/dashboards' element={<Navigate to='/dashboard' replace/>}></Route>
  
      <Route path='*' element={<FourOFour/>}></Route>
    </Routes>
  )
}

export default App