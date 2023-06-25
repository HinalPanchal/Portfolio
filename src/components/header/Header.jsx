import React from 'react'
import './header.css'
import CTA from './CTA'
import Hinal_Profile_Pic from '../../assets/Hinal_Profile_Pic.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Hinal Panchal</h1>
        <h4 className="text-light">Fullstack Developer</h4>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Hinal_Profile_Pic} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header