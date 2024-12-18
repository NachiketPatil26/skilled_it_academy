import React from 'react'
import Card from './Cards'
import DownloadButton from './DownloadButton'

const Courses = () => {
  return (
    <div className='text-3xl font-extrabold text-purple flex flex-col items-center -translate-y-7'>
        Master Coding with Expert Training Courses


        {/* MAPPING */}

    <div className='flex flex-wrap justify-center gap-5'>
        <Card
        title="Java Full Stack"
        duration="3 to 6 Months"
        education="Any Graduate"
        rating="5"
        learners="16k"
        badgeText="Always NEW UPDATED"
      />


        <Card
        title="Python Full Stack"
        duration="3 to 6 Months"
        education="Any Graduate"
        rating="4.5"
        learners="8k"
        badgeText="Always NEW UPDATED"
      />

        <Card
        title="AWS"
        duration="3 to 6 Months"
        education="Any Graduate"
        rating="4.6"
        learners="6k"
        badgeText="Always NEW UPDATED"
      />

    </div>



    <div className='mt-1 flex flex-wrap justify-center gap-5'>
        <Card
        title="Java Full Stack"
        duration="3 to 6 Months"
        education="Any Graduate"
        rating="5"
        learners="16k"
        badgeText="Always NEW UPDATED"
      />


        <Card
        title="Python Full Stack"
        duration="3 to 6 Months"
        education="Any Graduate"
        rating="4.5"
        learners="8k"
        badgeText="Always NEW UPDATED"
      />

        <Card
        title="AWS"
        duration="3 to 6 Months"
        education="Any Graduate"
        rating="4.6"
        learners="6k"
        badgeText="Always NEW UPDATED"
      />

    </div>


    <div className='mt-16' >
      <DownloadButton />
    </div>


    </div>
  )
}

export default Courses