import FashionDesigner1 from '../../assets/FashionDesigner1.jpg';
import FashionDesigner2 from '../../assets/FashionDesigner2.jpg';
import FashionDesigner4 from '../../assets/FashionDesigner4.jpg';
import FashionDesigner6 from '../../assets/FashionDesigner6.jpg';
import FashionDesigner7 from '../../assets/FashionDesigner7.jpg';








function SummerCollection() {
  return (
    <div>
      <div className='grid'>
        <img src={FashionDesigner1} alt="Fashion Designer" className='' />
        <img src={FashionDesigner2} alt="Fashion Designer" className='w-3/5' />
        <img src={FashionDesigner4} alt="Fashion Designer" className='w-3/5' />
        <img src={FashionDesigner6} alt="Fashion Designer" className='w-3/5' />
        <img src={FashionDesigner7} alt="Fashion Designer" className='w-3/5' />
      </div>
    </div>
  )
}

export default SummerCollection
