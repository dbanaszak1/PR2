import Slider from './components/Slider'
import AboutMe from './components/AboutMe'
import Stack from './components/Stack'
import Tech from './components/Tech'
import Projects from './components/Projects'
import { motion, useInView} from 'framer-motion'
import { useEffect, useRef } from 'react'
import Hello from './components/Hello'
import Contact from './components/Contact'


const App = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);
  useEffect(() => {}, [isInView]);
  

  return (
    <>
    <Hello/>
    <motion.section className='py-20' ref={ref2} style={{background: isInView2 ? 'white' : 'black', transition: '4s background'}}>
      <AboutMe/>
      <Stack/>
      <Tech/>
    </motion.section>
    <motion.section className='py-20' style={{background: 'black'}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}}>
      <Projects/>            
    </motion.section>
    <section className='py-20' ref={ref} style={{background: isInView ? 'white' : 'black', transition: '4s background'}}>
      <Slider/>
      <Contact/>
    </section>
    </>
  )
}

export default App
