import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Fondo } from './components/Fondo'
import { CalculadoraHuella } from './components/Calculadora'

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
        <Route path='/calculadora' element={
          <Fondo>
            <CalculadoraHuella />
          </Fondo>
          } />
      </Routes>
    )
}

export default App
