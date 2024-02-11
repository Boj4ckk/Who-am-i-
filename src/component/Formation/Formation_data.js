import React, { useInsertionEffect } from 'react'
import './Formation.css'
import {useInView} from 'react-intersection-observer'

function Formation_data(props) {
    const {ref,inView}= useInView({
        triggerOnce:false,
        treeshold:100,
    });
    
  return (
    <div className={`data-container ${inView ? 'animate' : ''}`} ref={ref}>
        <div className='data-date'> {props.date}</div>
        <div className='data-univ'>{props.univ}</div>
        <div className='data-formation'>{props.formation}</div>
        <div className='data-localisation'>{props.localisation}</div>
    </div>
  )
}

export default Formation_data