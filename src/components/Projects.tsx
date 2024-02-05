import { motion} from 'framer-motion';
import icons from './SvgIcons';


const Projects = () => {
    const project = [
      {
        title: 'RentMe',
        description: 'Fullstack app for car renting, university project.',
        stack: [icons.node, icons.express, icons.react, icons.tailwind, icons.ts, icons.sql,  icons.restapi, icons.github],
        image1: 'https://github.com/dbanaszak1/PR2/blob/master/public/images/rentme1.png?raw=true',
        image2: 'https://github.com/dbanaszak1/PR2/blob/master/public/images/renrme2.png?raw=true',
      },
      {
        title: 'CatDetector',
        description: 'Is it a cat? Ai using app for cat recognition. Made with university students team.',
        stack: [icons.python , icons.react, icons.tailwind, icons.ts, icons.restapi, icons.github],
        image1: 'https://github.com/dbanaszak1/PR2/blob/master/public/images/catapp1.png?raw=true',
        image2: '',
      },
      {
        title: 'SkyTravel',
        description: 'Only frontend app for "fake" travel agency.',
        stack: [ icons.react,icons.tailwind, icons.ts, icons.github],
        image1: 'https://github.com/dbanaszak1/PR2/blob/master/public/images/skytravel1.png?raw=true',
        image2: 'https://github.com/dbanaszak1/PR2/blob/master/public/images/skytravel2.png?raw=true',
      }]  
  
    return (
    <div className='w-5/6 max-w-[940px] m-auto'>
        {project.map((project, index) => (
            <motion.div 
            key={index}
            initial={{opacity:0, x:'-50%'}}
            whileInView={{opacity:1, x:'0'}}
            transition={{duration:1.5}}
            viewport={{ once: true }}
            className='relative h-[760px] my-10'
            > 
                <div className='py-4 text-white'>
                    <h2 className='font-alkatra text-3xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>{project.title}</h2>
                    <p className='text-xl'>{project.description}</p>
                </div>
                <div className='md:w-64 text-white flex flex-wrap md:absolute'>
                  {project.stack.map((stack, index) => (<div className='h-10 w-10 m-2' key={index}>{stack}</div>))}
                  </div>
                <img src='images/mac1.png' className='hidden md:block absolute  md:w-[806px] md:h-[420px] z-20 md:-translate-x-[104px] md:translate-y-52'/>    
                <div className="w-full h-48 md:w-[600px] md:h-[320px] bg-cover z-10 my-6 md:absolute md:translate-y-52" style={{backgroundImage: `url(${project.image1})`}}></div>
                <div className="w-full shadow-2xl shadow-purple-400 h-48 md:w-[600px] md:h-[320px] md:translate-x-60 md:-translate-y- bg-cover absolute border-[1px] border-gray-400 rounded-xl" style={{backgroundImage: `url(${project.image2})`}}></div> 
            </motion.div>
        ))}
    </div>
  )
}

export default Projects
