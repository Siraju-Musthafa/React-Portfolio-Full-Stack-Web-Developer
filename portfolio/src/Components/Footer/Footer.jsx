import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/footer_logo.svg'
import usericon from '../../assets/user_icon.svg'


function Footer() {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={footerlogo} alt=''></img> */}
                <div className='footerlogoname'>SRJ</div>
                <p>I specialize in Python and Django, creating modern web solutions with clean code and responsive design.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={usericon} alt=""></img>
                    <input type='email' placeholder='Enter Your Email'></input>
                </div>
                <div className="footer-subscribe"> Subscribe </div>
            </div>
        </div>
      <hr></hr>
      <div className="footer-bottom">
        <p className="footer-bottom-lef">
           © 2026 Sirajul Musthafa. All Rights Reserved.
            Built with passion using Django and modern web technologies.
        </p>
        <div className="footer-bottom-right">
            <p>Term Of Service</p>
            <p>Privacy Policy</p>
            <p>Connect With me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
