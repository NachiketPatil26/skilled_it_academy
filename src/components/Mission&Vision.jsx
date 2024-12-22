import React from 'react'
import { assets } from '../assets/assets'

const MissionVision = () => {
  return (
    <>
    <div className='relative mt-10 flex flex-col'>
        <div className='z-0'>
            <img src={assets.visionbg} className='w-full object-cover' alt="" />
        </div>
        <div className='absolute text-montserrat left-96 mt-20 ml-20'>
            <h1 className='text-white text-5xl font-extrabold'>Our Mission</h1>
            <h1 className='text-white text-2xl font-medium mt-5'>To bridge the gap between the corporate sector and candidates.<br/>
                To provide corporate training to companies & students according to their requirements.<br/>
                To be a trusted leader in the IT training domain in india.<br/>
                To offer quality training & Placement at a low cost.</h1>
        </div>
        <div className='absolute text-montserrat left-96 mt-96 ml-72'>
            <h1 className='text-white text-5xl font-extrabold'>Our Vision</h1>
            <h1 className='text-white text-2xl font-medium mt-5'>To enrich the technical knowledge & skill sets of young <br />
                software engineers by providing value-added 
                software training in the areas of software development. To provide 
                quality software training & consulting services in the areas of software development.</h1>
        </div>
    </div>
    </>
  )
}

export default MissionVision;