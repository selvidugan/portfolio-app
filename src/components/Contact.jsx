import React from 'react'


const Contact = () => {

  return ( 
    <div name='contact' className='w-full h-screen bg-[#005C5B] text-[#FFC745] flex justify-center items-center p-4'>
        <form method='POST'action="https://getform.io/f/caa0537c-5408-4b91-b518-8b15c7d676f9" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FFC745]'>Contact</p>
                <p className='py-4'>Submit the form below to contact me..</p>
            </div>
            <input className='p-2 bg-[#6fc2b0] placeholder-[#3D3F44]' type="text" placeholder='Name' name='name' required/>
            
            <input  className='my-4 p-2 bg-[#6fc2b0] placeholder-[#3D3F44]' type="email" placeholder='E-mail' name='email' required />
            
            <textarea className='p-2 bg-[#6fc2b0] placeholder-[#3D3F44]' name="message" rows="10" placeholder='Message' required></textarea>
        
            <button type='submit' className='text-[#FFC745] border-2 border-[rgb(43.5%,76.1%,69%)] hover:bg-[rgb(43.5%,76.1%,69%)] hover:border-[#C745] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
} 

export default Contact