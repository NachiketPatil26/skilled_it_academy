import React from 'react';

const ProfileCard = ( {amt, name ='Prakashraj Chavan', comapany='TCS Consultancy'} ) => {
  return (
    <div className="flex items-center bg-[#150035] text-white rounded-3xl shadow-lg p-4 w-80 h-44 drop-shadow-md">
      
      <div className="relative ml-4">
        <div className='flex flex-row '>
             <p className="text-neon-yellow text-3xl mt-12 py-1 font-extrabold italic">{amt}</p>
             <img src='https://picsum.photos/seed/picsum/200/300' alt="profile" className='w-36 h-36 rounded-full transform -translate-y-12 translate-x-1 border-8 border-[#150035]' /> 

        </div>
        <div className='absolute px-32 py-0.5 mt-8 rounded-full bg-gradient-to-r from-yellow via-pink to-gradpurple -translate-y-20'></div>
        <p className="text-2xl font-semibold mt-8 -translate-y-16">{name}</p>
        <p className="text-xl text-white -translate-y-16">{comapany}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
