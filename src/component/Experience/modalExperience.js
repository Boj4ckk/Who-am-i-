import React from 'react'
import './modalExperience.css'
import CustomButton from '../CustomeButton/customButton';



function Modal({ modalState, closeModal , title , data}) {
    const handleClick = () =>{
        closeModal();
    }
    if (!modalState) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className='modal-title-container'>
            <h1 className='modal-title-content'>{title}</h1>
          </div>
          <div className='modal-data-container'>
            <h1 className='modal-data'>{data}</h1>
          </div>
          <CustomButton title='Fermer' style={{width:'170px' , height:'40px'}} handleClick={handleClick}/>
        </div>
      </div>
    );
  }
  
  export default Modal;
