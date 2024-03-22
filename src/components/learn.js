import React from 'react';
import point from '../assets/icons/reward.png'
function Learn() {
  return (
    <div className='flex flex-col justify-center items-center mx-20 my-20'>
        <div className='py-12 flex flex-col items-center justify-center'>
            <div className='text-5xl font-bold'>What will you learn in the webinar?</div>
            <div className='w-[300px] h-2 bg-purple-600 z-0'></div>
        </div>
        <div className='flex text-white justify-center items-start gap-10'>
            <div className='w-1/2 flex flex-col overflow-hidden gap-5 bg-[#5d62ff] px-10 py-5 rounded-xl'>
                <div className='flex justify-start gap-2'>
                    <img className='w-8 h-8' src={point} alt='point' />
                    <div className='text-xl'>How to start a career that your child has interests in so that they produce greater results</div>
                </div>
                <div className='flex justify-start gap-2'>
                    <img className='w-8 h-8' src={point} alt='point' />
                    <div className='text-xl'>Whats is the scope of the career in the long run</div>
                </div>
                <div className='flex justify-start gap-2'>
                    <img className='w-8 h-8' src={point} alt='point' />                
                    <div className='text-xl'>How to strategize your child career in making higher outputs</div>
                </div>
                <div className='flex justify-start gap-2'>
                    <img className='w-8 h-8' src={point} alt='point' />
                    <div className='text-xl'>What are the changing career trends</div>
                </div>
                <div className='flex justify-start gap-2'>
                    <img className='w-8 h-8' src={point} alt='point' />
                    <div className='text-xl'>Master the entire process in 3 hours </div>
                </div>
            </div>
            <div className='w-1/2 flex flex-col overflow-hidden gap-5 bg-[#5d62ff] px-10 py-5 rounded-xl'>
                <div className='flex justify-start gap-2'>
                    <img className='w-8 h-8' src={point} alt='point' />
                    <div className='text-xl'>Get clarity on what career to go with
                </div>
                </div>
                <div className='flex justify-start gap-2'>
                    <img className='w-8 h-8' src={point} alt='point' />
                    <div className='text-xl'>Build the first version of your childs career</div>
                </div>
                <div className='flex justify-start gap-2'>
                    <img className='w-8 h-8' src={point} alt='point' />
                    <div className='text-xl'>Discover the  12 ways to  micro refine your career</div>
                </div>
                <div className='flex justify-start gap-2'>
                    <img className='w-8 h-8' src={point} alt='point' />
                    <div className='text-xl'>Select the 1 best way that works for you </div>
                </div>
                <div className='flex justify-start gap-2'>
                    <img className='w-8 h-8' src={point} alt='point' />
                    <div className='text-xl'>Get you career identity ready </div>
                </div>
                <div className='flex justify-start gap-2'>
                    <img className='w-8 h-8' src={point} alt='point' />
                    <div className='text-xl'>Learn how to avoid the noise of averages</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Learn