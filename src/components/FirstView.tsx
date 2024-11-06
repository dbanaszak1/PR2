import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FirstView = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Pierwsza animacja: przesunięcie w górę
      await controls.start({ y: -600, transition: { duration: 1.5, delay: 1 } });
      
      // Druga animacja: przesunięcie w prawo po zakończeniu pierwszej
      await controls.start({ x: -200, transition: { duration: 0.5, delay: 2 } });
    };
    sequence();
  }, [controls]);

  return (
    <div className='w-full h-screen flex overflow-hidden relative'>
      {/* Tło obrazu */}
      <motion.div
        className='h-full w-full overflow-hidden bg-fixed bg-cover absolute z-0'
        style={{ backgroundImage: `url(./images/hello-there.webp)` }}
      >
      </motion.div>

      {/* Lewe pół ekranu */}
      <motion.div className='h-full w-1/2 bg-black z-10'>
         {/* Przezroczysty tekst z animacją */}
         <motion.div
         className='absolute top-[40%] left-[40%] text-[90px] font-bold font-blackops border-2 border-red-500'
         style={{
            color: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            mixBlendMode: 'screen',
         }}
         initial={{ translateY: '600px' }}
         animate={controls}
         viewport={{ once: true }}
         >
         HELLO THERE!
         </motion.div>
      </motion.div>

      {/* Prawe pół ekranu */}
      <motion.div className='h-full w-1/2 bg-white z-10'></motion.div>

    </div>
  );
}

export default FirstView;
