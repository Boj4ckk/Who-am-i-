import React from 'react'
import './contact.css'
import CustomeButton from '../CustomeButton/customButton'
import GitHubLogo from '../../img/contactLogo/gitHubLogo.png'
import LinkDinLogo from '../../img/contactLogo/LinkDinLogo.png'
import CvPdf from '../../other/CV_yazid.pdf'

function Contact( {onVisible}) {

 
  return (
    <div className='contact-container'>
      <div className='cv-container'>
        <CustomeButton  title={"Télécharger" + '\n' + "CV"} style={{borderRadius:"10px",width :"170px", height:"70px" , fontSize :"20px"}} />
      </div>
      <div className='info-container'>
        <h2 className='info'>Email : yazid.kilito@lacatholille.fr</h2>
        <h2 className='info phone'>Téléphone : 0661678660</h2>

      </div>
      <div className='github-container'>
        <img src={GitHubLogo} className='github-logo'/>
        <img src={LinkDinLogo} className='linkd-logo'/>

      </div>

    </div>
  )
}

export default Contact