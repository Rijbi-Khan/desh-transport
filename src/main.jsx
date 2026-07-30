import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // এটি ইমপোর্ট নিশ্চিত করুন

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* এর ভেতর App কে রাখুন */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)