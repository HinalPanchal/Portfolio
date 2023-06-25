import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/hinalmpanchal" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/HinalPanchal" target="_blank"><FaGithub /></a>
        <a href="https://instagram.com/panchalhinal" target="_blank"><FaInstagramSquare /></a>
    </div>
  )
}

export default HeaderSocials