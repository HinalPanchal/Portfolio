import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Hinal Panchal</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Experience</a></li>
        <li><a href="#portfolio">Personal Projects</a></li>
        <li><a href="#testimonials">Reads</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://linkedin.com/in/hinalmpanchal"><BsLinkedin /></a>
        <a href="https://instagram.com/panchalhinal"><BsInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>Made with ❤️ by Hinal
        <br />
        Feel free to copy, Message if any help needed.</small>
      </div>
    </footer>
  )
}

export default Footer