import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyComponent from './component/class_component/MyComponent.jsx'
import MyComponent2 from './component/class_component/MyComponent2.jsx'
import MyComponent3 from './component/class_component/MyComponent3.jsx'
import Counter from './component/state_component/StateComponent.jsx'
import MyButton1 from './component/catalog_component/button/MyButton1.jsx'

createRoot(document.getElementById('root')).render(
    <div className=''>
      <MyComponent/>
      <MyComponent2 name="Dicoding Indonesia"/>
      <MyComponent3 name="Yayasan Dicoding Indonesia"/>
      <MyComponent3 name="Kota Bandung - Indonesia"/>
      <MyComponent3 name="Hello Coders!"/>
      <Counter/>
      <MyButton1/>
      <MyButton1/>
      <MyButton1/>
    </div>
)
