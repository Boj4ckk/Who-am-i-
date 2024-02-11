import React from 'react'
import './expertise.css'
import SectionLabel from '../SectionLabel/sectionLabel'
import ExpertiseLogo from './expertiseLogo'
import FigmaLogo from '../../img/ExpLogo/Figmalogo.png'
import JSlogo from '../../img/ExpLogo/JSlogo.png'
import HtmlCsslogo from '../../img/ExpLogo/HtmlLogo.png'
import SymphonyLogo from '../../img/ExpLogo/SymphonyLogo.png'
import CLogo from '../../img/ExpLogo/CLogo.png'
import PhpLogo from '../../img/ExpLogo/PhpLogo.png'
import PythonLogo from '../../img/ExpLogo/PythonLogo.png'
import ReactLogo from '../../img/ExpLogo/ReactLogo.png'
import GitHubLogo from '../../img/ExpLogo/Githublogo.png'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
function Expertise({onVisible}) {
    const {ref , inView} = useInView({
        threshold:0.5,
        triggerOnce : false,
    });
    useEffect(() => {
        if (inView) {
            onVisible();
        }
    }, [inView, onVisible]);
    const isMobile = window.innerWidth < 768; // Exemple de breakpoint pour mobile

    const defaultStyle = {
        width: isMobile ? '50px' : '90px', // Taille mobile vs taille par défaut
        height: isMobile ? '50px' : '90px', // Taille mobile vs taille par défaut
        
    };

   
  return (
    <div className='expertise-container' ref={ref}>
        <SectionLabel title='Expertise'/>
        <div className='expertise-content-row'>
            <ExpertiseLogo inView={inView} title='Python' img={PythonLogo} time={{ transition: "opacity 1s ease, transform 0.5s ease" }}   />
            <ExpertiseLogo inView={inView} title='JavaScript' img={JSlogo} time={{ transition: "opacity 1s ease, transform 1s ease" }}  />
            <ExpertiseLogo inView={inView} title='Html/CSS' img={HtmlCsslogo} style={defaultStyle} time={{ transition: "opacity 1s ease, transform 1.5s ease" }}  />
            <ExpertiseLogo inView={inView} title='PHP' img={PhpLogo} style={defaultStyle} time={{ transition: "opacity 1s ease, transform 2s ease" }}   />
            <ExpertiseLogo inView={inView} title='RTFL' img={CLogo} time={{ transition: "opacity 2.5s ease, transform 2s ease" }} />
            
            
        </div>
        <div className='expertise-content-row second'>

            <div className='expertise-box'>
                <ExpertiseLogo inView={inView} title='Figma' img={FigmaLogo} time={{ transition: "opacity 1s ease, transform 1.5s ease" }} />
                <ExpertiseLogo inView={inView} title='React(Native)' img={ReactLogo} time={{ transition: "opacity 1.5s ease, transform 2s ease" }}/>
            </div>
            <div className='expertise-box'>
                <ExpertiseLogo inView={inView} title='Symfony' img={SymphonyLogo} time={{ transition: "opacity 2s ease, transform 2.5s ease" }}/>
                <ExpertiseLogo inView={inView} title='GitHub' img={GitHubLogo} time={{ transition: "opacity 2.5s ease, transform 3s ease" }} />
            </div>
       
           
            

        </div>
    </div>
  )
}

export default Expertise