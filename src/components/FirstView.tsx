import React, { useEffect } from 'react';
import { easeIn, easeInOut, easeOut, motion, useAnimation } from 'framer-motion';

const FirstView = () => {
  const controls = useAnimation();
  const right_side = useAnimation();
  const left_side = useAnimation();


  useEffect(() => {
    const sequence = async () => {
      // Pierwsza animacja: przesunięcie w górę
      await controls.start({ y: "-70vh", transition: { duration: 1.5, delay: 1, ease: easeOut } });
      
      // Druga animacja: przesunięcie w prawo po zakończeniu pierwszej
      await controls.start({ x: "25vw",
        backgroundImage: `url(./images/bg-hq.png)`,
        transition: { duration: 1, delay: 0.1, ease: easeInOut  } });
    };

    const sequence_right_side = async () => {
      await right_side.start({ width: "50%", transition: { duration: 0.8, delay: 1.5, ease: easeOut }});

      await right_side.start({ translateX: "100%", transition: { duration: 1.5, ease: easeInOut }});
    }

    const sequence_left_side = async () => {
      await left_side.start({ width: "50%", transition: { duration: 0.8, delay: 1.5, ease: easeOut }});

      await left_side.start({ translateX: "100%", right: 0, transition: { duration: 1.5, ease: easeInOut }});
    }


    sequence();
    sequence_right_side();
    sequence_left_side();
  }, [controls, right_side, left_side]);


  return (
    <div className='w-full h-screen flex relatie place-content-end overflow-hidden max-w-[100vw]'
    >
      {/* Image background */}
      <motion.div
        className='h-full w-full overflow-hidden bg-cover absolute z-0'
        style={{ backgroundImage: `url(./images/bg-hq.png)` }}
      >
      </motion.div>

      {/* White/Black bg */}
      {/* Lewe pół ekranu */}
      <motion.div 
        className='h-full w-1/2 bg-black z-10  inset-0 overflow-hidden'
        initial={{ width: "58%" }}
        animate={left_side}
        viewport={{ once: true }}
      >         
      </motion.div>

      {/* Prawe pół ekranu */}
      <motion.div 
        className='h-full bg-gray-300 z-10 overflow-hidden'
        initial={{ width: "42%" }}
        animate={right_side}
        viewport={{ once: true }}
      >
      </motion.div>

      {/* Text */}
      <motion.div
          className='absolute w-full h-full translate-x-[-50%] left-[50%] text-[120px] font-bold bg-cover text-transparent bg-clip-text bg-white z-20 text-center items-center overflow-hidden'
          initial={{ translateY: "100vh", translateX: "-50%" }}
          animate={controls}
          viewport={{ once: true }}
          style={{ backgroundPosition: "calc(-25vw) calc(70vh)" }}
          >
          HELLO!
      </motion.div>
</div>

  );
}

export default FirstView;
