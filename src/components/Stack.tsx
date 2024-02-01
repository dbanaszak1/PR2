import React from 'react'

const Stack = () => {
  return (
    <div className='w-2/3 m-auto flex flex-wrap border-b-[1px] border-gray-300 py-10 max-w-[940px]'>
        <div className="h-[380px] w-1/2 bg-cover" style={{backgroundImage: `url(https://www.aalpha.net/wp-content/uploads/2021/09/benefits-of-mern-stack.png)`}}>
        </div>
        <div className="text-5xl font-alkatra mx-auto px-4 w-1/3">Favorite stack
            <div className="text-2xl font-sans font-semibold">
                <div><span className="font-alkatra text-green-700">M</span> - MongoDB</div>
                <div><span className="font-alkatra text-yellow-400">E</span> - ExpressJS</div>
                <div><span className="font-alkatra text-blue-400">R</span> - ReactJS</div>
                <div><span className="font-alkatra text-green-500">N</span> - NodeJS</div>            
            </div>        
        </div>
    </div>
  )
}

export default Stack
