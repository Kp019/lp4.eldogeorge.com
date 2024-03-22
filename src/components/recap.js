import React from 'react'

function Recap() {
  return (
    <div className='py-20'>
        <div className='py-12 flex flex-col items-center justify-center'>
            <div className='text-5xl font-bold'>Here is a recap of what you get</div>
            <div className='w-[300px] h-2 bg-purple-600 z-0'></div>
        </div>
        <div className='flex justify-center items-center gap-10 text-white'>
            <div className='w-72 h-40 bg-[#5d62ff] flex justify-center items-center px-8 py-10 text-xl font-semibold text-center rounded-md text-white'>3 hours of training worth 9999</div>
            <div className='w-72 h-40 bg-[#5d62ff] flex justify-center items-center px-8 py-10 text-xl font-semibold text-center rounded-md text-white'>bonus worth 8888</div>
            <div className='w-72 h-40 bg-[#5d62ff] flex justify-center items-center px-8 py-10 text-xl font-semibold text-center rounded-md text-white'>regular price 19999</div>
            <div className='w-72 h-40 bg-[#5d62ff] flex justify-center items-center px-8 py-10 text-xl font-semibold text-center rounded-md text-white'>todays price 99</div>
        </div>
    </div>
  )
}

export default Recap