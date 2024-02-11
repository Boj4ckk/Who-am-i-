import React, { useState } from 'react'
import './experience.css'
import SectionLabel from '../SectionLabel/sectionLabel'
import ExperienceCard from './experienceCard'
import CLogo from '../../img/cardIcon/CLogo.png'
import PhpLogo from '../../img/cardIcon/PhpLogo.png'
import ReactLogo from '../../img/cardIcon/ReactLogo.png'
import PythonLogo from '../../img/cardIcon/PythonLogo.png'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import ModalExperience from './modalExperience'

function Experience({onVisible}) {
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

    const [modalState , setModalState]= useState(false);
    const [nameState , setNameState] = useState();

    const dataTtevent= `
    J'ai réalisé ce projet durant mon stage de première année chez TT events, 
    une entreprise d'événementiel située à Casablanca, au Maroc. Le projet consistait
     en une application vitrine développée pour les clients d'un événement destiné 
     à promouvoir des marques d'électroménager africaines lors d'un salon. 
     L'application était codée en React. J'ai contribué à divers aspects du 
     projet, allant du design et du développement front-end à 
     l'implémentation de certaines fonctionnalités back-end. 
     Ce projet m'a permis de me familiariser considérablement avec
      des outils puissants, notamment React, un framework front-end.`

    const dataBot = `
    J'ai développé un bot en Python qui utilise des bibliothèques telles que Selenium et BeautifulSoup (bs4)
    pour le scraping. Ce bot a pour fonction de récupérer des clips Twitch pertinents en fonction de l'identifiant
    d'un streamer. Pour évaluer l'intérêt d'un clip au sein de la communauté, j'ai élaboré des méthodes tenant compte
    de la date de création du clip et du nombre de vues. Ensuite, j'ai automatisé le montage de ces clips grâce à MoviePy,
    une bibliothèque permettant le montage vidéo automatique sur Python. Les clips ont été édités au format adapté pour TikTok,
    et j'ai utilisé l'API non officielle de TikTok pour poster automatiquement ces vidéos. De plus, j'ai optimisé ce processus, 
    initialement très chronophage, en utilisant des threads pour accélérer l'exécution.
    `
    
    
    
    const[dataState , setDataState] = useState();
    const openModal = (title , data) => {
        setModalState(true);
        setNameState(title);
        setDataState(data);
    }
    const closeModal = () => {
        setModalState(false);
    }
  return (
    <div className='experience-container' ref={ref}>

        <SectionLabel title='Experience'/>
        <div className='experience-column'>

            <div className='experience-content'>
                <ExperienceCard logo={CLogo} title='Dungeon Crawler Maker' language='C' context='Projet L2' dateFin='Novembre 2023' onVisible={onVisible} url='https://github.com/idontwannafailmyexam/Dungeon_Crawler_Maker'/>
                <ExperienceCard logo={PhpLogo} title='Quiz Environnement' language='PHP' context="Nuit de l'info" dateFin='Décembre 2023' onVisible={onVisible} url='https://github.com/idontwannafailmyexam/Quiz_env'/>
                <ExperienceCard logo={PhpLogo} title='Athena Website' language='PHP' context='Projet L2' dateFin='Décembre 2023' on onVisible={onVisible} url='https://github.com/idontwannafailmyexam/Athena'/>
    
            </div>
            <div className='experience-content'>
                
                <ExperienceCard logo={ReactLogo} title='Tt event App' language='React' context='Stage fin L1' dateFin='Mai 2023' onVisible={onVisible} url='none' modalState={modalState} openModal={openModal} closeModal={closeModal} data={dataTtevent}/>
                <ExperienceCard logo={PythonLogo} title='Tiktok bot' language='Python' context='Projet personnelle' dateFin='juin 2023' onVisible={onVisible} url='none' modalState={modalState} openModal={openModal} closeModal={closeModal} data={dataBot}/>
                <ExperienceCard logo={ReactLogo} title='CourseApp' language='React' context='Projet personnelle' dateFin='juillet 2023' on onVisible={onVisible} url='https://github.com/idontwannafailmyexam/courseApp'/>
    
            </div>

           
            <ModalExperience modalState={modalState} closeModal={closeModal} title={nameState} data={dataState}/>
            

        </div>
        
        

    </div>
  )
}

export default Experience