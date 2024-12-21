import React from "react";
import { assets } from "../assets/assets";

const profiles = [
  {
    name: "SACHIN SIR",
    title: "SOFTWARE DEVELOPER",
    experience: "10+ Years Of Experience",
    image: assets.sachin_sir_pfp,
  },
  {
    name: "AKSHAY SIR",
    title: "SOFTWARE DEVELOPER",
    experience: "3+ Years Of Experience",
    image: assets.akshay_sir_pfp,
  },
  {
    name: "SAGAR SIR",
    title: "PYTHON DEVELOPER",
    experience: "5+ Years Of Experience",
    image: assets.sagar_sir_pfp,
  },
  {
    name: "NAYAN MA'AM",
    title: "SOFTWARE DEVELOPER",
    experience: "2+ Years Of Experience",
    image: assets.nayan_maam_pfp,
  },
];

const TeamMember = () => {
  return (
    <div className="bg-[#090016] mt-12">
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        {profiles.map((profile, index) => (
          <div key={index} className="flex items-center">
            {/* Profile Card */}
            <div className="w-64 bg-[#090016] rounded-3xl text-center shadow-lg p-4">
              <div className="relative">
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <img src={profile.image} alt={profile.name} />
                </div>
                {/* Name */}
                <h2 className="text-pink text-xl font-bold mt-4 font-montserrat">
                  {profile.name}
                </h2>
                {/* Title */}
                <p className="text-white text-base font-semibold mt-4 font-montserrat leading-tight">
                  {profile.title}
                </p>
                {/* Experience */}
                <p className="text-white text-sm mt-2 font-montserrat leading-tight">
                  {profile.experience}
                </p>
              </div>
            </div>

            {/* Gradient Partition */}
            {index < profiles.length - 1 && (
              <div className="h-40 w-[2px] bg-gradient-to-b from-yellow via-pink to-gradpurple mx-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
