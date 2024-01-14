import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bae539c4-618f-488f-b01b-006891db3064" className='text-black flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-xl text-gray-300 py-4'>// Submit the form below or shoot me an email - brayanfernande1706@gmail.com</p>
            </div>
            <p className='text-xl text-gray-300 py-4'>Name</p>
            <input className='text-black bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <p className='text-xl text-gray-300 py-4'>Email</p>
            <input className='text-black my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <p className='text-xl text-gray-300 py-4'>message</p>
            <textarea className='text-black bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

