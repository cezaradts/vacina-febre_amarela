import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // Ou o componente raiz do seu app
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
