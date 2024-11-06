import React, { useEffect } from 'react';
import { easeIn, easeOut, motion, useAnimation } from 'framer-motion';

const FirstView = () => {
  const controls = useAnimation();
  const right_side = useAnimation();
  const left_side = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Pierwsza animacja: przesunięcie w górę
      await controls.start({ y: -600, transition: { duration: 1.5, delay: 1, ease: easeOut } });
      
      // Druga animacja: przesunięcie w prawo po zakończeniu pierwszej
      await controls.start({ x: 200, transition: { duration: 0.5, delay: 0.1, ease: easeIn  } });
    };

    const sequence_right_side = async () => {
      await right_side.start({ width: "50%", transition: { duration: 0.8, delay: 1.5, ease: easeOut }});

      await right_side.start({ translateX: "100%",width: "0%", transition: { duration: 2, ease: easeOut }});
    }

    const sequence_left_side = async () => {
      await left_side.start({ width: "50%", transition: { duration: 0.8, delay: 1.5, ease: easeOut }});

      await left_side.start({ width: "40%", right: 0, transition: { duration: 2, ease: easeOut }});
    }

    sequence();
    sequence_right_side();
    sequence_left_side();
  }, [controls, right_side, left_side]);


  return (
    <div className='w-full h-screen flex overflow-hidden relatie place-content-end'>
      {/* Tło obrazu */}
      <motion.div
        className='h-full w-full overflow-hidden bg-fixed bg-cover absolute z-0'
        style={{ backgroundImage: `url(./images/hello-there.webp)` }}
      >
      </motion.div>

      {/* Lewe pół ekranu */}
      <motion.div 
        className='h-full w-1/2 bg-black z-10  inset-0'
        initial={{ width: "58%" }}
        animate={left_side}
        viewport={{ once: true }}
      >         
      </motion.div>

      {/* Prawe pół ekranu */}
      <motion.div 
        className='h-full bg-gray-300 z-10'
        initial={{ width: "42%" }}
        animate={right_side}
        viewport={{ once: true }}
      >
      </motion.div>

      <motion.div
          className='absolute w-1/3 top-[40%] left-[40%] text-[120px] font-bold  text-transparent bg-clip-text bg-white z-20'
          initial={{ translateY: 600 }}
          animate={controls}
          viewport={{ once: true }}
          >

          HELLO THERE!
         </motion.div>
</div>

  );
}

export default FirstView;
