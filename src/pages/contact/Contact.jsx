import React from 'react'
import {FaFacebook, FaWhatsappSquare} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div>Contact
      <button>
        <FaFacebook />
      </button>
      <Link to=''>
        <FaWhatsappSquare />
      </Link>
      <BsFacebook  />
    </div>
  )
}

export default Contact
