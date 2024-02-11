import React from 'react'
import './experienceCard.css'
import CustomButton from '../CustomeButton/customButton'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'



function ExperienceCard({logo , title , language , context, dateFin , onVisible , url , openModal , data}) {
    const {ref , inView} = useInView(
        {triggerOnce : false,}
    );
    useEffect(() => {
        if (inView && typeof onVisible === 'function') {
            onVisible();
        }
    }, [inView, onVisible]);

    const handleClick = () =>{
        if(url === 'none')
        {
            openModal(title , data);
            
        }else{
            window.location.href= url;
            
        }
      }
      const isMobile = window.innerWidth < 768; // Exemple de breakpoint pour mobile

    const defaultStyle = {
        width: isMobile ? '80px' : '125px', // Taille mobile vs taille par défaut
        height: isMobile ? '25px' : '38px', // Taille mobile vs taille par défaut
        
    };

  return (
    <div className='experienceCard-container'>
        <div className='logo-container'>
            <img src={logo} className='logo' alt="Logo"/>
        </div>
        <div className='experienceCard-content'>
            <div className='experienceCard-data-container'>
                <div className={`experienceCard-title ${inView ? 'animate' : ''}`}>
                    {title}
                </div>
                <div className='experienceCard-data' ref={ref}>
                    <div className={`experienceCard-data-content ${inView ? 'animate' : ''}`} >
                        <h3 className='labels'>langages :&nbsp;&nbsp;&nbsp;</h3>
                         <h4 className='data'>{language}</h4>
                    </div>
                    <div className={`experienceCard-data-content middle ${inView ? 'animate' : ''}`}>
                        <h3 className='labels'>Contexte :&nbsp;&nbsp;&nbsp;</h3>
                         <h4 className='data'>{context}</h4>
                    </div> 
                    <div className={`experienceCard-data-content last ${inView ? 'animate' : ''}`}>
                        <h3 className='labels'>Date de fin :&nbsp;&nbsp;&nbsp;</h3>
                         <h4 className='data'>{dateFin}</h4>
                    </div>

                </div>
                <div className={`plus-button-container ${inView ? 'animate' : ''}`}>
                    <CustomButton title='Plus' style={defaultStyle} url={url} openModal={openModal} name={title} handleClick={() => handleClick()}  data={data}/>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard