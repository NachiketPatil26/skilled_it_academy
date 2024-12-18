import React from "react";

const DownloadButton = () => {
  return (
   
        <div class=" relative group cursor-pointer">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-yellow via-pink to-gradpurple rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="absolute -inset-0.5 bg-gradient-to-r from-yellow via-pink to-gradpurple rounded-lg opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="relative px-5 py-3 bg-darkpurple ring-1 ring-lightpurple rounded-lg leading-none flex items-top justify-start space-x-6">
                <div class="space-y-2">
                    <p class="text-white font-montserrat font-bold text-xl">DOWNLOAD ALL SYLLABUS</p>
                </div>
            </div>
        </div>
  
  );
};

export default DownloadButton;
