//import './FrontPage.css';
import { Link } from 'react-router-dom';
import portfolio from '../../assets/portfolio.jpg';

function FrontPage() {

    return(
   
        <div className="pt-28 bg-blue-700">
          <p className="text-white font-normal text-[64px] text-center">Create a Portfolio without limits</p>
          <p className="text-white text-[14px] text-center">Build and scale with a powerful portfolio builder. From a powerful website builder to <br />advanced business solutions—we’ve got you covered.</p>
          <div className="flex justify-center align-middle mt-10">
            
              <button className="bg-slate-50 text-[20px] font-normal w-48 h-12 rounded-3xl hover:bg-purple-200 transition">Get Started &rarr;</button>
              
          </div>
          <div className="flex justify-center align-middle mt-10">
            <img src={portfolio} alt='portfolio image' className="w-9/12 mb-10"></img>
          </div>
        </div>
    )
}

export default FrontPage;