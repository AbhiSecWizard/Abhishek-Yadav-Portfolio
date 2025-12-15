import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { BgcPage } from './component/BgcPage.jsx'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BgcPage>
        <App />
      </BgcPage>
    </BrowserRouter>
  </StrictMode>
)
