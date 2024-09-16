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
    <h1> Test Hosting Linen2 testing  </h1>

  
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



   
     {/* <Router > 
      <Routes > 
        <Route index  element ={<Home />} />
        <Route path='/home'  element ={ <Home /> } />
        <Route path='/about'  element ={ <About /> } />
        <Route path="/destinations" element={<Destinations />} />
        <Route path='/countries' element={<Countries />} />
        <Route path= "/contact" element={<Contact />} /> 
        <Route path='admin-panel' element={<Admin />} />
      </Routes>
   </Router> */}


   </div>
  
  )
}
export default  App
