import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseSayHello from './component/component_properties/UseSayHello_Component.jsx'

createRoot(document.getElementById('root')).render(
    <div>
      <App/>
      <UseSayHello/>
    </div>
)
