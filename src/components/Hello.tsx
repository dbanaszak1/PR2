import {motion} from 'framer-motion'
import Animation3D from './Animation3D'
const Hello = () => {

  return (
    <motion.div className="h-[1000px] w-full bg-black flex items-center justify-center overflow-hidden">
        <motion.div className="border-white border-[1px] w-80 h-52  overflow-hidden"viewport={{ once: true }} initial={{scale:8}} whileInView={{scale:1}} transition={{duration:1.5}}>                 
        </motion.div>
        <motion.div 
            className="text-white text-xs md:text-xl font-alkatra border-white border-[1px] px-32 p-20 m-0 flex items-center justify-center overflow-hidden"
            whileInView={{scale:8}}
            transition={{duration:1.5}}
            viewport={{ once: true }}
            >
                HELLO   
        </motion.div> 
        <div className="absolute md:w-[800px] z-10 md:-translate-x-6">
            <Animation3D/>  
        </div>
        
    </motion.div>
  )
}

export default Hello
