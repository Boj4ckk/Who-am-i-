import React from 'react'
import './Formation.css'
import SectionLabel from '../SectionLabel/sectionLabel'
import Formation_data from './Formation_data'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
function Formation({onVisible}) {

    const {ref , inView} = useInView(
        {triggerOnce : false,
        threshold : 0.9,
        }
    );
    useEffect(() => {
        if (inView) {
            onVisible();
        }
    }, [inView, onVisible]);
  return (
   
    <div className='formation-container' ref={ref}>
        <div className='label-container'>
            <SectionLabel title='Formation'/>
        </div>
        <div className='formation-content'>
            <Formation_data
             date='En cours'
             univ='Univérsité catholique de lille'
             formation='science du numérique'
             localisation='Lille,France'
             delay="0s"
             />
             <Formation_data
             date='2019-2021'
             univ='Lycée Charlles de Gaulles'
             formation='Mathématique/NSI'
             localisation='Londres,Royaume-unis'
             delay="1s"
             />
             <Formation_data
             date='2015-2019'
             univ='Lycée Descartes'
             formation='Génerale'
             localisation='Rabat,Maroc'
             delay="2s"
             />
            

        </div>
    </div>
  )
}

export default Formation