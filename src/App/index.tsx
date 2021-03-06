import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import BaseStyles from './BaseStyles'
import ResetStyles from './ResetStyles'
import AppRoutes from './AppRoutes'

const App = () => (
  <BrowserRouter>
    <ResetStyles />
    <BaseStyles />
    <AppRoutes />
  </BrowserRouter>
)

export default App
