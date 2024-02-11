import React, { useState } from 'react'
import './competence.css'
import Jauge from './jauge'
import SectionLabel from '../SectionLabel/sectionLabel'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Competence({onVisible}) {
    const {ref , inView} = useInView({
      threshold:0.5,
      triggerOnce : false,
  });
  const [animate , setAnimate] = useState(false);
useEffect(() => {
    if (inView) {
        onVisible();
        setAnimate(true);
    }
}, [inView, onVisible]);
  return (
    <div className='competence-container' >
      <SectionLabel title='Compétence' />
      <div className='competence-content'>
      


          <div className='competence-row' ref={ref}>
            <Jauge niveau={70} label={"Anglais"} animate={animate}/>
            <Jauge niveau={60} label={"Arabe"} animate={animate}/>
          </div>

          <div className='competence-row'>
            <Jauge niveau={100} label={"Français"} animate={animate}/>
            <Jauge niveau={100} label={"Créativité"} animate={animate}/>
          </div>
          <div className='competence-row'>
            <Jauge niveau={70} label={"Logique"} animate={animate}/>
            <Jauge niveau={100} label={"Communication"} animate={animate}/>
            
          </div>
         
          
        
      </div>
    </div>
  )
}

export default Competence