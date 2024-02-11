
import './App.css';
import Header from './component/Header/header';
import Home from './component/Home/home';
import Formation from './component/Formation/formation'
import Experience from './component/Experience/experience';
import Expertise from './component/Expertise/expertise';
import Competence from './component/Compétence/competence';
import Contact from './component/Contact/contact';
import { useState } from 'react';


function App() {
  const [currentSection , setCurrentSection ] = useState('home');
  const CurrentSectionSetter = (section) =>{
    setCurrentSection(section);
    console.log(currentSection);
  } 
  return (
    <div className="App">
      <Header currentSection={currentSection} />
      <div className="body">
        <Home onVisible={() => CurrentSectionSetter('home')}/>
        <Formation onVisible={() => CurrentSectionSetter('formation')}/>
        <Experience onVisible={() => CurrentSectionSetter('experience')}/>
        <Expertise onVisible={() => CurrentSectionSetter('expertise')}/>
        <Competence onVisible={() => CurrentSectionSetter('compétence')}/>
    

      </div>
      
    </div>
  );
}

export default App;

