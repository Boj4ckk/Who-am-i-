import React from 'react'
import './expertise.css'
import FigmaLogo from '../../img/ExpLogo/Figmalogo.png'


function ExpertiseLogo({title , img , style , inView , time }) {
  return (
    <div className={`expertise-logo-container ${inView ? 'animate' : ''}`} style={time}>
     
            <img src={img} className='expertise-logo' style={{...style}}/>
            <h10 className='expertise-title'>{title}</h10>

      
        
    </div>
  )
}

export default ExpertiseLogo