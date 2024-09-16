import React from 'react'
import "./app.scss"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import About from './Pages/aboutPage/About'
import Home from "./Pages/homePage/Home"
import Contact from "./Pages/contactPage/Contact"
import Destinations from './Pages/destinationPage/Destinations'
import Countries from './Pages/countriesPage/Countries'
import Admin from './Pages/adminPage/Admin'
import Header from './Components/Header'




function  App() {
  return (
   <div className='main'> 
  
    <Header />
      <Routes>
       <Route index  element ={<Home />} />
       <Route path='/home'  element ={ <Home /> } />
       <Route path='/about'  element ={ <About /> } />
       <Route path="/destinations" element={<Destinations />} />
       <Route path='/countries' element={<Countries />} />
       <Route path= "/contact" element={<Contact />} /> 
       <Route path='admin-panel' element={<Admin />} />
      </Routes>
   </div>
  
  )
}
export default  App
