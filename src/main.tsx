import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Remove loader after the app has rendered
window.addEventListener('load', () => {
  const loader = document.getElementById('simple-loader')
  if (loader) {
    loader.style.opacity = '0'
    loader.style.transition = 'opacity 0.3s ease'
    
    // Remove from DOM after transition
    setTimeout(() => {
      loader.style.display = 'none'
    }, 300)
  }
})
