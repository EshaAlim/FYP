import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar.jsx'
import Banner from  './components/DentalClinic.jsx'
import Services from './components/Services.jsx'
import AboutUs from './components/Aboutus.jsx'
import ClinicSection from './components/ClinicSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <Navbar/>
    <Banner />
    <Services/>
   <AboutUs />
   <ClinicSection />

  </StrictMode>,
)
