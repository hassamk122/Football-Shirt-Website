import React from 'react'

import  {Instagram}  from 'lucide-react'
function Footer() {
  return (
    <div
    className="w-full font-Dm-Sans text-sm text-gray-700 overflow-hidden"
    >
        <div className='flex items-center justify-between  lg:justify-around p-7  lg:p-10'>
            <h1>© 2025, FootyshirtsPK - <a className='underline'>Privacy policy</a> </h1>
             <Instagram className='text-gray-700    hover:text-black  cursor-pointer transition-all duration-100  ease-in '  strokeWidth={1.5} size={20} absoluteStrokeWidth={true}/>
        </div>
    </div>
  )
}

export default Footer