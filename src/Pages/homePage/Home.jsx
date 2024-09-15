import React from 'react'
import Header from '../../Components/Header' 
import "./Home.scss"
import Hero from "./homeChilds/Hero"
import Booking from './homeChilds/Booking'
import Tours from './homeChilds/Tours'
import Services from './homeChilds/Services'
import Review from './homeChilds/Review'
import Planning from './homeChilds/Planning'
import Footer from '../../Components/Footer'



function Home() {
  return (
    <div>
      <Header />      
      <Hero />
      <Booking />
      <Tours />
      <Services />
      <Review />
      <Planning />
      <Footer />
    </div>
  )
}

export default Home
