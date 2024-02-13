import React from 'react';
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

const MailToForm = () => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const form = useRef(null);
    const sendEmail = (e: any) => {
        e.preventDefault();
    
        if (form.current) {
          emailjs
            .sendForm('service_wzytjgg', 'template_v2iepv8', form.current, {
              publicKey: 'UYmoeHyYUxWguwz6T',
            })
            .then(
              () => {
                setSuccess(true);
                console.log('SUCCESS!');
              },
              (error) => {
                setError(true);
                console.log('FAILED...', error);
              },
            );
        }
      };

  return (
    <div className="font-alkatra lg:w-[560px] overflow-hidden">
      <form className="flex flex-wrap justify-center" ref={form} onSubmit={sendEmail}>
        <motion.input 
            className="w-full lg:w-[500px] border-black border-[1px] m-4 rounded-md px-4 py-2 overflow-hidden" 
            type="text" 
            required 
            placeholder="Name:"
            name='name'
            initial={{y: 100}}
            whileInView={{y: 0, transition: {type: "spring",bounce: 0.5,duration: 0.8}}}
            viewport={{ once: true, amount: 0.8 }}
            />
        <motion.input className="w-full lg:w-[500px] border-black border-[1px] m-4 rounded-md px-4 py-2" 
            type="text" 
            required 
            placeholder="Email:"
            name='email'
            initial={{y: 100}}
            whileInView={{y: 0,transition: {type: "spring",bounce: 0.5,duration: 0.8, delay: 0.3}}}
            viewport={{ once: true, amount: 0.8 }}
            />
        <motion.textarea  className="w-full lg:w-[500px] border-black border-[1px] m-4 rounded-md px-4 py-2"
            rows={8} 
            required 
            placeholder="Message:"
            name='message'
            initial={{y: 100}}
            whileInView={{y: 0,transition: {type: "spring",bounce: 0.5,duration: 0.8, delay: 0.3}}}
            viewport={{ once: true, amount: 0.8 }}>
        </motion.textarea>
        <motion.button 
        className="w-full lg:w-[500px] border-black border-[1px] m-4 rounded-md px-4 py-2 hover:bg-black hover:text-white duration-500 text-xl" 
        type="submit"
        initial={{y: 100}}
        whileInView={{y: 0,transition: {type: "spring",bounce: 0.5,duration: 0.8, delay: 0.3}}}
        viewport={{ once: true, amount: 0.8 }}
        >
            Send
        </motion.button>
        {error && <div className="text-red-500">Something went wrong, try again later!</div>}
        {success && <div className="text-green-500">Message sent successfully!</div>}
      </form>
    </div>
  )
}

export default MailToForm
