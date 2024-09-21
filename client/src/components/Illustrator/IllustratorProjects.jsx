import Illustrator1 from '../../assets/Illustrator1.webp';
import Illustrator2 from '../../assets/Illustrator2.webp';
import Illustrator3 from '../../assets/Illustrator3.webp';
import Illustrator4 from '../../assets/Illustrator4.webp';
import Illustrator5 from '../../assets/Illustrator5.webp';

function IllustratorProjects() {
  return (
    <div>
      <div className='bg-gray-50 grid gap-14 px-12 pt-4'>
        <img src={Illustrator1} className='w-full' />
        <img src={Illustrator2} className='w-full' />
        <img src={Illustrator3} className='w-full' />
        <img src={Illustrator4} className='w-full' />
        <img src={Illustrator5} className='w-full' />
      </div>
    </div>
  )
}

export default IllustratorProjects
