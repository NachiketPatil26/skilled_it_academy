import React from 'react'
import { assets } from '../assets/assets';
import AllVidButton from './ALLVidButton';
import TextReveal from '../animations/textanimation';
// import ThreeDcard from '../animations/threeDcard';



const MoreSection = () => {
  return (
    <>
    <div className='relative w-full flex items-center justify-center'>
        <div className='z-1'>
            <img src={assets.moresectionbg} className='w-full h-full object-cover"' alt="" />
        </div>

        <div className='absolute mt-4 px-72 py-1.5 -translate-y-72 rounded-full bg-gradient-to-r from-yellow via-pink to-gradpurple'>
            
        </div>

        <div className='absolute flex flex-row justify-between items-center left-60'>
            {/* left section */}

           <div className='relative'>
                <img src={assets.quote_icon} className='w-24 mb-4' alt="" />
                <div className='text-white font-montserrat font-extrabold text-6xl leading-tight'>
                
                <TextReveal text={"Explore Engaging\nCoding Videos for\nEvery Skill Level"}/>
                </div>
                <h1 className='inline-block text-transparent bg-clip-text font-montserrat bg-gradient-to-r from-gradpink via-lavender to-cyan text-xl mt-4'>Explore expert-led coding videos for all skill levels and <br />
                 boost your coding skills at your own pace.</h1>
                <div className='absolute mt-4'>
                    <AllVidButton />
                </div>
           </div>

           {/* right section */}
           <div className='ml-20  h-96'>
           {/* <ThreeDcard/> */}
           <img src={assets.threedimage} className='w-full h-full object-cover' alt="" />
            
           </div>
        </div>
    </div>

   

    </>
  )
}

export default MoreSection