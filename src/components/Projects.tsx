import React from 'react';
import { motion} from 'framer-motion';
import icons from './SvgIcons';


const Projects = () => {
    const project = [
      {
        title: 'RentMe',
        description: 'Car Rental fullstack app. NodeJS backend, React-typescript frontend, mySQL database, JWT cookie authentication, clean design and responsive due to use of Tailwind.  The app allows users to create, delete, and edit their accounts. They can book a car using a calendar date picker and view the list of available dates. Users can also search for cars on the website and view their current and past reservations. Additionally, there is a web admin panel with CRUD operations for cars and users.',
        stack: [icons.node, icons.express, icons.react, icons.tailwind, icons.ts, icons.mysql,  icons.restapi, icons.github],
        image1: 'images/rentme1.webp',
        image2: 'images/rentmecolage.webp',
      },
      {
        title: 'CatDetector', 
        description: `"Is it a cat?" AI powered application - Pytroch (dynamic deep learning library that allows to create advanced neural network models), Python-Flask backend, React-Typescript-Tailwind frontend, REST API, Github. App is able to detect if the image contains a cat also the application can estimate the percentage of the cat's breed.`,
        stack: [icons.python , icons.react, icons.tailwind, icons.ts, icons.restapi, icons.github],
        image1: 'images/catapp1.webp',
        image2: 'images/code.webp',
      },
      {
        title: 'SkyTravel',
        description: 'One of my first projects containing a sample of my ReactJS and design skills. Created with RTT - React-Typescript-Tailwind.',
        stack: [ icons.react,icons.tailwind, icons.ts, icons.github],
        image1: 'images/skytravel1.webp',
        image2: 'images/skytravel2.webp',
      }]  
  
    return (
    <div className='w-5/6 max-w-[940px] m-auto'>
      <h1 className='font-alkatra text-5xl text-white'>Projects:</h1>
        {project.map((project, index) => (
            <motion.div 
            key={index}
            initial={{opacity:0, x:'-50%'}}
            whileInView={{opacity:1, x:'0'}}
            transition={{duration:1.5}}
            viewport={{ once: true }}
            className='relative  md:h-[900px] my-10'
            > 
                <div className='py-4 text-white'>
                    <h2 className='font-alkatra text-3xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>{project.title}</h2>
                    <p className='text-xl'>{project.description}</p>
                </div>
                <div className='md:w-64 text-white flex flex-wrap md:absolute'>
                  {project.stack.map((stack, index) => (
                    <div className='h-10 w-10 m-2' 
                      key={index}
                      >
                        <motion.div
                          initial={{opacity:0, x:'-50%'}}
                          whileInView={{opacity:1, x:'0'}}
                          transition={{delay: index/2,duration:1.5}}
                          viewport={{ once: true }}
                        >
                          {stack}
                        </motion.div>
                    </div>
                  ))}
                  </div>
                <img src='images/mac1.png' className='hidden md:block absolute  md:w-[806px] md:h-[420px] z-20 md:-translate-x-[104px] md:translate-y-52'/>    
                <div className="w-full h-48 md:w-[600px] md:h-[320px] bg-cover z-10 my-6 md:absolute md:translate-y-[216px] rounded-xl shadow-2xl md:shadow-none md:rounded-none shadow-purple-400" style={{backgroundImage: `url(${project.image1})`}}></div>
                <div className="w-full shadow-2xl shadow-purple-400 h-48 md:w-[600px] md:h-[320px] md:translate-x-60 md:-translate-y- bg-cover md:absolute border-[1px] border-gray-400 rounded-xl" style={{backgroundImage: `url(${project.image2})`}}></div> 
            </motion.div>
        ))}
        <div className="w-full text-white font-alkatra text-center flex-row"><span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Code</span> of those apps you can find as a repos here 
          <div className='m-auto'>
            <button><a href="https://github.com/dbanaszak1" target="_blank"><div className='w-10 h-10'>{icons.github}</div></a></button>
          </div>
        </div>
    </div>
  )
}

export default Projects
