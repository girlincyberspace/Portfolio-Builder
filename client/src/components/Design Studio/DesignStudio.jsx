import DesignStudio1 from '../../assets/designstudio1.webp';
import DesignStudio2 from '../../assets/DesignStudio2.webp';
import DesignStudio3 from '../../assets/DesignStudio3.webp';
import DesignStudio4 from '../../assets/DesignStudio4.webp';


function DesignStudio() {
  return (
    <div>
      <div className='pt-12 relative'>
        <img src={DesignStudio1} className='w-full' />
      </div>
      <div className='absolute top-32 left-1/3 text-center text-white'>
        <p className='text-[60px] tracking-wider'>WEB folk</p>
        <p className='mt-16 text-[24px] tracking-widest'>Web Design Studio</p>
        <p className='mt-16 text-[24px]'>We dream, explore, create and craft <br />progressive digital experiences</p>
        <div className='mt-48 ml-32 w-40 py-4 bg-red-500'>
          <p className='text-white'>Work & Clients</p>
        </div>
      
      </div>
      <div className='p-20 grid md:grid-cols-2 grid-cols-1 gap-5'>
        <img src={DesignStudio2} className='w-full' />
        <img src={DesignStudio3} className='w-full' />
        <img src={DesignStudio4} className='w-full' />
      </div>
      <div className='bg-black text-white py-12 flex gap-20 px-40'>
        <div className=''>
          <p className='text-[40px]'>What We Do</p>
          <p className='text-[14px]'>I'm a paragraph. Click here to add your own text and <br />edit me. It’s easy. Just click “Edit Text” or double click <br />me to add your own content and make changes to the <br />font. Feel free to drag and drop me anywhere you like <br />on your page. I’m a great place for you to tell a story <br />and let your users know a little more about you.</p>
          <p className='text-[14px] pt-4'>This is a great space to write long text about your <br />company and your services. You can use this space to <br />go into a little more detail about your company. Talk <br />about your team and what services you provide. Tell <br />your visitors the story of how you came up with the <br />idea for your business and what makes you different <br />from your competitors. Make your company stand out <br />and show your visitors who you are.</p>
        </div>
        <div className=''>
          <p className='text-[40px]'>Who We Are</p>
          <p className='text-[14px]'>I'm a paragraph. Click here to add your own text and <br />edit me. It’s easy. Just click “Edit Text” or double click <br />me to add your own content and make changes to the <br />font. Feel free to drag and drop me anywhere you like <br />on your page. I’m a great place for you to tell a story <br />and let your users know a little more about you.</p>
          <p className='pt-4 text-[14px]'>This is a great space to write long text about your <br />company and your services.</p>
          <p className='text-[14px] pt-4'>You can use this space to go into a little more detail <br />about your company. Talk about your team and what <br />services you provide. Tell your visitors the story of <br />how you came up with the idea for your business and <br />what makes you different from your competitors. <br />Make your company stand out and show your visitors <br />who you are.</p>
        </div>
      </div>
      
    </div>
  )
}

export default DesignStudio
