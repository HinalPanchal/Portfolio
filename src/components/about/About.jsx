import React from 'react'
import './about.css'
import Profilepic from '../../assets/Profilepic.jpeg'
import HinalBlue from '../../assets/HinalBlue.jpeg'

import {FaAward} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {MdWorkHistory} from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About ME</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            {/* <img src={Profilepic} alt="About Image"></img> */}
            <img src={HinalBlue} alt="About Image"></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <MdWorkHistory className='about_icon'/>
              <h5>Experience</h5>
              <small>2.5+ Years Working</small>
            </article>
            <article className='about_card'>
              <FaUserGraduate className='about_icon'/>
              <h5>B.E. in EXTC</h5>
              <small>9.5 CGPA</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Star of the Month</h5>
              <small>TCS</small>
            </article>
          </div>

          <p>
          Passionate full stack developer proficient in frontend and backend technologies,
          dedicated to delivering high-quality web applications with a strong focus on responsive 
          design and exceptional user experience. Driven by ethical values, continuous learning, 
          and a strong commitment to professional growth.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About