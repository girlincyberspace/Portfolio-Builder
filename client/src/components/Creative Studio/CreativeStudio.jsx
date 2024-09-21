import CreativeStudio1 from '../../assets/CreativeStudio1.webp';
import CreativeStudio2 from '../../assets/CreativeStudio2.webp';
import CreativeStudio3 from '../../assets/CreativeStudio3.webp';
import CreativeStudio4 from '../../assets/CreativeStudio4.webp';
import CreativeStudio5 from '../../assets/CreativeStudio5.webp';
import CreativeStudio6 from '../../assets/CreativeStudio6.webp';
import CreativeStudio7 from '../../assets/CreativeStudio7.webp';
import CreativeStudio8 from '../../assets/CreativeStudio8.webp';
import CreativeStudio9 from '../../assets/CreativeStudio9.webp';



function CreativeStudio() {
  return (
    <div>
      <div className='pt-28 px-20 bg-orange-600'>
        <p className='text-white text-[30px]'>Nespola Studio</p>
      </div>
      <div className='bg-orange-600 py-6 flex justify-center'>
        <img src={CreativeStudio1} className='w-2/3' />
      </div>
      <div className='bg-orange-600 pt-10 px-56 pb-40'>
        <p className='text-[32px] text-center text-white'>Nespola Studio is a creative agency based in NYC. We’re masters in our craft, focusing on art direction, photography, set design & styling. As visual storytellers, we’re determined to transform any concept into a pure visual language.</p>
      </div>
      <div className='flex'>
        <div className='w-1/2 bg-orange-300 pt-32 pr-40 pl-20'>
            <p>Editorial Series</p>
            <p className='text-[70px]'>The Wonders</p>
            <img src={CreativeStudio2} className='h-96' />
        </div>
        <div className='p-32'>
            <img src={CreativeStudio3} />
        </div>
      </div>
      <div className='bg-orange-600 px-96 pt-32 pb-32'>
        <img src={CreativeStudio4} />
        <p className='mt-12 text-white'>Cup of Tea</p>
        <p className='text-white font-bold'>Marketing Campaign</p>
      </div>
      <div className='flex'>
        <div className='bg-gray-300 w-1/2 px-32 py-20'>
            <img src={CreativeStudio5} />
            <p className='mt-12 text-white'>Sprinkles & Spice</p>
            <p className='text-white font-bold'>Set Design</p>
        </div>
        <div style={{backgroundImage: `url(${CreativeStudio6})`}} className='bg-gray-200 w-1/2 px-32 py-20'>
            <img src={CreativeStudio7} />
            <p className='mt-12 text-white'>Number 13</p>
            <p className='text-white font-bold'>Public Relations</p>
        </div>
      </div>
      <div className='bg-amber-300 flex'>
        <div className='p-24 w-4/5'>
            <img src={CreativeStudio8} />
        </div>
        <div className='text-white pt-24'>
            <p>Visual Identity</p>
            <p className='text-[70px]'>Charm Above</p>
            <img src={CreativeStudio9} className='h-64' />
        </div>
      </div>
      <div className='bg-amber-300 p-10'>
        <p className='text-center'>© 2035 by Nespola Studio.</p>
      </div>
    </div>
  )
}

export default CreativeStudio
