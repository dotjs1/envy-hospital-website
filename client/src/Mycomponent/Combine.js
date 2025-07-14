import React from 'react'
import Home_app from './Home_app';
import Home_othersection from './Home_othersection';
import Hero from './Hero';
import Whychoose from './Whychoose';
import Location from './Location';
const Combine = () => {
  return (
    <div>
      <Home_app/>
      <Home_othersection/>
      <Hero/>
      <Whychoose/>
      <Location/>
    </div>
  )
}

export default Combine
