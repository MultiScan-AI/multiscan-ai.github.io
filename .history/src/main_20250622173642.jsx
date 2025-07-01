import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Explicitly import CSS with ?inline to ensure processing
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
