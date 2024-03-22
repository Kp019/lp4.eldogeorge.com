import React from 'react';
import image from '../assets/images/VE.png'

function Hero() {
  return (
    <div className=' flex flex-col   justify-center items-center text-center'>
        <div className='relative w-full py-20 overflow-hidden text-white bg-black flex flex-col justify-center items-center'>
            <img className='absolute z-0 bg-cover opacity-30' src='https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <div className='relative z-10 text-4xl font-bold px-40 capitalize'>Start what Career is apt for you in <br/><span className=' text-8xl'>less than 30 days</span></div>
            <div className=' py-5 z-10 text-xl italic font-bold px-44'>Learn how to turn your knolwedege , skills and expertise in a correct career that is being apt for you & get to know how it could be linked back to your present academics</div>
        </div>
        <div  className="flex flex-col justify-center items-start py-20 gap-12">
            <div className='flex flex-col justify-start items-start'>
                <div className='text-5xl font-bold z-10'>Why attend this workshop ?</div>
                <div className='w-[300px] h-2 bg-purple-600 z-0'></div>
            </div>
            <div className='flex flex-wrap text-white gap-8 text-left justify-center'>
                <div className='w-80 text-xl   bg-[#5d62ff] px-8 py-4 rounded-xl'>Get the exact steps in building the right career by knowing your niche (career) and micro niche.</div>
                <div className='w-80 text-xl   bg-[#5d62ff] px-8 py-4 rounded-xl'>Getting strategies to scale your career to greater heights , by  changing your mindset</div>
                <div className='w-80 text-xl   bg-[#5d62ff] px-8 py-4 rounded-xl'>Learn how to accelerate the journey of success by learning how to deliver breakthrough results for your child</div>
                <div className='w-80 text-xl   bg-[#5d62ff] px-8 py-4 rounded-xl'>Learn the exact strategies of highle successful stsudents who have pursued their dream career</div>
            </div>
        </div>
        <div className='h-[80vh] w-auto mx-80 drop-shadow-md'>
            <img className='rounded-xl' src={image} alt="img" />
        </div>
    </div>
  )
}

export default Hero