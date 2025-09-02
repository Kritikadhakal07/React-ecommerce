import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App.jsx'
import React from "react";
console.log("React version:", React.version);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   
  </StrictMode>,
)
