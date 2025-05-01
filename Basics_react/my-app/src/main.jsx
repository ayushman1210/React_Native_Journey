import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './Hello.jsx'
import Product from './product.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello/>
    <Product/>
    <App />
  </StrictMode>,
)
