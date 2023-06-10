import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Map from './map';
import Footer from './footer';
import ContactForm from './form';
import CommentSection from './comments';
import '../css/Contact.css'

function Contact() {
  return (
    <div>
     <h2>--THE ZILDAI EXPERIENCE--</h2>
      <br/>
      <br/>
      <ContactForm/><br/>
      <CommentSection/>
    {/* <Map /> */}
    <Footer/>
    </div>
  )
}

export default Contact