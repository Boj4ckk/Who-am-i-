import './Home.css'
import ScreenImage from "../../img/Screen.png"

import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import CustomButton from '../CustomeButton/customButton'
import CvPdf from '../../other/CV_yazid.pdf'
import path from 'file:///C:/Users/User/Downloads/CV_yazid.pdf'
import styled from 'styled-components';

 


function Home({onVisible}){
    const {ref , inView} = useInView({
        threshold:0.9,
        triggerOnce : false,
    });
    useEffect(() => {
        if (inView) {
            onVisible();
        }
    }, [inView, onVisible]);
    const handleDownload = () => {
        window.open(path, "_blank");
      };
    
      const style = {
        contactButton : {
            width:'150px' , 
            height:'50px',
            borderRadius:'15px', 
            marginTop:"15px",
            '@media (max-width: 800px)': {
                width : '80px',
                height: '25px', // Hauteur fixe sur mobile
              }
            

        }
      }

    
    return(
        <div className='home-container' ref={ref}>
            <div className='home-left'>
                <h1 className='home-text-1'>Bonjour</h1>
                <h3 className='home-text-2 '>Je suis Yazid Kilito</h3>
                <h4 className='home-text-3'>Etudiant en Science Du Numérique</h4>
                <CustomButton title='Contact'  handleClick={() =>  handleDownload()} style={style.contactButton}/>

            </div>
            <div className='home-right'>
                <img src={ScreenImage} alt='screen' className='screen'/>
            </div>
        </div>
    )
}

export default Home;