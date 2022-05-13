import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
      <div className='footer'>
          <div className="footerTopLeft">
              <img src="https://adl-foundation.adidas.com/flags/1-0-0/in.svg" alt="Tiranga" />
              <small>India</small>
          </div>
          <div className='footerTopRight'>
              <p>Privacy Pilicy</p>
              <h4>.</h4>
              <p>Terms and Conditions</p>
              <h4>.</h4>

              <p>Cookies</p>
          </div>

          <div className="footerBottom">
              <p>©2021 adidas India Marketing Pvt. Ltd</p>
          </div>
          
    </div>
  )
}

export default Footer