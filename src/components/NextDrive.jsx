import React from 'react'
import { assets } from '../assets/assets'
import ApplyNowButton from './ApplyNowButton';


const NextDrive = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-white h-[80vh]'>
        <img src={assets.nextdrivebg} className='w-full object-cover' alt="" />
        <h1 className='text-5xl font-montserrat font-extrabold text-purple'>Our Next Campus Drive is Ready </h1>
        <h1 className='text-3xl font-montserrat font-bold text-purple mt-3'>24th December, 2024</h1>
        <div className='mt-5 mb-8'>
            <ApplyNowButton/>
        </div>
    </div>
    </>
  )
}

export default NextDrive;