import './Navbar.css';

function NavbarBeforeSignIn(){
    

  return(
      <header className='header'>
        <a href='/' className='logo'>Liz</a>

      <nav className='navbarBeforeSignIn'>
        <a href='/login' className='login'>Log In</a>
        <a href='/signup'><button>Get Started</button></a>
      </nav>
      </header>

    );
}

export default NavbarBeforeSignIn;