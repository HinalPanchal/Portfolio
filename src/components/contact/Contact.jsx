import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fe9ptk3', 'template_6bbpgyd', form.current, 'wzo-CYFBAB52TPVIV')

    e.target.reset();
      
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>hinalpanchal698@gmail.com</h5>
            <a href="mailto:hinalpanchal698@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact_option_icon'/>
            <h4>LinkedIn</h4>
            <h5>hinalmpanchal</h5>
            <a href="https://linkedin.com/in/hinalmpanchal" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <h5>**********</h5>
            <a href="https://api.whatsapp.com/send?phone=919594806117" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact