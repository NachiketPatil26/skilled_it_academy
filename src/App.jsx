// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import MoreSection from './components/MoreSection'
import HiringPatners from './components/HiringPatners'
import NextDrive from './components/NextDrive'
import Benefits from './components/Benefits'

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
    </div>
  )
}

export default App