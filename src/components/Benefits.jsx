import React from 'react';
import { assets, col1, col2, col3 } from '../assets/assets';
import InfoCards from './InfoCards';

const Benefits = () => {
  return (
    <>
      <div className="bg-black flex flex-col justify-center items-center">
        <div className='flex flex-row'>
          <img src={assets.goldenwing}
           className='w-32 mr-5 mb-10' />  
          <h1
            className="inline-block text-transparent bg-clip-text font-extrabold text-3xl mt-10 mb-10"
            style={{
              background: "linear-gradient(to right, #f8cc47 0%, #e1a04a 25%, #eed783 70%, #f2b753 100%)",
              WebkitBackgroundClip: "text", // Needed for some browsers (especially Safari)
            }}
          >
            Unique Benefits & Program Highlights
          </h1>
          <img src={assets.goldenwing}
           className='w-32 ml-5 mb-10 scale-x-[-1]' /> 
        </div> 

            <div className='flex flex-row justify-center align-center gap-5 mb-12'>
                {/* column 1 */}
                <div className='flex flex-col gap-3'>
                    {/* rows (1,1) */}
                    {col1.map((row1, index) => (
                     <InfoCards key={index} icon={row1.icon} text={row1.text} />
                 ))}
                </div>
                {/* column 2  */}
                <div className='flex flex-col gap-3'>
                    {/* row (1,2) */}
                    {col2.map((row2, index) => (
                     <InfoCards key={index} icon={row2.icon} text={row2.text} />
                 ))}               
                 </div>
                {/* column 3 */}
                <div className='flex flex-col gap-3'>
                    {/* row (1,3) */}
                    {col3.map((row3, index) => (
                     <InfoCards key={index} icon={row3.icon} text={row3.text} />
                 ))}                  
                 </div>

                
            </div>

      </div>
    </>
  );
};

export default Benefits;

