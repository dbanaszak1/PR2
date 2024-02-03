import { motion} from 'framer-motion';


const Projects = () => {
    const project = [
      {
        title: 'RentMe',
        description: 'Fullstack app for car renting, university project.',
        stack: 'NodeJS, ExpressJS, MySQL, ReactJS, TypeScript, TailwindCSS',
        image1: 'https://github.com/dbanaszak1/PR2/blob/master/public/images/rentme1.png?raw=true',
        image2: 'https://github.com/dbanaszak1/PR2/blob/master/public/images/renrme2.png?raw=true',
      },
      {
        title: 'CatDetector',
        description: 'Is it a cat? Ai using app for cat recognition. Made with university students team.',
        stack: 'Python, Flask, TensorFlow, ReactJS, TypeScript, TailwindCSS',
        image1: '',
        image2: '',
      }]  
  
    return (
    <div className='w-5/6 max-w-[940px] m-auto border-t-[1px] border-gray-300'>
        {project.map((project, index) => (
            <motion.div 
            key={index}
            initial={{opacity:0, x:'-50%'}}
            whileInView={{opacity:1, x:'0'}}
            transition={{duration:1.5}}
            className='relative h-[760px] my-10'
            >
                <div className='py-4 text-white'>
                    <h2 className='font-alkatra text-3xl '>{project.title}</h2>
                    <p className='text-xl'>{project.description}</p>
                </div>    
                <p className='w-40 text-white'>{project.stack}</p>
                <img src='images/mac1.png' className='absolute md:w-[806px] md:h-[420px] z-20 -translate-x-[104px] md:translate-y-40'/>    
                <div className="w-full h-48 md:w-[600px] md:h-[320px] bg-cover z-10 my-6 md:absolute md:translate-y-40" style={{backgroundImage: `url(${project.image1})`}}></div>
                <div className="w-full shadow-2xl shadow-white h-48 md:w-[600px] md:h-[320px] md:translate-x-60 md:-translate-y-20 bg-cover absolute border-[1px] border-gray-400 rounded-xl" style={{backgroundImage: `url(${project.image2})`}}></div> 
            </motion.div>
        ))}
    </div>
  )
}

export default Projects
