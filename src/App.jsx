// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import MoreSection from './components/MoreSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Courses/>
      <MoreSection/>
    </div>
  )
}

export default App