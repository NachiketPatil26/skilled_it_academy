// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import MoreSection from './components/MoreSection'
import HiringPatners from './components/HiringPatners'
import NextDrive from './components/NextDrive'
import Benefits from './components/Benefits'
import Banner from './components/Banner'
import FAQ from './components/FAQ'
import MissionVision from './components/Mission&Vision'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Courses/>
      <MoreSection/>
      <HiringPatners/>
      <NextDrive/>
      <Benefits/>
      <Banner/>
      <FAQ/>
      <MissionVision/>
      <Footer/>
    </div>
  )
}

export default App