import React from 'react';
import venkit from '../assets/images/venkit.png';
import eldo from '../assets/images/eldo.png'

function Coach() {
  return (
    <div className='py-20 px-40 flex flex-col justify-center items-center gap-10'>
        <div className='py-12 flex flex-col items-center justify-center'>
            <div className='text-5xl font-bold'>Meet your Coach</div>
            <div className='w-[300px] h-2 bg-purple-600 z-0'></div>
        </div>
        <div className='flex bg-[#5d62ff] text-white rounded-xl flex-row justify-center items-center'>
            <img className='w-[300px]' src={venkit} alt='venkit'/>
            <div className=' text-left flex flex-col items-left bottom-0'>
              <h1 className='text-5xl font-bold'>Prof. (Dr) P R Venkitaraman</h1>
              <div className='pt-5 text-gray-200'>
                <p>Founded the the fast growing community called the Top One Percent Lab where students have been shaped to the top one percent class of the society. Founded the the fast growing community called the Top One Percent Lab where students have been shaped to the top one percent class of the society.</p>
              </div>
            </div>
        </div>
        <div className='flex bg-[#5d62ff] text-white rounded-xl flex-row-reverse justify-center items-center'>
            <img className='w-[300px]' src={eldo} alt='eldo'/>
            <div className=' text-right flex flex-col justify-center items-right pt-10'>
              <h1 className='text-5xl font-bold'>Eldo George Varghese</h1>
              <div className='pt-5 text-gray-200'>
              <p>Founded the the fast growing community called the Top One Percent Lab where students have been shaped to the top one percent class of the society. Founded the the fast growing community called the Top One Percent Lab where students have been shaped to the top one percent class of the society.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Coach