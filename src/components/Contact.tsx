import React from 'react';
import MailToForm from './MailToForm'

const Contact = () => {
  return (
    <div className="flex flex-wrap w-5/6 max-w-[940px] m-auto border-t-[1px] py-10">
      <div className="md:w-1/3 py-4">
        <div className="font-alkatra text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-4">
            Let's work together!
        </div>
        <div className='ml-4 text-2xl font-alkatra'>
            <p>Mail:</p>
            <p className="text-gray-600 text-xl">dominikbanaszak530@gmail.com</p>
            <p>Location:</p>
            <p className="text-gray-600 text-xl">Poznań, Poland</p>
            <p>Phone:</p>
            <p className="text-gray-600 text-xl">530 668 723</p>
        </div>
      </div>
      <div className='lg:w-2/3 flex justify-center'>
        <MailToForm/>
      </div>
    </div>
  )
}

export default Contact
