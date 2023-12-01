import React from 'react'
import DHlogo from '../images/DH.png'
import Facebook from '../images/ico-facebook.png'
import Instagram from '../images/ico-instagram.png'
import Tiktok from '../images/ico-tiktok.png'
import Whatsapp from '../images/ico-whatsapp.png'
import '../css/styles.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='SocialN'>
        <a href="facebook.com" target='_blank'>
          <img src={Facebook} alt="logo-facebook" className='RS' />
        </a>
        <a href="instagram.com" target='_blank'>
          <img src={Instagram} alt="logo-instagram" className='RS' />
        </a>
        <a href="tiktok.com" target='_blank'>
          <img src={Tiktok} alt="logo-tiktok" className='RS' />
        </a>
        <a href="whatsapp.com" target='_blank'>
          <img src={Whatsapp} alt="logo-whastapp" className='RS' />
        </a>
      </div>
      <div className='copy'>
        <p>Powered by</p>
        <img src={DHlogo} alt='DH-logo' />
        </div>
    </footer>
  )
}

export default Footer
