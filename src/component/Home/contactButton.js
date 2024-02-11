import React from 'react'
import "./Home.css"



function handlePress () {
  console.log("salut")
}
function contactButton() {
  return (
    <button className="button-container" onProgress={() => handlePress()}>
      <h2 className="button-content">Contact</h2>
    </button>
    
    
  )
}
export default contactButton;
