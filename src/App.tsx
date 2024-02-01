import React from 'react'
import Slider from './components/Slider'
import AboutMe from './components/AboutMe'
import Stack from './components/Stack'

const App = () => {
  return (
    <>
    <section className='w-full h-screen'>
      <AboutMe/>
      <Stack/>
      <Slider/>
      </section>
    </>
  )
}

export default App
