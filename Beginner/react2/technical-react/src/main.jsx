import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyComponent from './component/MyComponent.jsx'
import MyComponent2 from './component/MyComponent2.jsx'

createRoot(document.getElementById('root')).render(
    <div>
      <MyComponent/>
      <MyComponent2 name="Dicoding Indonesia"/>
    </div>
)
