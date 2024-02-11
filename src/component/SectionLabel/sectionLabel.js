import React from 'react'
import './SectionLabel.css'

function SectionLabel(props) {
  return (
    <div className='section-container'>
      <h2 className='section-title'>{props.title}</h2>
    </div>
    
  )
}

export default SectionLabel