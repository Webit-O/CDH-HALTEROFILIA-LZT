import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import router from './router/index'
import './App.css'
function App() {
  return (
    <Router>
      <RouterProvider router={router} />
    </Router>
  )
}

export default App
