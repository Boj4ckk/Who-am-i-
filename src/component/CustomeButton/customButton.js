import React from 'react'
import './customButton.css'

function CustomButton({title , style ,  handleClick}) {

  
  
  
  return (
    <div className='customButton-container' style={{...style}} onClick={handleClick}>
        {title}
    </div>
  )
}

export default CustomButton