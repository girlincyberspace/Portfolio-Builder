import './Navbar.css';
import profile from '../../assets/profile.png';

function NavbarAfterSignIn(){
    
    let firstName ="Elizabeth";
    let lastName = "Ogundepo";
    let emailAddress = "elizabethogundepo7@gmail.com"

    return(
        <div className='navbarAfterSignIn'>
            
            <p><a href='#'>Liz</a></p>
            
            <ul>
                <li>Home</li>
                <li>Create New Portfolio</li>
                <li>My Portfolios</li>
                <li>Templates</li>
            </ul>
            <div className='profile-container'>
                <img src={profile} alt='profile picture' className='profile'></img>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                </svg>
                <div className='box'>
                    <img src={profile} alt='profile picture' className='box-profile'></img>
                    <p className='name'>{firstName } {lastName}</p>
                    <p className='email'>{emailAddress}</p>
                </div>

            </div>
        </div>
  
      );
  }
  
  export default NavbarAfterSignIn;