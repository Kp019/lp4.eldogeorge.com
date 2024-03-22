import React from 'react';
import tick from '../assets/icons/checkmark.png'

function Change() {
  return (
    <div className='flex px-20 justify-center items-center  py-12 overflow-hidden gap-10 bg-[#0d1c29]'>
        <div className='flex relative py-20 flex-col justify-center text-white items-center overflow-hidden rounded-xl'>
            <img className='flex absolute z-0' src='https://images.unsplash.com/photo-1637825891028-564f672aa42c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <div className='relative z-10 text-7xl font-bold px-8'>What will change in your childs life ?</div>
        </div>
        <div className='py-20 text-white relative flex flex-col gap-8'>
            <div className='flex gap-2'>
              <img className='w-8 h-8' src={tick} alt="Tick Mark" />
              <div className='text-xl'>They will be selecting a career that they desired in there reality</div>
            </div>
            <div className='flex gap-2'>
              <img className='w-8 h-8' src={tick} alt="Tick Mark" />
              <div className='text-xl'>They dont feel work ( both academics & career) as work anymore , instead they fell it as something they love doing</div>
            </div>
            <div className='flex gap-2'>
              <img className='w-8 h-8' src={tick} alt="Tick Mark" />
              <div className='text-xl'>They create a personal transformation when they make out a strong career</div>
            </div>
          </div>
        </div>
  )
}

export default Change