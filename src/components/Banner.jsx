import React from 'react'
import ProfileCard from './ProfileCard';
import TextReveal from '../animations/textanimation';
import TeamMember from './TeamMember';

const Banner = () => {
  return (
    <>
        <div className='w-full h-[50vh] flex flex-col'>
           <div className='mt-8 top-4 flex flex-col items-center'>
            <h1 className='text-3xl font-extrabold text-purple '>
            Achieve Your Best with Our Hair Package for Students
            </h1>
            </div> 
           
            <div className='flex flex-row items-center justify-center mt-28 gap-5'>
                <ProfileCard amt ='8.5 LPA'/>
                <ProfileCard amt ='13.5 LPA'/>
                <ProfileCard amt ='9.5 LPA'/>
            </div>

            
        </div>

        <div className='w-full h-[65vh] bg-[#090016] flex flex-col items-center'>
            <div className='text-white font-montserrat font-bold mt-12 text-4xl'>
                 <TextReveal text={"Meet out Team"}/>
            </div>
            <div>
                <TeamMember/>
            </div>
            <h1
                className="inline-block text-transparent bg-clip-text font-extrabold text-3xl mt-10 mb-10"
                style={{
                    background:
                    "linear-gradient(to right, #f8cc47 0%, #e1a04a 25%, #eed783 70%, #f2b753 100%)",
                    WebkitBackgroundClip: "text", // Needed for Safari support
                }}
            >
               Teaching with Heart and Vision
             </h1>
        </div>
    </>
  )
}

export default Banner;