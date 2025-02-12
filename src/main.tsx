import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';


const removeLoader = () => {
  const loader = document.getElementById('loader-container')
  if (loader) {
    loader.style.display = 'none'
    document.body.style.overflow = 'auto' 
  }
}


removeLoader()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
