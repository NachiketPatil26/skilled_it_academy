import React from 'react'
import TextReveal from '../animations/textanimation'
import Ticker from '../animations/Ticker'
import TestimonialCard from './TestimonialCard'

const HiringPatners = () => {
  return (
    <>

    <div className='bg-black w-full h-[95vh] relative flex flex-col justify-center items-center'>
        <div className='text-white flex items-center absolute top-10 font-montserrat font-bold text-4xl'>
            <TextReveal text={"OUR HIRING PARTNERS"}/>
        </div>
        <div className='absolute top-24'>
            <Ticker />
        </div>
             <div className='absolute top-56 px-72 py-1 rounded-full bg-gradient-to-r from-yellow via-pink to-gradpurple'></div>
        <div className='absolute flex flex-row items-center justify-center gap-4 top-80'>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
        </div>
        <div className='text-white flex items-center absolute top-[85vh] mt-2 font-montserrat font-bold text-4xl'>
            <TextReveal text={"PLACED STUDENTS REVIEW"}/>
        </div>

    </div> 

    </>
  )
}

export default HiringPatners