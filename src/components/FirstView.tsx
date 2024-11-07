import React, { useEffect } from 'react';
import { easeIn, easeInOut, easeOut, motion, useAnimation } from 'framer-motion';

const FirstView = () => {
  // Controlers for animations
  const controls = useAnimation();
  const right_side = useAnimation();
  const left_side = useAnimation();
  const controlsWorld = useAnimation();


  useEffect(() => {
    // Animation for text
    const sequence = async () => {
      // Animate - go top
      await controls.start({ y: "-70vh", transition: { duration: 1.5, delay: 1, ease: easeOut } });
      
      // Animate - go right, switch bg to image and calculate bg position
      await controls.start({ x: "25vw",
        backgroundImage: `url(./images/bg-hq2.png)`,
        transition: { duration: 1, delay: 0.1, ease: easeInOut  }, 
        backgroundPosition: "calc(-25vw) calc(70vh)" 
      });

      await controlsWorld.start({ opacity: 1, transition: { duration: 1, delay: 0.5, ease: easeInOut } });
    };

    // Animation for black bg (right side)
    const sequence_right_side = async () => {
      await right_side.start({ width: "50%", transition: { duration: 0.8, delay: 1.5, ease: easeInOut }});

      await right_side.start({ translateX: "100%", transition: { duration: 1.5, ease: easeInOut }});
    }

    // Animation for white bg (left side)
    const sequence_left_side = async () => {
      await left_side.start({ width: "50%", transition: { duration: 0.8, delay: 1.5, ease: easeInOut }});

      await left_side.start({ translateX: "100%", right: 0, transition: { duration: 1.5, ease: easeInOut }});
    }


    sequence();
    sequence_right_side();
    sequence_left_side();
  }, [controls, right_side, left_side, controlsWorld]);


  return (
    <motion.div className='w-full h-screen flex relatie place-content-end max-w-[100vw]'
      style={{ overflow: 'hidden' }}
      transition={{ delay: 4, ease: easeIn }}
    >
      {/* Image background */}
      <motion.div
        className='h-[100vh] w-full overflow-hidden bg-cover absolute z-0'
        style={{ backgroundImage: `url(./images/bg-hq.png)` }}
      >
      </motion.div>

      {/* White/Black bg */}
      {/* Lewe pół ekranu */}
      <motion.div 
        className='h-full w-1/2 bg-black z-10  inset-0 overflow-hidden'
        initial={{ width: "60%" }}
        animate={left_side}
        viewport={{ once: true }}
      >         
      </motion.div>

      {/* Prawe pół ekranu */}
      <motion.div 
        className='h-full bg-gray-300 z-10 overflow-hidden'
        initial={{ width: "40%" }}
        animate={right_side}
        viewport={{ once: true }}
      >
      </motion.div>

      {/* Text */}
      <motion.div
          className='absolute w-full h-full translate-x-[-50%] left-[50%] text-[120px] font-blackops bg-cover text-transparent bg-clip-text bg-white z-20 text-center items-center overflow-hidden'
          initial={{ translateY: "100vh", translateX: "-50%" }}
          animate={controls}
          viewport={{ once: true }}
          >
          HELLO
          <div
          >
            WORLD
          </div>
      </motion.div>

</motion.div>

  );
}

export default FirstView;
