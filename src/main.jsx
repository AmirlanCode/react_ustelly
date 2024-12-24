import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home.jsx';import NavBar from './components/NavBar'
import AboutUs from './pages/AboutUs.jsx';
import ForPartners from './pages/ForPartners.jsx';
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <NavBar/>
  <Routes>
 
      <Route path="/" element={<Home/>} />
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/forpartners" element={<ForPartners/>}/>

    </Routes>
    <App />
    </BrowserRouter>
  
  </StrictMode>,
)
