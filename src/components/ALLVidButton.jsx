import React from "react";

const AllVidButton = () => {
  return (
   
        <div class=" drop-shadow-lg relative group cursor-pointer">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-yellow via-red to-gradpurple rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="absolute -inset-0.5 bg-gradient-to-r from-yellow via-red to-gradpurple rounded-lg opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="relative px-5 py-1.5 bg-black ring-1 ring-lightpurple rounded-lg leading-none flex items-top justify-start space-x-6">
                <div class="space-y-2">
                    <p class="text-red font-montserrat font-bold text-2xl">ALL VIDEOS</p>
                </div>
            </div>
        </div>
  
  );
};

export default AllVidButton;
