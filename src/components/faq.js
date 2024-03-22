import {React,  useState } from 'react'
import { FiArrowDown } from 'react-icons/fi';

// 

//  

// 

//  
//  

//  


// 
//  

//  

// 

// 

// 

function Faq() {
    const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      title: 'How will i gte the link to attend the programme?',
      answer: 'You will be admitted to a private watssap group where you the link will be provided over.',
    },
    {
      title: 'Why does this programme cost only 99/-',
      answer: 'The fee is just to make sure to get a commitment from you that you will be there. Its not the value of the programme. You can attend the true value of the programme only after you attend theprogramme with your child',
    },
    {
      title: 'When is the workshop?',
      answer: "You can get al the details regarding tbe time and date from the top of the page.",
    },
    {
        title: 'Will i get a recording of the program?',
        answer: "This programme is where the students identify the right career. So no recording will be provided.",
    },
    {
        title: 'If i miss attending this can i attend it again ?',
        answer: "You may attend it agin at a later date.",
    },
    {
        title: 'What do my child needs to keep handy during the webinar ?',
        answer: "Just a open mind and a book to take a lot of notes",
    },
  ];

  const handleClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className="faq-section flex flex-col justify-center items-center gap-2 pt-10 pb-20 sm:mx-10">
        <div className='py-12 flex flex-col items-center justify-center'>
            <div className='text-5xl font-bold'>Frequently asked questions</div>
            <div className='w-[300px] h-2 bg-purple-600 z-0'></div>
        </div>
      {questions.map((question, index) => (
        <div className='lg:w-[700px] md:w-[600px] w-[310px] bg-[#5d62ff] text-white p-5 rounded-lg'>
        <div key={index} className={`faq-item flex flex-col ${activeQuestion === index ? 'active' : ''}`}>
            {/* <div className='flex'> */}
                <button className='flex justify-between text-left' onClick={() => handleClick(index)}>
                    <p className='flex justify-start'>{question.title}</p>
                    <div className=' flex flex-row justify-end items-center content-end pl-5'><FiArrowDown/></div>
                </button>
            {activeQuestion === index && <p className='pt-5'>{question.answer}</p>}
        </div>
        </div>
      ))}
    </div>
  )
}

export default Faq