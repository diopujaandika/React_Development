import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyComponent from './component/MyComponent.jsx'
import MyComponent2 from './component/MyComponent2.jsx'
import MyComponent3 from './component/MyComponent3.jsx'

createRoot(document.getElementById('root')).render(
    <div>
      <MyComponent/>
      <MyComponent2 name="Dicoding Indonesia"/>
      <MyComponent3 name="Yayasan Dicoding Indonesia"/>
      <MyComponent3 name="Kota Bandung - Indonesia"/>
      <MyComponent3 name="Hello Coders!"/>

    </div>
)
