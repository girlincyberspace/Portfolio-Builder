import Photographer1 from '../../assets/Photographer1.png';
import Photographer2 from '../../assets/Photographer2.png';
import Photographer3 from '../../assets/Photographer3.png';
import Photographer4 from '../../assets/Photographer4.png';
import Photographer5 from '../../assets/Photographer5.png';
import Photographer6 from '../../assets/Photographer6.png';
import Photographer7 from '../../assets/Photographer7.png';

function Photographer() {
  return (
    <div>
      <div className='pt-12 pb-20 px-6'>
        <h1 className='text-[100px] font-bold text-center'>MAX MONTGOMERY</h1>
      </div>
      <div className='flex p-20 gap-32'>
        <img src={Photographer1} alt='image' className='w-2/5 pb-20' />
        <img src={Photographer2} className='w-2/5 h-96' />
      </div>
      <div className='flex p-20 gap-20 align-middle'>
        <img src={Photographer3} className='w-2/5 h-80 pt-10' />
        <img src={Photographer4} className='w-2/5' />
      </div>
      <div className='flex p-20 gap-20 align-middle'>
        <img src={Photographer5} className='w-2/5 pb-10' />
        <img src={Photographer6} className='w-2/5 pt-10' />
      </div>
      <div className='flex p-20'>
        <img src={Photographer7} className='w-2/5' />
      </div>
    </div>
  )
}

export default Photographer
