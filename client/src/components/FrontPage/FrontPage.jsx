import './FrontPage.css';
import portfolio from '../../assets/portfolio.jpg';

function FrontPage() {

    return(
        <div className='container'>
          <p className='first-text'>Create a Portfolio without limits</p>
          <p>Build and scale with a powerful portfolio builder</p>
          <div className='button-container'>
            <button>Get Started &rarr;</button>
          </div>
          <div className='image-container'>
            <img src={portfolio} alt='portfolio image'></img>
          </div>
        </div>
    )
}

export default FrontPage;