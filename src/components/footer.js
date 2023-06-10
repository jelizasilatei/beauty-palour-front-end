import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import '../css/Contact.css'

function Footer() {
  return (
    <div>
    <footer className='footer'>
        <div className='row'>
            <div className='column'>
               <FontAwesomeIcon className='book'icon={faBook}/>
               <p>Let us Give you what you deserve</p>
            </div>
            <div className='column'>
              <h3>Contacts <div className='underline'><span></span></div></h3>
              <p>Nairobi</p>
              <p>Ngong Road</p>
              <p className='email-id'>zildaibeautyparlour@gmail.com</p>
              <p>+254720895727</p>
            </div>
            <div className='column'>
              <h3>Links <div className='underline'><span></span></div></h3>
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
            <div className='column'>
              <div className='social-icons'>
                <h3>Socials <div className='underline'><span></span></div></h3>
                <FontAwesomeIcon className='icon' icon={faTwitter} />
                <FontAwesomeIcon className='icon' icon={faInstagram}/>
                <FontAwesomeIcon className='icon' icon={faFacebookF}/>
                <FontAwesomeIcon className='icon' icon={faPinterest}/>
                <FontAwesomeIcon className='icon' icon={faWhatsapp}/>
              </div>
            </div>
        </div>
      <hr></hr>
      <p className='copyright'>Zildai © 2023 - All rights reserved</p>
    </footer>
    </div>
  )
}

export default Footer