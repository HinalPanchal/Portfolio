import React from 'react'
import HinalResume from '../../assets/HinalResume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={HinalResume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA