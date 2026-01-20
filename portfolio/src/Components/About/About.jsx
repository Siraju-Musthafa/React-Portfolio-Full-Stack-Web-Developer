import React from 'react'
import './About.css'
import themepattern from "../../assets/theme_pattern.svg"
import profileimag from '../../assets/about_profile.svg'
import siraj from '../../assets/siraj3.png'

function About() {
  return (
    <div  id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={themepattern} alt=''></img>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={siraj} alt=''></img>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m a Full-Stack Web Developer with a strong foundation in Computer Science and practical experience from a Python Django internship at Wahy Labs Solutions.</p>
                     <p>I love working on web applications, building APIs, and creating secure backend systems with Django. I’m always eager to learn, grow, and build software that solves real-world problems. I focus on writing clean, maintainable code and continuously improving my technical skills.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Python</p><hr style={{width:'90%'}}></hr></div> 
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'50%'}}></hr></div>
                    <div className="about-skill"><p>JavaScripts</p><hr style={{width:'70%'}}></hr></div>
                    <div className="about-skill"><p>ReactJs</p><hr style={{width:'60%'}}></hr></div>
                    <div className="about-skill"><p>MySQL</p><hr style={{width:'90%'}}></hr></div> 
                    <div className="about-skill"><p>REST APIs</p><hr style={{width:'70%'}}></hr></div> 
                       
                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>01+</h1>
                <p>YEAR OF EXPERIENCE</p>
            </div>
            <hr></hr>
             <div className="about-achievment">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED </p>
            </div>
            {/* <hr></hr>
             <div className="about-achievment">
                <h1>15+</h1>
                <p>  HAPPY CUSTOMER</p>
            </div> */}
            

        </div>
    </div>
  )
}

export default About
