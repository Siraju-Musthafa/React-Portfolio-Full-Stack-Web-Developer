import React from 'react'
import './Service.css'
import themepattern from '../../assets/theme_pattern.svg'
import servicedata from '../../assets/services_data.js'
import arrowicon from '../../assets/arrow_icon.svg'

function Service() {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={themepattern} alt='theme'></img>
        </div>
        <div className="services-container">
            {servicedata.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrowicon} alt=''></img>
                    </div>

                </div>
            })}

        </div>
      
    </div>
  )
}

export default Service
