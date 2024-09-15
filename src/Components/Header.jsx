import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Header.scss"
import logoHeader from '../assets/images/logo-header.png'

function Header() {
  const navigate = useNavigate();

  const directtoHome = () => {
    navigate('/home');
  };

  const directtoAbout = () => {
    navigate('/about');
  };

  const directtoDestination = () => {
    navigate('/destinations');
  };

  const directtoCountries = () => {
    navigate('/countries');
  };

  const directtoContact = () => {
    navigate('/contact');
  };







  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">

          <div className='w-50'>
            <a className="navbar-brand" href="#">
              <img className='header-logo' src={logoHeader} alt="" />
            </a>
          </div>

          <div className='w-50 text-end'>
            <a
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </a>
          </div>

          <div className="collapse navbar-collapse parent-pages" id="navbarSupportedContent">

            <div className='pages'>
              <div className='pages-child' >
                <a onClick={directtoHome} aria-current="page">
                  Home
                </a>
              </div>
              <div className='pages-child' >
                <a onClick={directtoAbout} >
                  About
                </a>
              </div>
              <div className='pages-child' >
                <a onClick={directtoDestination} >
                  Destinations
                </a>
              </div>
              <div className='pages-child' >
                <a onClick={directtoCountries} >Countries</a>
              </div>
              <div className='pages-child' >
                <a onClick={directtoContact} >Contact</a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>

  )
}

export default Header
