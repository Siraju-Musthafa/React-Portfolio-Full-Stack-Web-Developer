import React from 'react'
import './Hero.css'
import profileimage from '../../assets/profile_img.svg'
import siraj from '../../assets/image.png'
import { Link } from "react-scroll";
function hero() {
  return (
    <div id='home' className='Hero'>
         <img src={siraj} alt=''></img> 
        <h1><span>Hi, I am Sirajul musthafa.</span> Full Stack Web Developer</h1>
        <p>Building secure, scalable, and user-friendly web applications</p>
        <div className="Hero-action">
            <div className="Hero-connect"> <Link  className='anchor-link'  to='contact' smooth duration={500}>Connect With Me </Link>   </div>
            <div className="Hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default hero
