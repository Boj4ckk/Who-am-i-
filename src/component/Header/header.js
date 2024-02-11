import './Header.css';
import gitHubLogo from '../../img/contactLogo/gitHubLogo.png'
import linkdLogo from '../../img/contactLogo/LinkDinLogo.png'

function Header({currentSection}) {
    return(
        <div className='header-container'>

            



            <div className='header-right-part'>
                <h3 className={currentSection === 'home' ? 'active' : 'header-section-title'}> Home</h3>
                <h3 className={currentSection === 'formation' ? 'active' : 'header-section-title'}> Formation</h3>
                <h3 className={currentSection === 'experience' ? 'active' : 'header-section-title'}> Expérience</h3>
                <h3 className={currentSection === 'expertise' ? 'active' : 'header-section-title'}> Expertise</h3>
                <h3 className={currentSection === 'compétence' ? 'active' : 'header-section-title'}>Compétence</h3>
            </div>

        </div>
    )

}
export default Header;