import { motion} from 'framer-motion'
import icons from './SvgIcons'

const tech = [
    {
        name: "TailwindCSS",
        svg: icons.tailwind
    },      
    {
        name: "Boostrap",
        svg: icons.bootstrap
    },      
    {
        name: "ReactJS",
        svg: icons.react
    }, 
    {
      name: "NextJS",
      svg: icons.next
    },      
    {
      name: "VueJS",
      svg: icons.vue
    },      
    {
      name: "TypeScript",
      svg: icons.ts
    },    
    {
      name: "RestApi",
      svg: icons.restapi
    },      
    {
      name: "MongoDB",
      svg: icons.mongo
    },    
    {
      name: "MySQL",
      svg: icons.mysql
    },
    {
      name: "NodeJS",
      svg: icons.node
    },      
    {
      name: "Python",
      svg: icons.python
    },
    {
      name: "HTML5",
      svg: icons.html
    },
    {
      name: "CSS3",
      svg: icons.css
    },            
    {
        name: "Github",
        svg: icons.github
    },
    {
      name: "Docker",
      svg: icons.docker
    },
    {
      name: "VSCode",
      svg: icons.vscode
    },    
    {
      name: "Canva",
      svg: icons.canva
    },    
    {
      name: "Gimp",
      svg: icons.gimp
    },
]
const Tech = () => {


  return (
    <motion.div       
    initial={{opacity:0, x:'-50%'}}
    whileInView={{opacity:1, x:'0'}}
    transition={{duration:1.5}}
    viewport={{ once: true }}
        className='max-w-[940px] m-auto flex flex-wrap items-center justify-center mb-12 mt-10'>
    <h1 className='w-5/6 lg:w-full font-alkatra text-black text-2xl lg:text-4xl py-4'>Uses:</h1>
    {tech.map((tech, index)=>(
        <motion.div 
          key={index} 
          className='text-black border-[1px] border-black w-32 h-32 m-2 rounded-xl flex justify-center flex-wrap shadow-2xl hover:scale-110 duration-200'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: index/4,duration:1.5}}
          viewport={{ once: true }}
          > 
            <div className='w-20 h-20 pt-2'>{tech.svg}</div>
            <div className='text-center w-full font-alkatra text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>{tech.name}</div>
        </motion.div>
    ))}        
    </motion.div>

  )
}

export default Tech