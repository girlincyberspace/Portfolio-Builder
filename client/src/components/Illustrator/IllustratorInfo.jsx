import Illustrator6 from '../../assets/Illustrator6.webp';

function IllustratorInfo() {
  return (
    <div>
      <div className='bg-gray-50 flex gap-20'>
        <div className='w-1/2'>
            <img src={Illustrator6} className='w-full' />
        </div>
        <div className='w-1/2 pt-10 pr-20'>
            <p className='text-[22px]'>Elias Cole</p>
            <p>Illustrator & Graphic Designer</p>
            <hr className='pt-6'></hr>
            <div>
                <p className='text-[22px]'>My Story</p>
                <p className='pt-8'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default IllustratorInfo
