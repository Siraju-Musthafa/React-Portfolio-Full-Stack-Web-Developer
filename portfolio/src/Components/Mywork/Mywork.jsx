import React from 'react'
import './Mywork.css'
import themepattern from  '../../assets/theme_pattern.svg'
import mywork from '../../assets/mywork_data'
import arrowicon from '../../assets/arrow_icon.svg'

function Mywork() {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={themepattern} alt=''></img>
        </div>
        <div className="mywork-container">
           {mywork.map((work,index)=>{
            return <img src={work.w_img} key={index} alt=''></img>
           })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrowicon}></img>
        </div>
      
    </div>
  )
}

export default Mywork
