

const Expect = () => {
  return (
    <div className="flex flex-wrap w-5/6 max-w-[940px] m-auto ">
      <div className="font-alkatra text-4xl pb-8 md:pb-16 w-full">
        What can <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">you</span> expect from me?
      </div>
      <div className="w-full flex flex-wrap">
        <div className='relative flex w-2/3 justify-center md:justify-start'>
            <img className="h-auto w-60 lg:w-80 absolute translate-x-20 lg:translate-x-48 rotate-12 " src="./images/rspRentMe.png" /> 
            <img className="h-auto w-60 lg:w-80 z-10" src="./images/rspSkyTravel.png" /> 
        </div>      
        <div className="lg:w-1/3">
            <h2 className="font-alkatra text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Creating responsive web frontend!</h2>
            <p className="text-gray-600 w-2/3">As a frontend developer, I take care of meticulous and precise responsive web design. With my attention to detail and keeping up with the latest trends, I deliver websites that are aesthetic, user-friendly, and accessible across various devices.</p>
            <p className="py-4">Uses: React, NextJS, Vue.js, Nuxt.js and some more others!</p>
        </div>  
      </div>

      <div className="w-full flex flex-wrap py-10">
        <div className="lg:w-1/3">
            <h2 className="font-alkatra text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Creating cool animations and components!</h2>
            <p className="text-gray-600 w-2/3">I enjoy crafting dynamic animations and interactive components that breathe life into websites. With my creativity and programming skills, I create engaging elements that not only capture attention but also enhance the usability of the site. </p>
            <p className="py-4">Uses: Framer-Motion, Tailwind, Bootstrap</p>
        </div>
        <div className='relative flex w-2/3 justify-center md:justify-start'>
            <img className="h-auto w-[500px] absolute translate-x-32 md:translate-x-52 lg:-translate-y-10" src="./images/animation.png" /> 
            <img className="h-auto w-44 lg:w-72 z-10" src="./images/animationMobile.png" /> 
        </div>   
      </div>

      <div className="w-full flex flex-wrap">
        <div className='relative flex w-2/3 justify-center md:justify-start'>
            <img className="h-auto w-[600px]" src="./images/laptopguy2.png" />  
        </div>      
        <div className="lg:w-1/3">
            <h2 className="font-alkatra text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Taking resposibility for tasks asigned to me!</h2>
            <p className="text-gray-600 w-2/3">I always take responsibility for the timely and high-quality completion of assigned tasks. I ensure compliance with requirements and maintain effective communication with the team.</p>
        </div>  
      </div>

      <div className="w-full flex flex-wrap py-10">
        <div className="lg:w-1/3">
            <h2 className="font-alkatra text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Developing stable backend for fullstack apps!</h2>
            <p className="text-gray-600 w-2/3">When developing a stable backend in Node.js, I focus on robust architecture, security, and performance. I employ proven design patterns and tools, ensuring optimization and code testing.</p>
            <p className="py-4">Uses: NodeJS, Express, Nodemon, Python, Flask, JWT, BcryptJs</p>           
        </div>
        <div className='relative flex w-2/3 justify-center md:justify-start'>
            <img className="h-auto w-[500px] absolute translate-x-20 -translate-y-20" src="./images/programmer2.png" /> 
            
        </div>   
      </div>
    </div>
  )
}

export default Expect
