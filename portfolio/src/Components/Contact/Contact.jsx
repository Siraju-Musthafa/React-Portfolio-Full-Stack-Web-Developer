import React from 'react'
import './Contact.css'
import themepattern from '../../assets/theme_pattern.svg'
import mailicon from '../../assets/mail_icon.svg'
import locationicon from '../../assets/location_icon.svg'
import callicon from '../../assets/call_icon.svg'
import { useState } from 'react';

function Contact() {



  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f98d1fa2-976d-406c-abb5-b4eec8e10174");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if(data.success)
        alert('success')
    else
        alert('Error!')
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={themepattern} alt=''></img>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am open to job opportunities, freelance work, and collaborations. Feel free to contact me.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mailicon} alt=''></img>
                        <p>sirajulmusthafa786@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={callicon} alt=''></img>
                        <p>+91 9633390345</p>
                    </div>
                    <div className="contact-detail">
                        <img src={locationicon} alt=''></img>
                        <p>Vadakaara,Kozhikode,kerala</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='ENTER YOUR NAME'></input>
                <label htmlFor=''>YOUR EMAIL</label>
                <input type='email' placeholder='ENTER YOUR EMAIL' name='email'></input>
                <label htmlFor=''>WRITE YOUR MESSAGE HERE</label>
                <textarea name='message' rows='8' placeholder='ENTER YOUR MESSAGE'></textarea>
                <button className='contact-submit'>SUBMIT</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
