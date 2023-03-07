import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Link } from 'react-router-dom'
import Rotas from '../src/_config/routes'
import './css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Rotas />
        
    </BrowserRouter>
  </React.StrictMode>,
)
