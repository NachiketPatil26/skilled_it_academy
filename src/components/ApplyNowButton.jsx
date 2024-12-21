import React from "react";

const DownloadButton = () => {
  return (
   
        <div class=" drop-shadow-lg relative group cursor-pointer">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-yellow via-pink to-gradpurple rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="absolute -inset-0.5 bg-gradient-to-r from-yellow via-pink to-gradpurple rounded-full opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="relative px-12 py-3 bg-gradient-to-r from-yellow via-pink to-gradpurple rounded-full leading-none flex items-top justify-start space-x-6">
                <div class="space-y-2">
                    <p class="text-white font-montserrat font-bold text-2xl">APPLY NOW</p>
                </div>
            </div>
        </div>
  
  );
};

export default DownloadButton;
