import Slider from './components/Slider'
import AboutMe from './components/AboutMe'
import Stack from './components/Stack'
import Tech from './components/Tech'
import Projects from './components/Projects'
import { motion} from 'framer-motion';

const App = () => {
  return (
    <>
    <motion.section className='w-full'>
      <AboutMe/>
      <Stack/>
      <Tech/>
    </motion.section>
    <motion.section className='py-20' style={{background: 'black'}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{ once: true }}>
      <Projects/>      
    </motion.section>

      <Slider/>
    </>
  )
}

export default App
