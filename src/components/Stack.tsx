import React from 'react';
import { motion } from 'framer-motion'
import icons from './SvgIcons'

const Stack = () => {
  return (
    <motion.div className='w-5/6 m-auto flex flex-wrap border-b-[1px] border-gray-300 py-10 max-w-[940px]'
    >
        <motion.div 
        className="m-auto mb-10 md:mb-0 h-[250px] md:h-[360px] w-[320px] md:w-[440px] lg:w-1/2 bg-cover" 
        style={{backgroundImage: `url(https://www.aalpha.net/wp-content/uploads/2021/09/benefits-of-mern-stack.png)`}}
        initial={{opacity:0, x:'-50%'}}
        whileInView={{opacity:1, x:'0'}}
        transition={{duration:1.5}}
        viewport={{ once: true }}
        >
        </motion.div>
        <div className="text-5xl font-alkatra mx-auto px-4 lg:w-1/3">Favorite stack
            <motion.div className="text-2xl font-sans font-semibold"
                initial={{opacity:0, x:'-50%'}}
                whileInView={{opacity:1, x:'0'}}
                transition={{duration:2}}
                viewport={{ once: true }}
            >
                <div className="flex">
                  <span className="font-alkatra text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">M</span>
                   - MongoDB
                   <div className="w-10">{icons.mongo}</div>
                </div>
                <div className='flex'>
                  <span className="font-alkatra text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">E
                  </span> 
                  - ExpressJS
                  <div className="w-10 mx-2">{icons.express}</div>
                </div>
                <div className='flex'>
                  <span className="font-alkatra text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">R
                  </span>
                  - ReactJS
                  <div className="w-10 mx-2">{icons.react}</div>
                </div>
                <div className='flex'>
                  <span className="font-alkatra text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">N
                  </span>
                  - NodeJS
                  <div className="w-10 mx-2">{icons.node}</div>
                </div>            
            </motion.div>        
        </div>
    </motion.div>
  )
}

export default Stack
