import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App ,Hello} from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <div>
  //   <h1>Siva</h1>
  //   <h2>bkkb</h2>
  // </div>
<App />
  // <StrictMode>
  //   <Siva />
  //   <Hello />
  // </StrictMode>,
)
