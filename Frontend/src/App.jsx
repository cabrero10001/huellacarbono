import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Fondo } from './components/Fondo'

function App() {

  return (
      <Routes>
        <Route path='/login' element={
          <Fondo>
            <Login />
          </Fondo>
          }/>
        <Route path='/register' element = {
          <Fondo>
            <Register />
          </Fondo>
          }/>
      </Routes>
    )
}

export default App
