import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import { GlobalStyle } from './GlobalStyles.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
)
