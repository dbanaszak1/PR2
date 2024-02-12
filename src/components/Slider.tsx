import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";

const CoolSlider = () => {

    const [currentSlide, setCurrentSlide] = useState(2);
    const nextSlide = () => {
        if (currentSlide === 4) {
            setCurrentSlide(0)
            return
        }
        else{
            setCurrentSlide(currentSlide + 1)
        }

    }
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(4)
            return
        }
        else{
            setCurrentSlide(currentSlide - 1)            
        }
 
    }
  return (
    <motion.div 
    initial={{opacity:0, x:'-50%'}}
    whileInView={{opacity:1, x:'0'}}
    transition={{duration:1.5}}
    className="justify-center flex py-10">
        <svg onClick={prevSlide} className="h-10 translate-y-44 hover:scale-125 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
      <div className={currentSlide === 0 ? "border-[1px] border-black w-96 h-96 mx-2 rounded-2xl duration-500 shadow-2xl" : "border-[1px] border-black w-32 h-96 mx-2 rounded-2xl duration-500 shadow-2xl"}>
        <div className="h-full w-full overflow-hidden bg-cover rounded-2xl" style={{backgroundImage: `url(https://github.com/dbanaszak1/PR2/blob/master/public/images/programmer--506600780.png?raw=true)`}}></div>
      </div>
      <div className={currentSlide === 1 ? "border-[1px] border-black w-96 h-96 mx-2 rounded-2xl duration-500 shadow-2xl" : "border-[1px] border-black w-32 h-96 mx-2 rounded-2xl duration-500 shadow-2xl"}>
        <div className="h-full w-full overflow-hidden bg-cover rounded-2xl" style={{backgroundImage: `url(https://github.com/dbanaszak1/PR2/blob/master/public/images/programmer-337949483.png?raw=true)`}}></div>
      </div>
      <div className={currentSlide === 2 ? "border-[1px] border-black w-96 h-96 mx-2 rounded-2xl duration-500 shadow-2xl" : "border-[1px] border-black w-32 h-96 mx-2 rounded-2xl duration-500 shadow-2xl"}>
        <div className="h-full w-full overflow-hidden bg-cover rounded-2xl" style={{backgroundImage: `url(https://github.com/dbanaszak1/PR2/blob/master/public/images/programmer-laptop-guy-892324548.png?raw=true)`}}></div>
      </div>
      <div className={currentSlide === 3 ? "border-[1px] border-black w-96 h-96 mx-2 rounded-2xl duration-500 shadow-2xl" : "border-[1px] border-black w-32 h-96 mx-2 rounded-2xl duration-500 shadow-2xl"}>
        <div className="h-full w-full overflow-hidden bg-cover rounded-2xl" style={{backgroundImage: `url(https://github.com/dbanaszak1/PR2/blob/master/public/images/programmer-laptop-guy-664576885.png?raw=true)`}}></div>
      </div>
      <div className={currentSlide === 4 ? "border-[1px] border-black w-96 h-96 mx-2 rounded-2xl duration-500 shadow-2xl" : "border-[1px] border-black w-32 h-96 mx-2 rounded-2xl duration-500 shadow-2xl"}>
        <div className="h-full w-full overflow-hidden bg-cover rounded-2xl" style={{backgroundImage: `url(https://github.com/dbanaszak1/PR2/blob/master/public/images/programmer-reactjs-736000501.png?raw=true)`}}>
        </div>
      </div>
      <svg onClick={nextSlide} className="h-10 translate-y-44 hover:scale-125 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </motion.div>
  )
}

export default CoolSlider